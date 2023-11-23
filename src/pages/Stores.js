import React, { useContext } from 'react'
import { ContextData } from '../context/Context'
import GlobalCard from '../tools/GlobalCard';

function Stores() {
  const { allProducts } = useContext(ContextData);

  return (
    <div className='globalStyle stores'>
      <h1 className="bigText">Stores</h1>

      <div className="globalStyleWrapper">
        {
          allProducts.filter(element => {
            if (element.status) return element
          }).map(item => (
            <div key={item.id}>
              <GlobalCard item={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Stores