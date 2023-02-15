namespace laundry.Models
{
    public class Week
    {
        public int id { get; set; }
        public string name { get; set; }

        public int booked { get; set; }

        public string bookedBy { get; set; }

    }
}
