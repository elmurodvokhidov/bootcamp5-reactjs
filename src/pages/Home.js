import { useContext } from "react"
import AutoPlaySlider from "../tools/AutoPlaySlider"
import GlobalSlider from "../tools/GlobalSlider"
import { ContextData } from "../context/Context";
import CategoriesSlider from "../tools/CategoriesSlider";

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
      </main>
    </div>
  )
}

export default Home