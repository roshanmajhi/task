import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <section className='footer'>
      <div className='container'>
         <div className='row'>
            <div className='col-lg-3'>
              <div className='bx1 mt-5 pt-5 text-center'>
                 <Link to="/"><img src={require('../logo/lgo1.png')} alt='' className=''/></Link> 
                 <p>AakashLabs implements advanced digital technologies in areas that are crucial to meeting your business objectives. Connect with us for details.</p>
                 <Link to="maitto:info@aakashlabs.com">info@aakashlabs.com</Link>
                 <p><Link to="tel:01-4530196">01-4530196</Link></p>
                 
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='bx1 mt-5 pt-5 text-center'>
                <h4 className='hf'>QUICK LINKS</h4>
                <p className='p'><Link to="/Ourexpertise" className='li'> Our Expertise</Link></p>
                <p className='p'><Link to="/Casestudy" className='li'> Case Studies</Link></p>
                <p className='p'><Link to="/Aboutus" className='li'> Contact Us</Link></p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='bx1 mt-5 pt-5 text-center'>
                <h4 className='hf'>ABOUT</h4>
                <p className='p'><Link to="/Ourexpertise" className='li'> About Us</Link></p>
                <p className='p'><Link to="/Casestudy" className='li'> Team</Link></p>
                <p className='p'><Link to="/Carrer" className='li'> Carrer</Link></p>
                <p className='p'><Link to="/Blogs" className='li'> Blog</Link></p>
              </div>
            </div>

            <div className='col-lg-3'>
              <div className='bx1 mt-5 pt-5 text-center'>
                <h4 className='hf'>Get Connected</h4>
                <div className='d-flex justify-content-center flex-wrap mt-3 '>
                <p className='p'><Link to="https://facebook.com" className='li fs-2 p-4'><i class="bi bi-facebook"></i></Link></p>
                <p className='p'><Link to="https://instagram.com" className='li fs-2'> <i class="bi bi-instagram"></i></Link></p>
                </div>
                <div className='d-flex justify-content-center flex-wrap'>
                <p className='p'><Link to="https://Linkedin.com" className='li fs-2 p-4'><i class="bi bi-linkedin"></i></Link></p>
                <p className='p'><Link to="https://whatsapp.com" className='li fs-2'> <i class="bi bi-whatsapp"></i></Link></p>
                </div>
              </div>
            </div>
         </div>
      </div>
      <p className='text-center'>© 2021 All Rights Reserved Aakash Labs</p>
     </section>
    </>
  )
}

export default Footer
