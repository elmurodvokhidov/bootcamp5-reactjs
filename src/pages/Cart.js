import React, { useContext } from 'react'
import { ContextData } from '../context/Context'
import GlobalCard from '../tools/GlobalCard';

function Cart() {
  const { basket } = useContext(ContextData);

  return (
    <div className='globalStyle product'>
      <h1 className="bigText">Products in Basket</h1>

      <div className="globalStyleWrapper">
        {
          basket.length > 0 ?
            basket.map(item => (
              <div key={item.id}>
                <GlobalCard item={item} />
              </div>
            )) : <h2>Information not found!</h2>
        }
      </div>

      <div className="basketFooter">
        <aside>
          <div className="input_group">
            <input type="text" name="voucher" id="voucher" />
            <button>Redeem</button>
          </div>
        </aside>
        <aside>
          <header>
            <ul>
              <li>Subtotal</li>
              <li>Shipping fee</li>
              <li>Coupon</li>
              <li>TOTAL</li>
            </ul>
            <ul>
              <li>$998</li>
              <li>$20</li>
              <li>No</li>
              <li>${Math.round(basket.reduce((a, b) => a + (b.count + 1) * (b.price * (100 - b.discount) / 100), 0))}</li>
            </ul>
          </header>
          <button>Check Out</button>
        </aside>
      </div>
    </div>
  )
}

export default Cart