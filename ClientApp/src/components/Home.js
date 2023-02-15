import React, { useState, useEffect } from 'react';
import { Button, Table } from 'reactstrap';

const Home = () => {
  const [data, setData] = useState([]);
  const [endpoint, setEndpoint] = useState('/api/weeks/range/70/139');


  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error, "hi"));
  }, [endpoint]);

  const timeSlots = ["7:00-8:30", "8:30-10:00", "10:00-11:30", "11:30-13:00", "13:00-14:30", "14:30-16:00", 
  "16:00-17:30", "17:30-19:00", "19:00-20:30", "20:30-22:00"];

  const handleForwardClick = () => {
    if (endpoint === '/api/weeks/range/0/69') {
      setEndpoint('/api/weeks/range/70/139');
    } else if (endpoint === '/api/weeks/range/70/139') {
      setEndpoint('/api/weeks/range/140/209');
    } else if (endpoint === '/api/weeks/range/140/209') {
      setEndpoint('/api/weeks/range/210/279');
    }
  };
  
  
  const handleBackwardClick = () => {
    if (endpoint === '/api/weeks/range/70/139') {
      setEndpoint('/api/weeks/range/0/69');
    } else if (endpoint === '/api/weeks/range/140/209') {
      setEndpoint('/api/weeks/range/70/139');
    } else if (endpoint === '/api/weeks/range/210/279') {
      setEndpoint('/api/weeks/range/140/209');
    }
  };


  const rows = [];
  let headers = [];

  headers.push(<th key='empty'></th>);
  for (let j = 0; j < 7; j++) {
    headers.push(<th key={`header-${j}`}>{j === 0 ? 'Monday' : j === 1 ? 'Tuesday' : j === 2 ? 'Wednesday' : j === 3 ? 'Thursday' : j === 4 ? 'Friday' : j === 5 ? 'Saturday' : 'Sunday'}</th>);
  }

  rows.push(<tr key='header'>{headers}</tr>);
  
  for (let i = 0; i < 10; i++) {
    let cells = [];
    cells.push(<td key={`label-${i}`}>{timeSlots[i]}</td>);
    for (let j = 0; j < 7; j++) {
      cells.push(<td key={`${i}-${j}`}>{ data[j * 10 + i] && data[j * 10 + i].name }</td>);
    }
    rows.push(<tr key={i}>{cells}</tr>);
  }
  
  return (
    <>
      <div>
      <Button onClick={handleBackwardClick} disabled={endpoint === '/api/weeks/range/0/69'}>Backward</Button>
      <Button onClick={handleForwardClick} disabled={endpoint === '/api/weeks/range/210/279'}>Forward</Button>
      <p>gu</p>
      </div>
      <div className="table-responsive">
        <Table bordered>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Home;
