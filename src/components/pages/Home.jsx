import Category from "../Category"
import Features from "../Features"
import Header from "../Header"
import HeroSection from "../HeroSection"
import NewArrival from "../NewArrival"
import TopRatedProducts from "../TopRatedProducts"
import Footer from "../Footer"
const Home = () => {
  return (
    <div>
    <Header />
    <HeroSection />
    <Features />
    <Category />
    <TopRatedProducts />
    <NewArrival />
    <Footer />
    </div>
  )
}

export default Home
