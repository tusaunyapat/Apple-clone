import React from 'react'
import './Home_product.css'
import { TbCurrencyBaht } from "react-icons/tb";

function Iphone() {
  return (
    <div className='product'>
         <div className="product-con"> {/*title and table */}

            {/* title */}
            <div className="product-title">
                <p>iPhone</p>
            </div>

            <div className="table-size">
                {/* table */}
                <div className="product-table">

                    {/* column #1 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1663348188617'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>iPhone 14 Pro</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />41,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1663348188615'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>iPhone 14</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />32,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-segment-202109?wid=800&hei=600&fmt=png-alpha&.v=1629764495000'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>iPhone 13</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />24,900 </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* column #2 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-segment-se?wid=800&hei=600&fmt=png-alpha&.v=1646754339746'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>iPhone SE</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />17,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-12-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1661269962584'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>iPhone 12</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />24,900 </p>
                            </div>
                        </div>

                        <div className="product-row empty"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Iphone