import React from 'react'

import Header from "../component/Header";
import Mac from "../component/Home_mac";
import Iphone from "../component/Home_iphone";
import Watch from "../component/Home_watch";
import Ipad from "../component/Home_ipad";
import Ipod from "../component/Home_ipod";
import Accessories from "../component/Home_accessories";
import Footer from "../component/Footer";


function Homepage() {
  return (
    <>
        <Header />
        <Mac />
        <Iphone />
        <Watch />
        <Ipad />
        <Ipod />
        <Accessories />
        <Footer />
    </>
  )
}

export default Homepage