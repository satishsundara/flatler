import React, { useState } from 'react';

import filterBtnIcn1 from '../assets/images/fiter-btn-icon-1.png';
import filterBtnIcn2 from '../assets/images/fiter-btn-icon-2.png';
import filterBtnIcn3 from '../assets/images/filter-btn-icon-3.png';
import filterBtnIcn4 from '../assets/images/filter-btn-icon-4.png';
import filterDrop from '../assets/images/search-drop.png';
import flatSampleBg from '../assets/images/flat-sample-bg.jpg';
import FlatCard from '../components/FlatCard';
import FlatFilterPopup from '../components/FlatFilterPopup';



const FilterResult = () => {

   const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };

  const productGroups = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },
    {
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },{
      id: 1,
      name: "Wireless Headphones",
      description: "Noise-cancelling, Bluetooth, 20 hrs battery",
      price: 99.99,
      images: [
        flatSampleBg,flatSampleBg,flatSampleBg
      ]
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <p className="count-result m-0">145 Results</p>
        <div className="d-flex justify-content-end filter-bar pe-0">
          <button className="btn-one d-flex justify-space-between align-items-center" onClick={() => openModal("viewType")}>
            <img src={filterBtnIcn1} width={32} height={32} alt="Filter icon 1" />
            <img src={filterBtnIcn2} width={32} height={32} alt="Filter icon 2" />
          </button>
          <button className="btn-two d-flex justify-space-between align-items-center gap-3 px-3" onClick={() => openModal("filters")}>
            <img src={filterBtnIcn3} width={16} height={16} alt="Filter icon 2" /> 
            Filters 
            <span class="position-relative applied-filter-dis">4</span>
          </button>
          <button className="btn-three d-flex justify-content-between align-items-center px-3" onClick={() => openModal("postedOn")}>
            <img src={filterBtnIcn4} width={16} height={16} alt="Filter icon 2" /> 
            <span>Posted On</span> 
            <img src={filterDrop} width={16} height={16} alt="Filter icon 2" />
          </button>
        </div>
      </div>
      <div className="row">
      {productGroups.map((product) => (
        <div key={product.id} className="col-md-3 mb-4 flat-card">
          <FlatCard product={product} />
        </div>
      ))}
    </div>

    <FlatFilterPopup
        show={isModalOpen}
        onClose={closeModal}
        title={
          modalType === "filters"
            ? "Filters"
            : modalType === "postedOn"
            ? "Posted On"
            : "View Options"
        }
      >
        <p>Content for {modalType}</p>
      </FlatFilterPopup>
    </>
  );
};

export default FilterResult;
