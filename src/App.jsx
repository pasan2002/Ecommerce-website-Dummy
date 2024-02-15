import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Products from "./components/Products/Products"
import TopRated from "./components/TopRated/TopRated"
import Banner from "./components/Banner/Banner"
import Subscription from "./components/Subscription/Subscription"
import Popup from "./components/Popup/Popup"
import AOS from "aos"
import "aos/dist/aos.css"
import Comments from "./components/Comments/Comments"
import Footer from "./components/Footer/Footer"

export default function App(){
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    })
    AOS.refresh()
  }, [])

  return(
    <div className="bg-white dark:bg-gray-900 dark:text-white 
    duration-200">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopRated handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscription />
      <Products />
      <Comments />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}