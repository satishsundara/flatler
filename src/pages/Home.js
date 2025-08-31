// Home.js
import React from 'react';
import banner from '../assets/images/banner.png';
import { ReactComponent as FlatSharing } from '../assets/images/home_flat.svg';
import { ReactComponent as RoomSharing } from '../assets/images/home_room.svg';
import { ReactComponent as EntireFlat } from '../assets/images/home_entire.svg';
import searchIcon from '../assets/images/home_search.svg';
import building from '../assets/images/fillter-building.png';
import exploreMore from '../assets/images/explore-home-arrow.png';
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div>
                <img src={banner} alt="User Icon" className='w-100' />
            </div>
            <div className="layout-search-wrapper">
                <div className='layout-search'>
                    <div className="layout-search-first d-flex gap-3 justify-content-center align-items-center">
                        <div className="form-check form-check-inline p-0 m-0">
                            <input
                                className="form-check-input d-none"
                                type="radio"
                                name="propertyType"
                                id="flatSharing"
                                value="flat"
                                defaultChecked
                            />
                            <label
                                className="form-check-label d-flex align-items-center gap-2 text-light border-bottom"
                                htmlFor="flatSharing"
                            >
                                <FlatSharing width={16} height={16} />
                                Flat Sharing
                            </label>
                        </div>

                        <div className="form-check form-check-inline p-0 m-0">
                            <input
                                className="form-check-input d-none"
                                type="radio"
                                name="propertyType"
                                id="roomSharing"
                                value="room"
                            />
                            <label
                                className="form-check-label d-flex align-items-center gap-2 text-secondary border-bottom"
                                htmlFor="roomSharing"
                            >
                                <RoomSharing width={16} height={16} />
                                Room Sharing
                            </label>
                        </div>

                        <div className="form-check form-check-inline p-0 m-0">
                            <input
                                className="form-check-input d-none"
                                type="radio"
                                name="propertyType"
                                id="entireFlat"
                                value="entire"
                            />
                            <label
                                className="form-check-label d-flex align-items-center gap-2 text-secondary border-bottom"
                                htmlFor="entireFlat"
                            >
                                <EntireFlat width={16} height={16} />
                                Entire Flat
                            </label>
                        </div>
                    </div>
                    {/* <div className='w-100 home-search'>
                        <input type='text' className='w-100 home-search-box'/>
                        <select className='search-select form-select w-25'>
                            <option value='flat'>Flat</option>
                            <option value='room'>Room</option>
                            <option value='entire'>Entire Flat</option>
                        </select>
                    </div> */}
                    <div className="w-100 home-search">
                        <select className="search-select me-2">
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                        <input
                            type="text"
                            className="home-search-box"
                            placeholder="Search..."
                        />
                        <a href='/flats'><img src={searchIcon} alt="Entire Flat" /></a>
                    </div>


                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
                <div className='home-filter-head-text'>Filtered For You</div>
                <div className='home-filter-head-text'>View All</div>
            </div>
            <div className='row pt-2'>
                <div className='col-2 p-2 home-card-filter'>
                    <div className="card">
                        <div className="card-img-top" >
                            <img src={building} alt="..." width={40} height={40} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">In</h5>
                            <p className="card-text">Society</p>
                            <a href="#" className="btn">Explore<img className='ms-1' src={exploreMore} alt="..." width={16} height={16} /></a>
                        </div>
                    </div>
                </div>
                <div className='col-2 p-2 home-card-filter'>
                    <div className="card border-0">
                        <div className="card-img-top" >
                            <img src={building} alt="..." width={40} height={40} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">In</h5>
                            <p className="card-text">AC Installed</p>
                            <a href="#" className="btn">Explore<img className='ms-1' src={exploreMore} alt="..." width={16} height={16} /></a>
                        </div>
                    </div>
                </div>
                <div className='col-2 p-2 home-card-filter'>
                    <div className="card border-0">
                        <div className="card-img-top" >
                            <img src={building} alt="..." width={40} height={40} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">In</h5>
                            <p className="card-text">Car Parking</p>
                            <a href="#" className="btn">Explore<img className='ms-1' src={exploreMore} alt="..." width={16} height={16} /></a>
                        </div>
                    </div>
                </div>
                <div className='col-2 p-2 home-card-filter'>
                    <div className="card border-0">
                        <div className="card-img-top" >
                            <img src={building} alt="..." width={40} height={40} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">In</h5>
                            <p className="card-text">Power Backup</p>
                            <a href="#" className="btn">Explore<img className='ms-1' src={exploreMore} alt="..." width={16} height={16} /></a>
                        </div>
                    </div>
                </div>
                <div className='col-2 p-2 home-card-filter'>
                    <div className="card border-0">
                        <div className="card-img-top" >
                            <img src={building} alt="..." width={40} height={40} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">In</h5>
                            <p className="card-text">Gymnasium</p>
                            <a href="#" className="btn">Explore<img className='ms-1' src={exploreMore} alt="..." width={16} height={16} /></a>
                        </div>
                    </div>
                </div>
                <div className='col-2 p-2 home-card-filter'>
                    <div className="card border-0">
                        <div className="card-img-top" >
                            <img src={building} alt="..." width={40} height={40} />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">In</h5>
                            <p className="card-text">Cook/Mess</p>
                            <a href="#" className="btn">Explore<img className='ms-1' src={exploreMore} alt="..." width={16} height={16} /></a>
                        </div>
                    </div>
                </div>



            </div>
        </>
    )

};

export default Home;
