import React from 'react'
import './Home_product.css'
import { TbCurrencyBaht } from "react-icons/tb";

function Watch() {
  return (
    <div className='product'>
         <div className="product-con"> {/*title and table */}

            {/* title */}
            <div className="product-title">
                <p>Apple Watch</p>
            </div>

            <div className="table-size">
                {/* table */}
                <div className="product-table">

                    {/* column #1 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-s8-segment-202209_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1661543959558'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Apple Watch Series 8</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />15,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-se-segment-202209_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1661544167059'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Apple Watch SE</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />9,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-ultra-segment-202209_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1661546729359'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Apple Watch Ultra</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />31,900 </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* column #2 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-hermes-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1660779952201'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Apple Watch Herme</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />43,900 </p>
                            </div>
                        </div>

                        <div className="product-row empty"></div>
                        <div className="product-row empty"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Watch