import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1"
          title="Samsung Gear S3 Frontier Smartwatch (Bluetooth), SM-R760NDAAXAR"
          price={122.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41ehOZgmMML._AC_SY200_.jpg"
        />
        <Product
          id="2"
          title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, PS4 Headset with Noise Canceling Mic & LED Light, Compatible with PC, PS4, Xbox One Controller(Adapter Not Included)"
          price={89.0}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41QztBTooxL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="Blendtec Total Classic Original Blender - WildSide+ Jar (90 oz) - Professional-Grade Power - 6 Pre-programmed Cycles - 10-speeds - Black (Renewed)"
          price={59.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41AZOLr72bL._AC_SY200_.jpg"
        />
        <Product
          id="4"
          title="Jenga Classic Game"
          price={19.0}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/519cveTryBL._AC_SY200_.jpg"
        />
        <Product
          id="5"
          title="Crayola Colored Pencils, Long, 36-Pack, Multicolor"
          price={8.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51LmVkH0CkL._AC_SY200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
