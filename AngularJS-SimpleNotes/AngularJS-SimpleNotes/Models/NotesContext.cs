using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace AngularJS_SimpleNotes.Controllers
{
    public class NotesContext : DbContext
    {
        public NotesContext()
        { }

        public DbSet<Note> Notes { get; set; }
    }
}