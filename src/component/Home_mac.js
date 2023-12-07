import React from 'react'
import './Home_product.css'
import { TbCurrencyBaht } from "react-icons/tb";

function Mac() {
  return (
    <div className='product'>
         <div className="product-con"> {/*title and table */}

            {/* title */}
            <div className="product-title">
                <p>Mac</p>
            </div>

            <div className="table-size">
                {/* table */}
                <div className="product-table">

                    {/* column #1 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202110?wid=800&hei=600&fmt=png-alpha&.v=1665113974992'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>MacBook Air with M1 chip</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />32,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-m2-segment-202206?wid=800&hei=600&fmt=png-alpha&.v=1665423907695'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>MacBook Air with M2 chip</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />43,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-segment-202206?wid=800&hei=600&fmt=png-alpha&.v=1665181721583'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>MacBook Pro</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />46,900 </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* column #2 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/imac-segment-202110?wid=800&hei=600&fmt=png-alpha&.v=1665182017682'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>iMac</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />42,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-mini-segment?wid=800&hei=600&fmt=png-alpha&.v=1604368872000'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Mac mini</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />22,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-segment-studio?wid=800&hei=600&fmt=png-alpha&.v=1645750647549'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Mac Studio</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />69,900 </p>
                            </div>
                        </div>
                        
                    </div>

                    {/* column #3 */}
                    <div className="product-column">

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mac-pro-segment-2019?wid=800&hei=600&fmt=png-alpha&.v=1572897645347'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Mac Pro</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />189,900 </p>
                            </div>
                        </div>

                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-m2-segment-202206?wid=800&hei=600&fmt=png-alpha&.v=1665423907695'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Studio Display</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />54,900 </p>
                            </div>
                        </div>

                        
                        {/* 1 */}
                        <div className="product-row">
                            <div className="product-img">
                                <img src='https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-pro-segment-202206?wid=800&hei=600&fmt=png-alpha&.v=1665181721583'></img>
                            </div>
                            <div className="product-name">
                                <a href='#'>Pro Display XDR</a>
                            </div>
                            <div className="product-cost">
                                <p>From <TbCurrencyBaht />154,900 </p>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mac
