import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";


import vector from'../assets/images/Vector.png'
import shower from '../assets/images/shower.png'
import carParking from '../assets/images/parking-car.png'
import gym from '../assets/images/gym.png'
import clothsHanger from '../assets/images/clothes-hanger.png'
import airConditioner from '../assets/images/air-conditioner.png'
import share from '../assets/images/share-icon.png'
import fav from '../assets/images/Fav.png'

const FlatCard = ({ product }) => {

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  const handleClick = () => {
    navigate("/flat");
  };

  return (
    <div className="card h-100 shadow-sm" onClick={handleClick}>
      <Slider {...settings}>
        {product.images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              className="card-img-top flat-card-img"
              alt={product.name}
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
          </div>
        ))}
      </Slider>
      <div className="share-like-tab">
        <button className="btn p-0"><img src={fav} width="20"/></button>
        <button className="btn p-0"><img src={share} width="20"/></button>
      </div>
      <div className="card-body d-flex flex-column p-0 pt-3">
        <div className="card-title d-flex justify-content-between">
          <p>
            <span>Flat Sharing</span>
            <span>|</span>
            <span>Male</span>
          </p>
          <p>
            ₹ 12500
          </p>
        </div>
        <div className="card-text mb-3">
          <div>
           <span class="text-wrap">Indu Fortune Fields</span>
           <span class="text-wrap">Swamy Ayyappa Society, Madhapur</span>
          </div>
          <div>
            <span className="text-end">2 days</span>
          </div>
        </div>
        <div className="d-flex align-items-center flat-card-footer justify-content-between pt-3 border-top">
          <div className="d-flex w-50">
            <p className="m-0 glass-shadow">Society</p>
            <p className="m-0 glass-shadow">2BHK</p>
          </div>
          <div className="d-flex w-50 justify-content-between">
            <img src={airConditioner} width={16} height={16}/>
            <img src={shower} width={16} height={16}/>
            <img src={clothsHanger} width={16} height={16}/>
            <img src={carParking} width={16} height={16}/>
            <img src={gym} width={16} height={16}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatCard;
