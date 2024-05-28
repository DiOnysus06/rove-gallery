import Nav from './Components/Nav'
import './App.css'
import Loader from './Components/Loader'
import Footer from './Components/Footer'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Gallery from './Components/Gallery'


function App() {

  useGSAP(()=>{
    gsap.from(".clip-top, .clip-bottom", 2,{
      delay:1,
      height:"50vh",
      ease:"power4.inOut",
  });
  gsap.to(".marquee", 3.5, {
      delay:0.75,
      top:"50%",
      ease : "power4.inOut"
  });

  gsap.to(".clip-top .marquee, .clip-bottom .marquee ", 5, {
      delay:1,
      left:"100%",
      ease : "power3.inOut"
  })
  gsap.to(".clip-top ", 2, {
      delay:6,
      clipPath: "inset(0 0 100% 0)",
      ease : "power4.inOut"
  })
  gsap.to(".clip-bottom ", 2, {
      delay:6,
      clipPath: "inset(100% 0 0 0)",
      ease : "power4.inOut"
  })

  gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", 1,{
    delay: 6,
    opacity: 0,
    ease: "Power2.inOut",
  }) 

  })
  return (
   <>
      <Nav/>
      <Loader/>
      <Gallery/>
      <Footer/>  
   </>
  )
}

export default App
