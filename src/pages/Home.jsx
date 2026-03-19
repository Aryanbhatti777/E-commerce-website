import Hero from './Hero';
import Navbar from  '../components/Navbar'
import Products from './FeaturedProducts';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import Bestseller from './Bestseller';
import AboutUs from './About';
import ContactUs from './Contact';


const Home = () => {

  
  return (
    <>
      <Hero />
      <Categories/>
      <FeaturedProducts/>
      <Bestseller/>
      <AboutUs/>
      <ContactUs/>
  
    </>
  )
}

export default Home;