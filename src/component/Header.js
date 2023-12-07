import React from "react";
import "./Header.css";
import { AiFillApple, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";

function Header() {
  return (
    <div className="header">
      <div className="header-con">
        <div className="menu">
          <ul>
            <li className="logo">
              <a href="#">
                <AiFillApple />
              </a>
            </li>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/mac">Mac</a>
            </li>
            <li>
              <a href="/ipad">iPad</a>
            </li>
            <li>
              <a href="/iphone">iPhone</a>
            </li>
            <li>
              <a href="/watch">Watch</a>
            </li>
            <li>
              <a href="/">AirPods</a>
            </li>
            <li>
              <a href="/">TV & Home</a>
            </li>
            <li>
              <a href="/">Only on Apple</a>
            </li>
            <li>
              <a href="/accessories">Accessories</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
            <li className="search">
              <a href="#">
                <BiSearch />
              </a>
            </li>
            <li className="bag">
              <a href="#">
                <BsHandbag />
              </a>
            </li>
          </ul>
        </div>

        <p>Shop for your favorite Apple products.</p>
      </div>
    </div>
  );
}

export default Header;
