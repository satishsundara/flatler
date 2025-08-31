import { ReactComponent as Amenities } from '../assets/images/postproperty_Amenities.svg';
import editAdd from '../assets/images/edit-post-add.png'
import plus from '../assets/images/plus-lcn.png'
import flatSample from '../assets/images/flat-image.png'
import leftArrrDark from '../assets/images/left-arrow-dark.png'
import rightArrowLight from '../assets/images/right-arrow-light.png'
import { ReactComponent as AddressIcon } from '../assets/images/postproperty_Address.svg';
import { ReactComponent as ExpensesIcon } from '../assets/images/postproperty_Expenses.svg';
import { ReactComponent as PreferencesIcon } from '../assets/images/postproperty_Preferences.svg';
import forSaleIcon from '../assets/images/postproperty_For Sale.svg'
import { ReactComponent as PhotosIcon } from '../assets/images/postproperty_Photos.svg';
import deleteFixedExp from '../assets/images/delete_fixed_exp.png'
import deleteTrash from '../assets/images/delete_trash.png'
import { useEffect, useRef, useState } from 'react'
import { postProperty } from '../apiRoutes'
import { ReactComponent as Forsaleitem } from '../assets/images/postproperty_For Sale.svg'
import { ReactComponent as addressItem } from '../assets/images/postproperty_Address.svg'
import {
    GoogleMap,
    LoadScript,
    Autocomplete,
    Marker,
} from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "400px" };
const defaultCenter = { lat: 17.385044, lng: 78.486671 };
const PostProperty = () => {

    const [sharingType, setSharingType] = useState(null);
    const [gender, setGender] = useState(null);
    const [propertiType, setPropertiType] = useState(null);
    const [flatBHKType, setFlatBHKType] = useState(null);
    const [availableBy, setAvailableBy] = useState(null);
    const [floorLevel, setFloreLavel] = useState(null);
    const [postingFor, setPostingFor] = useState(null);
    const [refundableDeposite, setRefundableDeposite] = useState(null)
    const [noticePeriod, setNoticePeriod] = useState(null);
    const [preferedCoocking, setPreferedCoocking] = useState(null);
    const [note, setNote] = useState(null);

    const roomAmenities = ["AC", "Attached Washroom", "Balcony", "Wardrobe", "Geyser", "Car Parking"];
    const propertyAmenities = ["Gym", "Swimming Pool", "Power Backup", "Park", "Guest Parking", "CCTV"];
    const preferedLanguage = ["English", "Hindi", "Telugu", "Tamil", "Kanada", "Marathi", "Bengali", "Gujarati", "Urdu"];
    const preferedRegion = ["North", "South", "East", "West", "North East", "Central"];

    const [selectedAmenities, setSelectedAmenities] = useState([]);

    const toggleAmenity = (type, value) => {
        const exists = selectedAmenities.some(
            (item) => item.type === type && item.value === value
        );

        if (exists) {
            setSelectedAmenities((prev) =>
                prev.filter((item) => !(item.type === type && item.value === value))
            );
        } else {
            setSelectedAmenities((prev) => [...prev, { type, value }]);
        }
    };

    const isActive = (type, value) =>
        selectedAmenities.some((item) => item.type === type && item.value === value);


    const [selectedLanguage, setSelectedLanguage] = useState([]);

    const isActiveLangauge = (language) => selectedLanguage.includes(language);

    const toggleLanguage = (language) => {
        setSelectedLanguage((prev) =>
            prev.includes(language)
                ? prev.filter((l) => l !== language)
                : [...prev, language]
        );
    };

    const [selectedRegion, setSelectedRegion] = useState([]);

    const isActiveRegion = (region) => selectedRegion.includes(region);

    const toggleRegion = (region) => {
        setSelectedRegion((prev) =>
            prev.includes(region)
                ? prev.filter((l) => l !== region)
                : [...prev, region]
        );
    };

    // Default fixed expenses
    const [fixedExpenses, setFixedExpenses] = useState([
        { id: 1, name: "Rent", total: "", share: "", type: "fixed", mandatory: true },
        { id: 2, name: "Maintenance", total: "", share: "", type: "fixed", mandatory: false },
        { id: 3, name: "Refrigerator", total: "", share: "", type: "fixed", mandatory: false },
        { id: 4, name: "Washing Machine", total: "", share: "", type: "fixed", mandatory: false },
        { id: 5, name: "Internet", total: "", share: "", type: "fixed", mandatory: false },
        { id: 6, name: "Cook", total: "", share: "", optional: true, type: "fixed", mandatory: false },
    ]);

    // Handle change for fixed expenses
    const handleFixedChange = (id, field, value) => {
        if (value < 0) {
            value = "";
        }
        setFixedExpenses((prev) =>
            prev.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        );
        debugger;
    };

    // Refs for fixed expenses
    const fixedInputRefs = useRef({});

    // Add new fixed expense with focus & empty check
    const addFixedExpense = () => {
        const emptyExp = fixedExpenses.find((exp) => !exp.name || exp.name.trim() === "");

        if (emptyExp) {
            fixedInputRefs.current[emptyExp.id]?.focus();
        } else {
            const newId = fixedExpenses.length + 1;
            setFixedExpenses([
                ...fixedExpenses,
                { id: newId, name: "", total: "", share: "", type: "fixed", mandatory: false },
            ]);

            setTimeout(() => {
                fixedInputRefs.current[newId]?.focus();
            }, 0);
        }
    };

    // Remove fixed expense
    const removeFixedExpense = (id) => {
        setFixedExpenses(fixedExpenses.filter((exp) => exp.id !== id));
        debugger
    };

    // Variable expenses state
    const [variableExpenses, setVariableExpenses] = useState([
        { id: 1, name: "Electricity", type: "variable" },
        { id: 2, name: "Gas", type: "variable" },
        { id: 3, name: "Groceries", type: "variable" },
        { id: 4, name: "Household Supplies", type: "variable" },
    ]);

    // Refs to track inputs
    const inputRefs = useRef({});

    // Add variable expense
    const addVariableExpense = () => {
        const emptyExp = variableExpenses.find(
            (exp) => !exp.name || exp.name.trim() === ""
        );

        if (emptyExp) {
            setTimeout(() => {
                inputRefs.current[emptyExp.id]?.focus();
            }, 0);
        } else {
            const newId = variableExpenses.length + 1;
            setVariableExpenses((prev) => [
                ...prev,
                { id: newId, name: "", type: "variable" },
            ]);

            setTimeout(() => {
                inputRefs.current[newId]?.focus();
            }, 0);
        }
    };

    // Handle input changes
    const handleVariableChange = (id, field, value) => {
        setVariableExpenses((prev) =>
            prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
        );
    };

    // Remove variable expense
    const removeVariableExpense = (id) => {
        setVariableExpenses((prev) => prev.filter((exp) => exp.id !== id));
    };



    const [forSaleItems, setForSaleItems] = useState([]);
    const forSaleRefs = useRef({});

    // Add For Sale Item
    const addForSaleItem = () => {
        const emptyItem = forSaleItems.find(
            (item) => !item.name || item.name.trim() === ""
        );

        if (emptyItem) {
            forSaleRefs.current[emptyItem.id]?.focus();
        } else {
            const newId = forSaleItems.length + 1;
            setForSaleItems([

                { id: newId, name: "", share: "", condition: "" }, ...forSaleItems,
            ]);

            setTimeout(() => {
                forSaleRefs.current[newId]?.focus();
            }, 0);
        }
    };

    // Update For Sale Item
    const updateForSaleItem = (id, field, value) => {
        setForSaleItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, [field]: value } : item
            )
        );
    };

    // Delete For Sale Item
    const deleteForSaleItem = (id) => {
        setForSaleItems((prev) =>
            prev.filter((item) => item.id !== id).map((item, index) => ({
                ...item,
                id: index + 1, // Reorder IDs sequentially
            }))
        );
    };


    const handleSubmit = async (e) => {
        debugger
        e.preventDefault();

        const selectedExpenses = [...fixedExpenses, ...variableExpenses];

        const payload = {
            sharingType: sharingType,
            gender: gender,
            propertyType: propertiType,
            faltBHKType: flatBHKType,
            availableBy: availableBy,
            floorLevel: floorLevel,
            amenities: selectedAmenities,
            postingFor: postingFor,
            expenses: selectedExpenses,
            refundableDeposite: refundableDeposite,
            noticePeriod: noticePeriod,
            preferedCoocking: preferedCoocking,
            preferedLanguage: preferedLanguage,
            preferedRegion: preferedRegion,
            note: note,
            saleItems: forSaleItems,

        }
        await postProperty(payload);
        //console.log("Payload:::::",JSON.stringify(payload));
    }





    const center = { lat: 17.385044, lng: 78.486671 }; // Default: Hyderabad

    const [mapCenter, setMapCenter] = useState(center);
    const [markerPos, setMarkerPos] = useState(center);
    const [address, setAddress] = useState("");
    const autoCompleteRef = useRef(null);

    const apiKey = "AIzaSyCl7_zN0EraBioeehYeGW7mcOoRzKqneQY"; // replace with your key

    // Handle autocomplete place selection
    const onPlaceChanged = () => {
        if (autoCompleteRef.current) {
            const place = autoCompleteRef.current.getPlace();
            if (place.geometry) {
                const location = place.geometry.location;
                const newPos = { lat: location.lat(), lng: location.lng() };
                setMapCenter(newPos);
                setMarkerPos(newPos);
                setAddress(place.formatted_address);
            }
        }
    };

    // Handle click on map
    const handleMapClick = async (e) => {
        const newPos = { lat: e.latLng.lat(), lng: e.latLng.lng() };
        setMarkerPos(newPos);
        setMapCenter(newPos);

        // Reverse Geocoding to get address
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: newPos }, (results, status) => {
            if (status === "OK" && results[0]) {
                setAddress(results[0].formatted_address);
            }
        });
    };

    // Locate me
    const handleLocateMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const newPos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                setMapCenter(newPos);
                setMarkerPos(newPos);

                const geocoder = new window.google.maps.Geocoder();
                geocoder.geocode({ location: newPos }, (results, status) => {
                    if (status === "OK" && results[0]) {
                        setAddress(results[0].formatted_address);
                    }
                });
            });
        }
    }


    return (
        <>
            <div className="post-poperty">
                <p className="post-poperty-title text-baground">Post Property</p>
            </div>
            <div className="post-property-section d-flex">
                <div className="section-one">
                    <p className="active"><Amenities /> Property</p>
                    <p><AddressIcon /> Address</p>
                    <p><ExpensesIcon /> Expenses</p>
                    <p><PreferencesIcon /> Preferences</p>
                    <p><Forsaleitem /> For Sale</p>
                    <p><PhotosIcon /> Photos</p>
                </div>

                <div className="section-two">
                    <div className='section amenities'>
                        <p>Amenities</p>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Sharing Type<super>*</super></p>
                                    <div className='section-list'>
                                        <span className={sharingType === 'Flat Sharing' ? 'active' : ''} onClick={() => setSharingType('Flat Sharing')}>Flat Sharing</span>
                                        <span className={sharingType === 'Room Sharing' ? 'active' : ''} onClick={() => setSharingType('Room Sharing')}>Room Sharing</span>
                                        <span className={sharingType === 'Entair Flat' ? 'active' : ''} onClick={() => setSharingType('Entair Flat')}>Entair Flat</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Gender<super>*</super></p>
                                    <div className='section-list'>
                                        <span className={gender === 'Male' ? 'active' : ''} onClick={() => setGender('Male')}>Male</span>
                                        <span className={gender === 'Female' ? 'active' : ''} onClick={() => setGender('Female')}>Female</span>
                                        <span className={gender === 'Other' ? 'active' : ''} onClick={() => setGender('Other')}>Other</span>
                                        <span className={gender === 'Couple' ? 'active' : ''} onClick={() => setGender('Couple')}>Couple</span>
                                        <span className={gender === 'Any' ? 'active' : ''} onClick={() => setGender('Any')}>Any</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Property Type</p>
                                    <div className='section-list'>
                                        <span className={propertiType === 'Society' ? 'active' : ''} onClick={() => setPropertiType('Society')}>Society</span>
                                        <span className={propertiType === 'Apartment' ? 'active' : ''} onClick={() => setPropertiType('Apartment')}>Apartment</span>
                                        <span className={propertiType === 'House' ? 'active' : ''} onClick={() => setPropertiType('House')}>House</span>
                                        <span className={propertiType === 'Villa' ? 'active' : ''} onClick={() => setPropertiType('Villa')}>Villa</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Flat BHK type</p>
                                    <div className='section-list'>
                                        <span className={flatBHKType === '1' ? 'active' : ''} onClick={() => setFlatBHKType('1')}>1</span>
                                        <span className={flatBHKType === '2' ? 'active' : ''} onClick={() => setFlatBHKType('2')}>2</span>
                                        <span className={flatBHKType === '3' ? 'active' : ''} onClick={() => setFlatBHKType('3')}>3</span>
                                        <span className={flatBHKType === '4' ? 'active' : ''} onClick={() => setFlatBHKType('4')}>4</span>
                                        <span className={flatBHKType === '5' ? 'active' : ''} onClick={() => setFlatBHKType('5')}>5</span>
                                        <span className={flatBHKType === '5+' ? 'active' : ''} onClick={() => setFlatBHKType('5+')}>5+</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Available by</p>
                                    <div className='section-list'>
                                        <span className={availableBy === 'Immediately' ? 'active' : ''} onClick={() => setAvailableBy('Immediately')}>Immediately</span>
                                        <span className={availableBy === '1 Month' ? 'active' : ''} onClick={() => setAvailableBy('1 Month')}>1 Month</span>
                                        <span className={availableBy === '2 Months' ? 'active' : ''} onClick={() => setAvailableBy('2 Months')}>2 Months</span>
                                        <span className={availableBy === '3 Months' ? 'active' : ''} onClick={() => setAvailableBy('3 Months')}>3 Months</span>
                                        <span className={availableBy === '3+ Months' ? 'active' : ''} onClick={() => setAvailableBy('3+ Months')}>3+ Months</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Floor Level</p>
                                    <div className='section-list'>
                                        <span className={floorLevel === 'Ground' ? 'active' : ''} onClick={() => setFloreLavel('Ground')}>Ground</span>
                                        <span className={floorLevel === '1' ? 'active' : ''} onClick={() => setFloreLavel('1')}>1</span>
                                        <span className={floorLevel === '2' ? 'active' : ''} onClick={() => setFloreLavel('2')}>2</span>
                                        <span className={floorLevel === '3' ? 'active' : ''} onClick={() => setFloreLavel('3')}>3</span>
                                        <span className={floorLevel === '4' ? 'active' : ''} onClick={() => setFloreLavel('4')}>4</span>
                                        <span className={floorLevel === '5' ? 'active' : ''} onClick={() => setFloreLavel('5')}>5</span>
                                        <span className={floorLevel === '5+' ? 'active' : ''} onClick={() => setFloreLavel('5+')}>5+</span>
                                        <span className={floorLevel === 'Penthouse' ? 'active' : ''} onClick={() => setFloreLavel('Penthouse')}>Penthouse</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Room Amenities</p>
                                    <div className='section-list'>
                                        {roomAmenities.map((amenity, index) => (
                                            <span
                                                key={index}
                                                className={isActive("room", amenity) ? "active" : ""}
                                                onClick={() => toggleAmenity("room", amenity)}
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Property Amenities</p>
                                    <div className="section-list">
                                        {propertyAmenities.map((amenity, index) => (
                                            <span
                                                key={index}
                                                className={isActive("property", amenity) ? "active" : ""}
                                                onClick={() => toggleAmenity("property", amenity)}
                                            >
                                                {amenity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Posting for</p>
                                    <div className='section-list'>
                                        <span className={postingFor === 'Flat Mate' ? 'active' : ''} onClick={() => setPostingFor('Flat Mate')}>Flat Mate</span>
                                        <span className={postingFor === 'Replacement' ? 'active' : ''} onClick={() => setPostingFor('Replacement')}>Replacement</span>
                                        <span className={postingFor === 'Behalf' ? 'active' : ''} onClick={() => setPostingFor('Behalf')}>Behalf</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section address'>
                        <p>Address</p>
                        <div className='row'>
                            <div className='col-12'>
                                <LoadScript googleMapsApiKey={apiKey} libraries={["places"]}>
                                    <div className="section-box address-map-box d-flex">
                                        {/* Left side: Map + Search */}
                                        <div className="w-50 pe-2">
                                            <Autocomplete
                                                onLoad={(ref) => (autoCompleteRef.current = ref)}
                                                onPlaceChanged={onPlaceChanged}
                                            >
                                                <input
                                                    type="text"
                                                    placeholder="Search address..."
                                                    className="form-control mb-2"
                                                />
                                            </Autocomplete>
                                            <button className="btn btn-primary mb-2" onClick={handleLocateMe}>
                                                📍 Locate Me
                                            </button>

                                            <GoogleMap
                                                mapContainerStyle={containerStyle}
                                                center={center}
                                                zoom={15}
                                                onClick={handleMapClick}
                                            >
                                                <Marker position={markerPos} />
                                            </GoogleMap>
                                        </div>

                                        {/* Right side: Address Display */}
                                        <div className="w-50 ps-3">
                                            <div className="mb-3">
                                                <p><strong>Selected Address</strong></p>
                                                <span>{address || "No address selected"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </LoadScript>
                            </div>

                            <div className='col-12'>
                                <div className='section-box address-map-box'>
                                    <div className='w-50'></div>
                                    <div className='w-50'>
                                        <div className='mb-3'>
                                            <p>The Casa Grand</p>
                                            <span>Flat No 123/45, Sai Aishwarya Layout Road,<br />
                                                Manikonda, Hyderabad,<br />
                                                Telangana 500089, India</span>
                                        </div>
                                        <div className='mb-3'>
                                            <p>Landmark</p>
                                            <span>Brilliant Grammar High School</span>
                                        </div>
                                        <div className='mb-3'>
                                            <button><img src={editAdd} className='pe-2' />Edit Address</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section address'>
                        <p>Expenses</p>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Fixed Expenses</p>
                                    <div className='section-list-box'>

                                        <div className='row'>

                                            {fixedExpenses.map((exp) => (
                                                <div className="col-4" key={exp.id}>
                                                    <div className="box">
                                                        <p>
                                                            {exp.name === null || exp.name === "" ? <>
                                                                <input
                                                                    type="text"
                                                                    className="w-75"
                                                                    ref={(el) => (fixedInputRefs.current[exp.id] = el)}
                                                                    placeholder='Enter fixed expence'
                                                                    onBlur={(e) =>
                                                                        handleFixedChange(exp.id, "name", e.target.value)
                                                                    }
                                                                />
                                                            </> : exp.name} {exp.mandatory === true ? <sup>*</sup> : ''}


                                                            {exp.mandatory === false ?
                                                                <button className="btn float-end me-0 p-0 ps-2"
                                                                    onClick={() => removeFixedExpense(exp.id)}>
                                                                    <img src={deleteFixedExp} />
                                                                </button>
                                                                : ''}
                                                            {exp.optional && (
                                                                <span className="float-end">
                                                                    <input type="checkbox" /> Optional
                                                                </span>
                                                            )}
                                                        </p>
                                                        <div className="d-flex justify-content-between align-items-end">
                                                            <div className="rupee-input">
                                                                <label>Total</label>
                                                                <input
                                                                    type="number"
                                                                    className="w-100"
                                                                    value={exp.total}
                                                                    onChange={(e) =>
                                                                        handleFixedChange(exp.id, "total", e.target.value)
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="rupee-input">
                                                                <label>Share</label>
                                                                <input
                                                                    type="number"
                                                                    className="w-100"
                                                                    value={exp.share}
                                                                    onChange={(e) =>
                                                                        handleFixedChange(exp.id, "share", e.target.value)
                                                                    }
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}


                                            {/* <div className='col-4'>
                                                <div className='box'>
                                                    <p>Rent</p>
                                                    <div className='d-flex justify-content-between align-items-end'>
                                                        <div className='rupee-input'>
                                                            <label>Total</label>
                                                            <input type='number' className='w-100' />
                                                        </div>
                                                        <div className='rupee-input'>
                                                            <label>Share</label>
                                                            <input type='number' className='w-100' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                             */}
                                            <div className='col-4'>
                                                <div className='box'>
                                                    <button className='text-cneter' onClick={addFixedExpense}>
                                                        <img src={plus} /><br />
                                                        <p>Add Expense</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Variable Expenses</p>
                                    <div className='section-list'>

                                        {variableExpenses.map((exp) => (
                                            <span key={exp.id} className='d-flex align-item-center justify-content-between gap-2'>


                                                {exp.name === null || exp.name === "" ?
                                                    <input
                                                        className='bg-transparent border-0'
                                                        type="text"
                                                        placeholder="Enter variable expense"
                                                        onBlur={(e) =>
                                                            handleVariableChange(exp.id, "name", e.target.value)
                                                        }
                                                        ref={(el) => (inputRefs.current[exp.id] = el)}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Enter") {
                                                                handleVariableChange(exp.id, "name", e.target.value);
                                                            }
                                                        }} /> : (
                                                        <>{exp.name}{" "}
                                                            <button className="border-0 bg-transparent p-0"
                                                                onClick={() => removeVariableExpense(exp.id)}>
                                                                <img src={deleteTrash} />
                                                            </button></>)}

                                            </span>
                                        ))}
                                        {/* <span>Elecricity</span>
                                        <span>Gas</span>
                                        <span>Balcony</span>
                                        <span>Balcony</span>
                                        <span>Groceries</span>
                                        <span>Household Supplies</span> */}
                                        <span className='add-var-expences' onClick={addVariableExpense}>+ Add Variable Expense</span>

                                    </div>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='section-box'>
                                    <p>Refundable Deposit</p>
                                    <div>
                                        <div class="rupee-input refundable-deposite">
                                            <input class="w-100" type="number" value={refundableDeposite} onChange={(e) => setRefundableDeposite(e.target.value)} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8'>
                                <div className='section-box'>
                                    <p>Notice Period</p>
                                    <div className='section-list'>
                                        <span className={noticePeriod === '1M' ? 'active' : ''} onClick={() => setNoticePeriod('1M')}>1M</span>
                                        <span className={noticePeriod === '2M' ? 'active' : ''} onClick={() => setNoticePeriod('2M')}>2M</span>
                                        <span className={noticePeriod === '3M' ? 'active' : ''} onClick={() => setNoticePeriod('3M')}>3M</span>
                                        <span className={noticePeriod === '4M' ? 'active' : ''} onClick={() => setNoticePeriod('4M')}>4M</span>
                                        <span className={noticePeriod === '5M' ? 'active' : ''} onClick={() => setNoticePeriod('5M')}>5M</span>
                                        <span className={noticePeriod === '6M' ? 'active' : ''} onClick={() => setNoticePeriod('6M')}>6M</span>
                                        <span className={noticePeriod === '1Y' ? 'active' : ''} onClick={() => setNoticePeriod('1Y')}>1Y</span>
                                        <span className={noticePeriod === '1Y+' ? 'active' : ''} onClick={() => setNoticePeriod('1Y+')}>1Y+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='section address'>
                        <p>Preferences</p>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Non-Veg Cooking</p>
                                    <div className='section-list'>
                                        <span className={preferedCoocking === true ? 'active' : ''} onClick={() => setPreferedCoocking(true)}>Allowed</span>
                                        <span className={preferedCoocking === false ? 'active' : ''} onClick={() => setPreferedCoocking(false)}>Not Allowed</span>
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Preferred Language</p>
                                    <div className='section-list'>
                                        {preferedLanguage.map((language, index) => (
                                            <span
                                                key={index}
                                                className={isActiveLangauge(language) ? "active" : ""}
                                                onClick={() => toggleLanguage(language)}
                                            >
                                                {language}
                                            </span>
                                        ))}
                                        {/* <span>English</span>
                                        <span>Hindi</span>
                                        <span>Telugu</span>
                                        <span>Tamil</span>
                                        <span>Kanada</span>
                                        <span>Marathi</span>
                                        <span>Bengali</span>
                                        <span>Gujarati</span>
                                        <span>Urdu</span> */}
                                    </div>
                                </div>
                            </div>

                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Preferred Region</p>
                                    <div className='section-list'>
                                        {preferedRegion.map((region, index) => (
                                            <span
                                                key={index}
                                                className={isActiveRegion(region) ? "active" : ""}
                                                onClick={() => toggleRegion(region)}
                                            >
                                                {region}
                                            </span>
                                        ))}
                                        {/* <span>North</span>
                                        <span>South</span>
                                        <span>East</span>
                                        <span>West</span>
                                        <span>North East</span>
                                        <span>Central</span> */}
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <p>Notes</p>
                                    <div className='section-text-area'>
                                        <textarea onChange={(e) => setNote(e.target.value)}>{note}</textarea>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='section address'>
                        <p>For Sale</p>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <div className='section-list-box'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='box for-sale-box d-flex justify-content-center align-items-center' onClick={addForSaleItem}>
                                                    <button className='bg-transparent border-0'><img src={plus} /><p>Add Item</p></button>
                                                </div>
                                            </div>

                                            {forSaleItems.map((item) => (
                                                <div className="col-6" key={item.id}>
                                                    <div className="box for-sale-box">
                                                        <div>
                                                            <div>
                                                                <label>Item Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="w-100"
                                                                    value={item.name}
                                                                    ref={(el) => (inputRefs.current[item.id] = el)}
                                                                    onChange={(e) =>
                                                                        updateForSaleItem(item.id, "name", e.target.value)
                                                                    }
                                                                />
                                                            </div>
                                                            <div className="rupee-input">
                                                                <label>Share</label>
                                                                <input
                                                                    type="number"
                                                                    className="w-100"
                                                                    value={item.share}
                                                                    onChange={(e) =>
                                                                        updateForSaleItem(
                                                                            item.id,
                                                                            "share",
                                                                            e.target.value
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </div>

                                                        <label>Condition</label>
                                                        <div className="section-list">
                                                            {["Excellent", "Good", "Fair"].map((cond) => (
                                                                <span
                                                                    key={cond}
                                                                    className={item.condition === cond ? "active" : ""}
                                                                    onClick={() =>
                                                                        updateForSaleItem(item.id, "condition", cond)
                                                                    }
                                                                >
                                                                    {cond}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        {/* Delete Button */}
                                                        <button
                                                            type="button"
                                                            className="btn delete-btn"
                                                            onClick={() => deleteForSaleItem(item.id)}
                                                        >
                                                            <img src={deleteTrash} />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                            {/* <div className='col-6'>
                                                <div className='box for-sale-box'>
                                                    <div>
                                                        <div>
                                                            <label>Item Name</label>
                                                            <input type='text' className='w-100' />
                                                        </div>
                                                        <div className='rupee-input'>
                                                            <label>Share</label>
                                                            <input type='number' className='w-100' />
                                                        </div>
                                                    </div>
                                                    <label>Condition</label>
                                                    <div className='section-list'>
                                                        <span>Excelent</span>
                                                        <span>Good</span>
                                                        <span>Fair</span>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='section address'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='section-box'>
                                    <div className='section-list-box'>
                                        <p>Photos</p>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <div className='box photo-box p-0'>
                                                    <img src={flatSample} />
                                                </div>
                                            </div>
                                            <div className='col-4'>
                                                <div className='box photo-box d-flex justify-content-center align-items-center'>
                                                    <button className='bg-transparent border-0'><img src={plus} /><p>Add More</p></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='post-property-buttons d-flex justify-content-between'>
                <button><img src={leftArrrDark} /> Back</button>
                <button onClick={handleSubmit}> Next <img src={rightArrowLight} /></button>
            </div>
        </>
    )
}

export default PostProperty;