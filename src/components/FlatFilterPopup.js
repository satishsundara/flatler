// import React from "react";
// import { Modal, Button } from "react-bootstrap";

// const FlatFilterPopup= ({ show, onClose, title, children }) => {
//   return (
//     <Modal show={show} onHide={onClose} centered className="flat-filter-pop">
//       {title && (
//         <Modal.Header closeButton>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//       )}
//       <Modal.Body className="p-0 ps-1">
//         <div className="d-flex filter-body">
//             <div className="border-right right-filter">
//                 <button className="filter-type active">Burget</button>
//                 <button className="filter-type">Sharing Type</button>
//                 <button className="filter-type">Gender</button>
//                 <button className="filter-type">Property Type</button>
//                 <button className="filter-type">Flat BHK Type</button>
//                 <button className="filter-type">Available By</button>
//                 <button className="filter-type">Floor Level</button>
//                 <button className="filter-type">Room Amenities</button>
//                 <button className="filter-type">Flat Amenities</button>
//                 <button className="filter-type">Property Amenities</button>
//                 <button className="filter-type">Posting by</button>
//                 <button className="filter-type">Posting for</button>
//             </div>
//             <div className="left-filter">
//                 <div className="scroll-section">
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Sharing Type <super>*</super></p>
//                         <div className="selection">
//                             <button>Flat Sharing</button>
//                             <button>Entair Sharing</button>
//                             <button>Room Sharing</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Burgest</p>
//                         <div className="selection">
//                             <select>
//                                 <option>12,000</option>
//                             </select>
//                             <span> to </span>
//                             <select>
//                                 <option>16,500</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Gender <super>*</super></p>
//                         <div className="selection">
//                             <button>Male</button>
//                             <button>Female</button>
//                             <button>Other</button>
//                             <button>Couple</button>
//                             <button>Any</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Property Type</p>
//                         <div className="selection">
//                             <button>Society</button>
//                             <button>Apartment</button>
//                             <button>House</button>
//                             <button>Villa</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Flat BHK</p>
//                         <div className="selection">
//                             <button>1</button>
//                             <button>2</button>
//                             <button>3</button>
//                             <button>4</button>
//                             <button>5</button>
//                             <button>5+</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Available by</p>
//                         <div className="selection">
//                             <button>Immediately</button>
//                             <button>1 month</button>
//                             <button>2 months</button>
//                             <button>3 months</button>
//                             <button>3+ months</button>
                            
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Flat BHK</p>
//                         <div className="selection">
//                             <button>Ground</button>
//                             <button>1</button>
//                             <button>2</button>
//                             <button>3</button>
//                             <button>4</button>
//                             <button>5</button>
//                             <button>5+</button>
//                             <button>Pentouse</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Room Amenities</p>
//                         <div className="selection">
//                             <button>AC</button>
//                             <button>Attached Washroom</button>
//                             <button>Balcony</button>
//                             <button>Wardrobe</button>
//                             <button>Geyser</button>
//                             <button>Car Parking</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Flat Amenities</p>
//                         <div className="selection">
//                             <button>Cook</button>
//                             <button>Maid</button>
//                             <button>Kitchenware</button>
//                             <button>Cookwear</button>
//                             <button>Refrigerator</button>
//                             <button>Washing Machine</button>
//                             <button>TV</button>
//                             <button>Sofa</button>
//                             <button>Water Purifier</button>
//                             <button>Gas & Stove</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Property Amenities</p>
//                         <div className="selection">
//                             <button>Gym</button>
//                             <button>Swimming Pool</button>
//                             <button>Power Backup</button>
//                             <button>Park</button>
//                             <button>Guest Parking</button>
//                             <button>CCTV</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Posting by</p>
//                         <div className="selection">
//                             <button>Tenant</button>
//                             <button>Owner</button>
//                         </div>
//                     </div>
//                     <div className="scoll-section-sub-filter">
//                         <p className="title">Posting for</p>
//                         <div className="selection">
//                             <button>Flat Mate</button>
//                             <button>Replacement</button>
//                             <button>Behalf</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="buttons-section border-top d-flex align-items-end justify-content-end gap-2">
//                     <button>Clear All</button>
//                     <button>Skip</button>
//                     <button>View 32 Properties</button>
//                 </div>

//             </div>
//         </div>
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// };

// export default FlatFilterPopup;




import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const FlatFilterPopup = ({ show, onClose, title }) => {
  const [activeFilter, setActiveFilter] = useState("budget");

  const handleNavClick = (id) => {
    const container = document.querySelector(".scroll-section");
    const section = document.getElementById(id);

    if (container && section) {
      container.scrollTo({
        top: section.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
      setActiveFilter(id)
    }
  };

  useEffect(() => {
    const container = document.querySelector(".scroll-section");
    if (!container) return;

    const sections = container.querySelectorAll(".scoll-section-sub-filter");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveFilter(entry.target.id);
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <Modal show={show} onHide={onClose} centered className="flat-filter-pop">
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body className="p-0 ps-1">
        <div className="d-flex filter-body">
          {/* LEFT NAV */}
          <div className="border-right right-filter">
            <button
              className={`filter-type ${activeFilter === "budget" ? "active" : ""}`}
              onClick={() => handleNavClick("budget")}
            >
              Budget
            </button>
            <button
              className={`filter-type ${activeFilter === "sharing-type" ? "active" : ""}`}
              onClick={() => handleNavClick("sharing-type")}
            >
              Sharing Type
            </button>
            <button
              className={`filter-type ${activeFilter === "gender" ? "active" : ""}`}
              onClick={() => handleNavClick("gender")}
            >
              Gender
            </button>
            <button
              className={`filter-type ${activeFilter === "property-type" ? "active" : ""}`}
              onClick={() => handleNavClick("property-type")}
            >
              Property Type
            </button>
            <button
              className={`filter-type ${activeFilter === "flat-bhk" ? "active" : ""}`}
              onClick={() => handleNavClick("flat-bhk")}
            >
              Flat BHK Type
            </button>
            <button
              className={`filter-type ${activeFilter === "available-by" ? "active" : ""}`}
              onClick={() => handleNavClick("available-by")}
            >
              Available By
            </button>
            <button
              className={`filter-type ${activeFilter === "floor-level" ? "active" : ""}`}
              onClick={() => handleNavClick("floor-level")}
            >
              Floor Level
            </button>
            <button
              className={`filter-type ${activeFilter === "room-amenities" ? "active" : ""}`}
              onClick={() => handleNavClick("room-amenities")}
            >
              Room Amenities
            </button>
            <button
              className={`filter-type ${activeFilter === "flat-amenities" ? "active" : ""}`}
              onClick={() => handleNavClick("flat-amenities")}
            >
              Flat Amenities
            </button>
            <button
              className={`filter-type ${activeFilter === "property-amenities" ? "active" : ""}`}
              onClick={() => handleNavClick("property-amenities")}
            >
              Property Amenities
            </button>
            <button
              className={`filter-type ${activeFilter === "posting-by" ? "active" : ""}`}
              onClick={() => handleNavClick("posting-by")}
            >
              Posting by
            </button>
            <button
              className={`filter-type ${activeFilter === "posting-for" ? "active" : ""}`}
              onClick={() => handleNavClick("posting-for")}
            >
              Posting for
            </button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="left-filter">
            <div className="scroll-section" style={{ maxHeight: "600px", overflowY: "auto" }}>
              <div className="scoll-section-sub-filter" id="budget">
                <p className="title">Budget</p>
                <div className="selection">
                  <select>
                    <option>12,000</option>
                  </select>
                  <span> to </span>
                  <select>
                    <option>16,500</option>
                  </select>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="sharing-type">
                <p className="title">Sharing Type <sup>*</sup></p>
                <div className="selection">
                  <button>Flat Sharing</button>
                  <button>Entire Sharing</button>
                  <button>Room Sharing</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="gender">
                <p className="title">Gender <sup>*</sup></p>
                <div className="selection">
                  <button>Male</button>
                  <button>Female</button>
                  <button>Other</button>
                  <button>Couple</button>
                  <button>Any</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="property-type">
                <p className="title">Property Type</p>
                <div className="selection">
                  <button>Society</button>
                  <button>Apartment</button>
                  <button>House</button>
                  <button>Villa</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="flat-bhk">
                <p className="title">Flat BHK</p>
                <div className="selection">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                  <button>5+</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="available-by">
                <p className="title">Available by</p>
                <div className="selection">
                  <button>Immediately</button>
                  <button>1 month</button>
                  <button>2 months</button>
                  <button>3 months</button>
                  <button>3+ months</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="floor-level">
                <p className="title">Floor Level</p>
                <div className="selection">
                  <button>Ground</button>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                  <button>5+</button>
                  <button>Penthouse</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="room-amenities">
                <p className="title">Room Amenities</p>
                <div className="selection">
                  <button>AC</button>
                  <button>Attached Washroom</button>
                  <button>Balcony</button>
                  <button>Wardrobe</button>
                  <button>Geyser</button>
                  <button>Car Parking</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="flat-amenities">
                <p className="title">Flat Amenities</p>
                <div className="selection">
                  <button>Cook</button>
                  <button>Maid</button>
                  <button>Kitchenware</button>
                  <button>Cookware</button>
                  <button>Refrigerator</button>
                  <button>Washing Machine</button>
                  <button>TV</button>
                  <button>Sofa</button>
                  <button>Water Purifier</button>
                  <button>Gas & Stove</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="property-amenities">
                <p className="title">Property Amenities</p>
                <div className="selection">
                  <button>Gym</button>
                  <button>Swimming Pool</button>
                  <button>Power Backup</button>
                  <button>Park</button>
                  <button>Guest Parking</button>
                  <button>CCTV</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="posting-by">
                <p className="title">Posting by</p>
                <div className="selection">
                  <button>Tenant</button>
                  <button>Owner</button>
                </div>
              </div>

              <div className="scoll-section-sub-filter" id="posting-for">
                <p className="title">Posting for</p>
                <div className="selection">
                  <button>Flat Mate</button>
                  <button>Replacement</button>
                  <button>Behalf</button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="buttons-section border-top d-flex align-items-end justify-content-end gap-2">
              <button>Clear All</button>
              <button>Skip</button>
              <button>View 32 Properties</button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FlatFilterPopup;
