import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import banner3 from "../assets/banner3.jpg"
import shopnow from "../assets/shop-now.png"
import "../styles/home.css"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

const Hero = () => {
    return (
        <>
            <section className="hero">

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                >

                    <SwiperSlide>
                        <div className="banner banner1">
                            <img src={banner1} alt="banner1" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="banner banner2">
                            <img src={banner2} alt="banner2" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="banner banner3">
                            <img src={banner3} alt="banner3" />
                        </div>
                    </SwiperSlide>

                </Swiper>
            </section>

            <section className="shop-now">
                <img src={shopnow} alt="shop-now" />
                <div className="main-text">
                    <h1>Your Favorite Products, All in One Place</h1>
                    <p>Shop smarter, faster, and better with us.</p>
                    <button className="btn">Shop Now</button>
                </div>

            </section>


        </>
    )
}

export default Hero