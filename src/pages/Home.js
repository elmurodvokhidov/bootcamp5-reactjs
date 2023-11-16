import { useContext } from "react"
import AutoPlaySlider from "../tools/AutoPlaySlider"
import GlobalSlider from "../tools/GlobalSlider"
import { ContextData } from "../context/Context";
import CategoriesSlider from "../tools/CategoriesSlider";
import BestValueCard from "../tools/BestValueCard";

function Home() {
  const { allProducts } = useContext(ContextData);

  return (
    <div className='home'>
      {/* Slider */}
      <AutoPlaySlider />
      {/* Slider */}

      <main>
        {/* Categries */}
        <CategoriesSlider />
        {/* Categries */}

        {/* Categries */}
        <GlobalSlider spacialID={"TopFeaturedProducts"} smallText={"For You"} bigText={"Top Featured Products"} sliderCard={allProducts} />
        {/* Categries */}

        {/* Best Values */}
        <div className="bestValues">
          <h2 className="smallText">Offers</h2>
          <h1 className="bigText">Best Values</h1>

          <div className="bestValuesWrapper">
            <BestValueCard title1={"Daily Essentials"} title2={"20% off Everyday"} img={"./img/Rectangle 3.png"} />
            <BestValueCard title1={"GET UP TO"} title2={"30% Off"} img={"./img/Rectangle 31.png"} />
            <BestValueCard title1={"Special Discount"} title2={"for All Items"} img={"./img/Rectangle 32.png"} />
          </div>

          <div className="bestValuesFooter">
            <div className="bestValuesFooterBox">
              <h1>Get $5 Cashback! Min Order of $50</h1>
              <button>USE CODE :  COMBOSUPERR2a</button>
            </div>
          </div>
        </div>
        {/* Best Values */}

        {/* Top Vegetables & Fruits Products */}
        <GlobalSlider spacialID={"TopVegetablesFruitsProducts"} smallText={"For You"} bigText={"Top Vegetables & Fruits Products"} sliderCard={allProducts} />
        {/* Top Vegetables & Fruits Products */}

        {/* Added new Products */}
        <GlobalSlider spacialID={"AddednewProducts"} smallText={"For You"} bigText={"Added new Products"} sliderCard={allProducts} />
        {/* Added new Products */}
      </main>
    </div>
  )
}

export default Home