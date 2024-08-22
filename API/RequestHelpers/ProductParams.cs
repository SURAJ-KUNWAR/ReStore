using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.RequestHelpers
{
    public class ProductParams : PaginationParams
    {
        public String  OrderBy { get; set; }

        public String SearchTerm { get; set; }
        public String Types { get; set; }
        public String Brands { get; set; }
    }
}