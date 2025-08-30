import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";

import phone from '../assets/images/phone.png'
import chat from '../assets/images/comments-chat.png'
import fav from '../assets/images/Fav-flat.png'
import shareFlat from '../assets/images/share-flat.png'
import farwordFlat from '../assets/images/forword-flat.png'
import flatImg from '../assets/images/flat-image.png'
import homeAmt from '../assets/images/Amenities.svg'
import expences from '../assets/images/Expences.svg'
import preferences from '../assets/images/Preferences.svg'
import forSale from '../assets/images/For Sale.svg'
import flatSampleTwo from '../assets/images/flat-sample-2.jpg'
const ViewFlat = () => {
    const [activeSection, setActiveSection] = useState('amenities');

    const handleNavClick = (id) => {
        const container = document.querySelector('.flat-detalis-view .flat-details');
        const section = document.getElementById(id);
        
        if (container && section) {
            container.scrollTo({
            top: section.offsetTop - container.offsetTop, // relative scroll
            behavior: 'smooth'
            });
            setActiveSection(id);
        }
    };



    const images = [
        flatImg,
        flatSampleTwo,
        flatImg,
        flatSampleTwo,

    ];

    const [show, setShow] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = (index) => {
        setCurrentIndex(index);
        setShow(true);
    };

    const nextImage = () =>
        setCurrentIndex((prev) => (prev + 1) % images.length);

    const prevImage = () =>
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);


    return (
        <>
            <div className="flat-view-main row">
                <div className="col-6">
                    <div className='flat-contact-det'>
                        <div className='d-flex justify-content-between'>
                            <p>
                                <span className='text-baground'>Flat Sharing</span>
                                <span className='text-baground'> | </span>
                                <span className='text-baground'>Male</span>
                            </p>
                            <p className='text-baground'>₹ 12,500</p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <p>
                                Indu Fortune Fields
                            </p>
                            <p>
                                Deposite ₹ 25,000
                            </p>
                        </div>
                        <div className='d-flex justify-content-between align-items-end'>
                            <p className='w-75'>
                                Flat No 123/45, Sai Aishwarya Layout Road, Manikonda, Hyderabad, Telangana 500089, India
                            </p>
                            <p className='w-25 text-end'>
                                2 Days Ago
                            </p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='like-share-btn'>
                                <button><img src={fav} width={16.01} height={14.06} /></button>
                                <button><img src={shareFlat} width={16} height={16} /></button>
                                <button><img src={farwordFlat} width={16} height={16} /></button>
                            </div>
                            <div className='call-chat-btn'>
                                <button><img src={phone} className='pe-2' /> Call</button>
                                <button><img src={chat} className='pe-2' />Chat</button>
                            </div>
                        </div>

                    </div>
                    <div className='row show-flat-img'>
                        <div className='col-12 mb-2 mt-4 flat-img'>
                            <img src={images[0]} onClick={() => handleShow(0)} className='w-100' />
                        </div>
                        <div className='col-6 flat-img pe-1'>
                            <img src={images[1]} onClick={() => handleShow(1)} className='w-100' />
                        </div>
                        <div className='col-6 flat-img ps-1'>
                            <img src={images[2]} onClick={() => handleShow(2)} className='w-100' />
                        </div>
                    </div>
                    <div className='more-images' onClick={() => handleShow(0)}>
                        <button>+{images.length - 3}</button>
                    </div>
                    <Modal show={show} onHide={handleClose} centered size="lg" className='image-gallery-main'>
                        {/* Custom Close Button */}
                        <Button
                            variant="light"
                            onClick={handleClose}
                            className="position-absolute top-0 end-0 m-2 bg-none close-button"
                            style={{ zIndex: 3, width: "36px", height: "36px", padding: 0 }}
                        >
                            ✕
                        </Button>

                        <Modal.Body className="p-0 position-relative">
                            <div className='flat-contact-det border-0'>
                                <div className='d-flex justify-content-between'>
                                    <p>
                                        <span className='text-baground'>Flat Sharing</span>
                                        <span className='text-baground'> | </span>
                                        <span className='text-baground'>Male</span>
                                    </p>
                                </div>
                                <div className='d-flex justify-content-between align-items-end'>
                                    <p className=''>
                                        Flat No 123/45, Sai Aishwarya Layout Road, Manikonda, Hyderabad, Telangana 500089, India
                                    </p>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <img
                                        src={images[currentIndex]}
                                        className="w-100 imgs-gal-main-img" />
                                </div>
                                <div className='col-12'>
                                    <div className='d-flex w-100 '>
                                        {images.map((img, index) => (
                                            <div style={{ width: `${100 / images.length}%`, }} className='image-gal-sub-img'>
                                                <img
                                                    key={index}
                                                    src={img}
                                                    alt={`Thumbnail ${index + 1}`}
                                                    className={`w-100 ${index === currentIndex ? 'active' : ''}`}
                                                    onClick={() => setCurrentIndex(index)}
                                                />

                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>


                        </Modal.Body>
                    </Modal>

                </div>
                <div className="col-6 flat-detalis-view">
                    <nav className="nav">
                        <a
                            className={`nav-link ${activeSection === 'amenities' ? 'active' : ''}`}
                            onClick={() => handleNavClick('amenities')}
                        >
                            <img src={homeAmt} className='me-2' />Amenities
                        </a>
                        <a
                            className={`nav-link ${activeSection === 'expences' ? 'active' : ''}`}
                            onClick={() => handleNavClick('expences')}
                        >
                            <img src={expences} className='me-2' />Expences
                        </a>
                        <a
                            className={`nav-link ${activeSection === 'preferences' ? 'active' : ''}`}
                            onClick={() => handleNavClick('preferences')}
                        >
                            <img src={preferences} className='me-2' />Preferences
                        </a>
                        <a
                            className={`nav-link ${activeSection === 'for-sale' ? 'active' : ''}`}
                            onClick={() => handleNavClick('for-sale')}
                        >
                            <img src={forSale} className='me-2' />For Sale
                        </a>
                    </nav>

                    <div className='flat-details'>
                        <div className='amenities section' id='amenities'>
                            <p>Amenities</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Sharing Type</p>
                                        <div className='section-list'>
                                            <span>Flat Sharing</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Gender</p>
                                        <div className='section-list'>
                                            <span>Male</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='section-box'>
                                        <p>Property Type</p>
                                        <div className='section-list'>
                                            <span>Society</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='section-box'>
                                        <p>BHK Type</p>
                                        <div className='section-list'>
                                            <span>2BHK</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='section-box'>
                                        <p>Available by</p>
                                        <div className='section-list'>
                                            <span>Immediately</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Room Amenities</p>
                                        <div className='section-list'>
                                            <span>AC</span>
                                            <span>Attached Washroom</span>
                                            <span>Balcony</span>
                                            <span>Wardrobe</span>
                                            <span>Geyser</span>
                                            <span>Car Parking</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Flat Amenities</p>
                                        <div className='section-list'>
                                            <span>Cook</span>
                                            <span>Maid</span>
                                            <span>Kitchenware</span>
                                            <span>Cookwear</span>
                                            <span>Refrigerator</span>
                                            <span>Washing Machine</span>
                                            <span>TV</span>
                                            <span>Sofa</span>
                                            <span>Water Purifier</span>
                                            <span>Gas & Stove</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Property Amenities</p>
                                        <div className='section-list'>
                                            <span>Gym</span>
                                            <span>Swimming Pool</span>
                                            <span>Power Backup</span>
                                            <span>Park</span>
                                            <span>Guest Parking</span>
                                            <span>CCTV</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='section-box'>
                                        <p>Floor Level</p>
                                        <div className='section-list'>
                                            <span>Ground</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='section-box'>
                                        <p>Posted by</p>
                                        <div className='section-list'>
                                            <span>Tenant</span>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className='section-box'>
                                        <p>Posting for</p>
                                        <div className='section-list'>
                                            <span>Behalf</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='expences section' id='expences'>
                            <p>Expences</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Rent</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Maintenance</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Refrigirator</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Washing Machine</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Internet</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Cook <span>optional</span></p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Refundable Deposite</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Your Share</p>
                                                <p className='share-value'>₹ 12,000</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Total</p>
                                                <p className='total-share-value'>₹ 48,000</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Variable Expenses</p>
                                        <div className='section-list'>
                                            <span>Elecricity</span>
                                            <span>Gas</span>
                                            <span>Balcony</span>
                                            <span>Groceries</span>
                                            <span>Household Supplies</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='preferences section' id='preferences'>
                            <p>Preferences</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Non-Veg Cooking</p>
                                        <div className='section-list'>
                                            <span>Allowed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Preferred Language</p>
                                        <div className='section-list'>
                                            <span>Telugu</span>
                                            <span>English</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Preferred Region</p>
                                        <div className='section-list'>
                                            <span>North</span>
                                            <span>South</span>
                                            <span>West</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='section-box'>
                                        <p>Notes</p>
                                        <div className='section-list'>
                                            <p>feel free to call me on weekends or drop a message on weekdays. You’re welcome to visit the flat any time during the day, but just let me know, and I’ll inform the security to show you around.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='for-sale section' id='for-sale'>
                            <p>For Sale</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Wakefit Bed | Queen (78 X 60)</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Price</p>
                                                <p className='share-value'>₹ 7,500</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Condition</p>
                                                <p className='total-share-value text-dark'>Fair</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Wakefit Bed | Queen (78 X 60)</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Price</p>
                                                <p className='share-value'>₹ 7,500</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Condition</p>
                                                <p className='total-share-value text-dark'>Fair</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Wakefit Bed | Queen (78 X 60)</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Price</p>
                                                <p className='share-value'>₹ 7,500</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Condition</p>
                                                <p className='total-share-value text-dark'>Fair</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='section-box'>
                                        <p>Wakefit Bed | Queen (78 X 60)</p>
                                        <div className='d-flex justify-content-between align-items-end'>
                                            <div>
                                                <p className='share'>Price</p>
                                                <p className='share-value'>₹ 7,500</p>
                                            </div>
                                            <div>
                                                <p className='total-share'>Condition</p>
                                                <p className='total-share-value text-dark'>Fair</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewFlat;