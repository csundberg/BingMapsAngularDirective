using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LocationApplication.Models;

namespace LocationApplication.Controllers
{
    public class UsersController : ApiController
    {
        List<User> users = new List<User>
        { 
            new User { Id = 1, FirstName = "Ronnie", LastName = "George", Picture = "http://api.randomuser.me/portraits/med/men/84.jpg", City = "New York", State = "NY", Latitude = "40.6639307188879", Longitude = "-73.9382749875207" }, 
            new User { Id = 2, FirstName = "Gene", LastName = "Fleming", Picture = "http://api.randomuser.me/portraits/med/men/55.jpg", City = "Seattle", State = "WA", Latitude = "47.6202459300221", Longitude = "-122.350686639834" }, 
            new User { Id = 3, FirstName = "Terry", LastName = "Williams", Picture = "http://api.randomuser.me/portraits/med/men/95.jpg", City = "Tampa", State = "FL", Latitude = "27.9680023626007", Longitude = "-82.4763858998612" },
            new User { Id = 4, FirstName = "Sherry", LastName = "Hayes", Picture = "http://api.randomuser.me/portraits/med/women/14.jpg", City = "Chicago", State = "IL", Latitude = "40.107561214997", Longitude = "-89.1611562968684" }
        };

        // GET: api/Users
        public IEnumerable<User> Get()
        {
            return users;
        }

        // GET: api/Users/5
        public IHttpActionResult Get(int id)
        {
            var user = users.FirstOrDefault((u) => u.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // POST: api/Users
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Users/5
        public void Delete(int id)
        {
            users.RemoveAll(u => u.Id == id);
        }
    }
}
