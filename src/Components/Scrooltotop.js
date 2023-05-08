import React, { useEffect,useState } from 'react'
import {BsArrowUpCircleFill} from 'react-icons/bs'
const Scrooltotop = () => {
    const [visible, setvisible]=useState(false);
    const gotobtn=()=>{
      window.scrollTo({top:0, left:0, behavior:"smooth"});
    };
    const listenToScroll=()=>{
        
        let heightToHidden =250;
        const winScroll=
        document.body.scrollTop || document.documentElement.scrollTop; 
        if(winScroll > heightToHidden){
             setvisible(true);
        }  else{
            setvisible(false);
        }
     };
     useEffect(()=>{
       window.addEventListener("scroll",listenToScroll);
     },[]);
  return (
    <wrapper>
        {visible &&(
    <div className="top-btn" onClick={gotobtn}>
    < BsArrowUpCircleFill className='arrow'/>
    </div>
    )}
    </wrapper>
  )
}
export default Scrooltotop


