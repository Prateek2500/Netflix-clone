import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll",null);
    };
  },[]);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="" />
      <img className='profile_logo' src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABe3AS8xWNNmm8HlokLrmgIPqxgDohbraAUmm3dQrgmRf7U13AMm-4aXXkLFYD4lyDg6bNvqt_2Lc8cdtEM9Y2n3TDYTrXqQ.png?r=b39" alt="" />
    </div>
  )
}

export default Nav
