namespace API.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name  { get; set; }
        public  string Description  { get; set; }
        public long Price { get; set; } //$100.00 wil be sotred as 10000 in db
        public string PictureUrl { get; set; }
        public string  Type { get; set; }
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }
    }
    
    }