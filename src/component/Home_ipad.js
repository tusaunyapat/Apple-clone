import React from "react";
import "./Home_product.css";
import { TbCurrencyBaht } from "react-icons/tb";

function Ipad() {
  return (
    <div className="product">
      <div className="product-con">
        {" "}
        {/*title and table */}
        {/* title */}
        <div className="product-title">
          <p>iPad</p>
        </div>
        <div className="table-size">
          {/* table */}
          <div className="product-table">
            {/* column #1 */}
            <div className="product-column">
              {/* 1 */}
              <div className="product-row">
                <div className="product-img">
                  <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-segment-ipad-pro-202210?wid=800&hei=600&fmt=png-alpha&.v=1664995296207"></img>
                </div>
                <div className="product-name">
                  <a href="#">iPad pro</a>
                </div>
                <div className="product-cost">
                  <p>
                    From <TbCurrencyBaht />
                    32,900{" "}
                  </p>
                </div>
              </div>

              {/* 1 */}
              <div className="product-row">
                <div className="product-img">
                  <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-segment-air?wid=800&hei=600&fmt=png-alpha&.v=1645510190778"></img>
                </div>
                <div className="product-name">
                  <a href="#">iPad Air</a>
                </div>
                <div className="product-cost">
                  <p>
                    From <TbCurrencyBaht />
                    23,900{" "}
                  </p>
                </div>
              </div>

              {/* 1 */}
              <div className="product-row">
                <div className="product-img">
                  <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-tv-4k-segment?wid=800&hei=600&fmt=png-alpha&.v=1617845074000"></img>
                </div>
                <div className="product-name">
                  <a href="#">iPod & Apple TV</a>
                </div>
                <div className="product-cost">
                  <p>
                    From <TbCurrencyBaht />
                    17,900{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* column #2 */}
            <div className="product-column">
              {/* 1 */}
              <div className="product-row">
                <div className="product-img">
                  <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-segment-ipad-202109?wid=800&hei=600&fmt=png-alpha&.v=1646862588713"></img>
                </div>
                <div className="product-name">
                  <a href="#">iPad gen 9</a>
                </div>
                <div className="product-cost">
                  <p>
                    From <TbCurrencyBaht />
                    12,900{" "}
                  </p>
                </div>
              </div>

              {/* 1 */}
              <div className="product-row">
                <div className="product-img">
                  <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-segment-ipad-mini-202109?wid=800&hei=600&fmt=png-alpha&.v=1629768130000"></img>
                </div>
                <div className="product-name">
                  <a href="#">iPad mini</a>
                </div>
                <div className="product-cost">
                  <p>
                    From <TbCurrencyBaht />
                    19,900{" "}
                  </p>
                </div>
              </div>

              <div className="product-row empty"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ipad;
