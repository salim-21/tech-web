import React from 'react'
import  { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
        <div className='container-fluid'>
      <footer class="bg-body-tertiary text-center">
  {/* <!-- Grid container --> */}
  <div class="container p-4 pb-0">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- Facebook --> */}
      <a
       data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:' #3b5998'}}

        href="https://www.facebook.com/profile.php?id=100019881785277"
        role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      {/* <!-- Twitter --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:' #55acee'}}

        href="#!"
        role="button"
        ><i class="fab fa-twitter"></i ></a>

      {/* <!-- Google --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:' #dd4b39'}}

        
        href="https://www.facebook.com/profile.php?id=100019881785277"
        role="button"
        ><i class="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:' #ac2bac'}}

        href="https://www.instagram.com/salim_choudhary_090/"
        role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:' #0082ca'}}
        href="https://www.linkedin.com/in/salim-khan-a375322ba/"
        role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        data-mdb-ripple-init
        class="btn text-white btn-floating m-1"
        style={{backgroundColor:' #333333'}}

        href="https://github.com/salim-21"
        role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center p-3">
    © 2024 Copyright:
    <a class="text-body" href="https://.com/">slm.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
</div>
    </Fragment>
  )
}
export default Footer
