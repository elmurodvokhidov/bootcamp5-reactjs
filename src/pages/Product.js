import React, { useContext } from 'react'
import { ContextData } from '../context/Context';
import GlobalCard from '../tools/GlobalCard';
import SelectSmall from '../tools/SmallSelect';
import SearchComponent from '../tools/SearchComponent';
import PriceSelect from '../tools/PriceSelect';

function Product() {
  const { allProducts, category, search, price } = useContext(ContextData);

  return (
    <div className='globalStyle product'>
      <h1 className="bigText">Products</h1>

      <div className="actionFilter">
        <SelectSmall />
        <PriceSelect />
        <SearchComponent />
      </div>

      <div className="globalStyleWrapper">
        {
          allProducts
            .filter(element => {
              if ((element.cat === category || category === 0) &&
                (element.title.toLowerCase().includes(search.toLowerCase())) &&
                ((Math.round(element.price - ((element.price / 100) * element.discount)) > price.split('-')[0] &&
                Math.round(element.price - ((element.price / 100) * element.discount)) < price.split('-')[1]) || price === '0-0')
              ) {
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