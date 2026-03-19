import Hero from './Hero';
import Navbar from  '../components/Navbar'
import Products from './FeaturedProducts';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Bestseller from './Bestseller';


const Home = () => {

  
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedProducts/>
      <Bestseller/>
  
    </>
  )
}

export default Home;