using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CoreAPI.Models
{
    public class ClassTimesContext : DbContext
    {
        public ClassTimesContext (DbContextOptions<ClassTimesContext> options)
            : base(options)
        {
        }

        public DbSet<CoreAPI.Models.ClassTimes> ClassTimes { get; set; }
    }
}
