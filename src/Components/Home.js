import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Home = () => {
  
  const [post, setPost]=useState([]);
  const [count, setCount]=useState([]);


  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=6').then((res)=>res.json()).then(data=>setPost(data))
  }, []);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then(data=>setCount(data))
  }, []);

  const options={             /**Slider Responsive**/
    loop:true,
    center:true,
    items:2,
    margin:0,
    autoplay:true,
    dots:true,
    autoplayTimwout:8500,
    smartspeed:450,
    nav:false,
    responsive:{
      0:{items:1},
      600:{items:2},
      1000:{items:4}
    }
  }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7bb9xr8',
     'template_zqhz4ye', 
     form.current, 'G7gXsU2el3v2XSdht')
      .then((result) => {
          console.log(result.text);
         prompt("Message is sended!!!")
         form.current.reset();
      }, (error) => {
          console.log(error.text);
         prompt("Sorry, Something is Wrong !!!")
         form.current.reset();
      });
  };

 
  return (
    <>
    <section className='section1'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='box1'>
              <h1 className='bannerh1 card mt-3'>Our Experienced Team Is Committed To Grow Your Business With Online Leads, Calls, Conversion And Revenue.</h1>
              <h2>SOCIAL LINKS:</h2>
              <div className='d-flex flex-column px-5'>
               <Link to='https://www.facebook.com/AakashLabs/' target='_blank' className='social'><i class="bi bi-facebook"> Facebook.com</i></Link>
               <Link to='https://aakashlabs.com/' target='_blank' className='social'><i class="bi bi-browser-edge">Websites</i></Link>
               <Link to='mailto:hr.aakashlabs@gmail.com' target='_blank' className='social'><i class="bi bi-envelope">Mail</i></Link>
               </div>
              </div> 

          </div>
          <div className='col-lg-6'>
            <div className='box1'>
              <img src='./home/img1.jpeg' alt='' className='w-100'/>
              </div> 

          </div>

        </div>

      </div>
      <hr/>
    </section>
    <section className='section2 py-3'>
    <h1 className='text-center text-primary py-5 fw-5'>RESPONSIVE SLIDER</h1>
      <div className='container py-3'>
        <div className='row'>
        <OwlCarousel className='owl-theme' loop margin={10} items={4} {...options}>
          {post.map((a)=>(
           <div className='box2'>
              <img src={a.image} alt='' className='w-100'/>
              <h3>{a.title}</h3>
               </div>
          ))

          }
          </OwlCarousel>

           
          

        </div>

      </div>

    </section>
    <section className='section3'>
      
    <h1 className='text-center text-primary py-5 fw-5'>API Data</h1>
      <div className='container'>
        <div className='row'>
        {count.map((a)=>(
          <div className='col-lg-3 d-flex'>
          
            <div className='box3'>
               <img src={a.image}  alt='' className='card w-100'/>
               <h4 className='text-center box3h'>{a.title}</h4>
               </div>
               </div>
           ))}
          

        </div>

      </div>

    </section>
    <section className='container my-5'>
    <h1 className='text-center text-primary py-5 fw-5'>CONTACT US</h1>
    
    <div className='cnt'>
    <form method='Post'ref={form} onSubmit={sendEmail} className='d-flex flex-column justify-content-center'>
      <h4 className='sam px-5'>Sample of Form</h4>
     <input type='text' name='name' placeholder='Enter your Name' required className='py-2 px-5 my-3'/>
     <input type='text' name='number' placeholder='98******09' required className='py-2 px-5 my-3'/>
     <input type='text' name='email' placeholder='example@gmail.com' required className='py-2 px-5 my-3'/>
     <label>Gender</label>
     <label>male</label><input type="radio" name='gender'  required />
     <label>Female</label><input type="radio" name='gender'  required /> 
     <textarea name='message' placeholder='Enete message' required className='py-3 px-5 my-3 msg'/>
     <input type='submit' value="Send" className='py-2 mx-5 btnl'/>
    </form>
    </div>
    </section>
    </>
  )
}

export default Home
