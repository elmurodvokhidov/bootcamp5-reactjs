import React, { useContext } from 'react'
import { ContextData } from '../context/Context';
import GlobalCard from '../tools/GlobalCard';
import SelectSmall from '../tools/SmallSelect';

function Product() {
  const { allProducts, category } = useContext(ContextData);

  return (
    <div className='globalStyle product'>
      <h1 className="bigText">Products</h1>

      <div className="actionFilter">
        <SelectSmall />
      </div>

      <div className="globalStyleWrapper">
        {
          allProducts
            .filter(element => {
              if (element.cat === category) {
                return element
              }
              if (category === undefined) {
                return element
              }
            })
            .map(item => (
              <div key={item.id}>
                <GlobalCard item={item} />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Product