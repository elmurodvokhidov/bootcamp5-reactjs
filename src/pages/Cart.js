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
    </div>
  )
}

export default Cart