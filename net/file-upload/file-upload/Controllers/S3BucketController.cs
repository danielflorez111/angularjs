using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace file_upload.Controllers
{
    [Route("api/S3Bucket")]
    public class S3BucketController : ApiController
    {
        public IHttpActionResult CreateBucket()
        {
            return Ok();
        }

    }
}
