import './css/home.css';
import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"



function Home() {
  useEffect(() => {
    Aos.init({duration : 2000});
  },[]);
  return (
    <main>
      <img  src='https://i.postimg.cc/s25FMGW1/Bild-web.png' alt='' className='backgroundIMG'/>
      <div>
        <h1 data-aos="fade-right" className='VulcanStocksH1' >Lorem ipsum</h1>
        <div className='ContentRight'><h1 data-aos="fade-left" className='VulcanStocksH1' >Lorem ipsum</h1></div>
        <h1 data-aos="fade-right" className='VulcanStocksH1' >Lorem ipsum</h1>const name = new type(arguments);
      </div>
    </main>
  );
}

export default Home;