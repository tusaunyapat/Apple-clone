import React from 'react'
import './Home_product.css'
import { TbCurrencyBaht } from "react-icons/tb";

function Ipod() {
  return (
    
    <div className='product'>
         <div className="product-con"> {/*title and table */}

            {/* title */}
            <div className="product-title">
                <p>iPod and Apple TV</p>
            </div>

            <div className="table-size">
                {/* table */}
                <div className="product-table">

                    {/* column #1 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-4k-segment?wid=800&hei=600&fmt=png-alpha&.v=1617845074000'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>AppleTV 4K</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />5,290 </p>
                            </div>
                        </div>

                        {/* 1 */}
                    
                        <div className="product-row empty"></div><div className="product-row empty"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ipod