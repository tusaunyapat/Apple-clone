import React from 'react'
import { AiFillApple } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
        <div className="header-con">
            <ul>
                <li><a href="#"><AiFillApple /></a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">wacth</a></li>
                <li><a href="#">Airpods</a></li>
                <li><a href="#">TV & Home</a></li>
                <li><a href="#">Only on Apple</a></li>
                <li><a href="#">Accessories</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#"><BiSearch /></a></li>
                <li><a href="#"><BsHandbag /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header