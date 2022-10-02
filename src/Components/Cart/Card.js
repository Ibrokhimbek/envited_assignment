import React from "react";
// import { Link } from "react-router-dom";
// import calendar from "../../assets/calendar-days-regular.svg";
// import eventImage from "../../assets/event-img.jpeg";
import img from "../../assets/card.jpeg";
import "./Card.scss";

function Card() {
  return (
    <img className="landing-img" src={img} alt="event card" height={776} />

    // <div className="card">
    //   <img src={eventImage} alt="" />
    //   <div className="card-info">
    //     <h2>Movie night</h2>
    //     <span>
    //       👋 Hosted by <span>Elisia</span>
    //     </span>
    //     <div>
    //       <p>
    //         14 responses <Link to={"/"}>see guests</Link>
    //       </p>
    //       <Link to={"/invite"}>🤝 Invite</Link>
    //     </div>
    //     <div className="event-details">
    //       <div className="event-details-item">
    //         <span>
    //           <img src={calendar} alt="" />
    //         </span>
    //         <div>
    //           <p>18 August 6:00PM</p>
    //           <p>
    //             to <span>19 August 1:00PM</span>UTC +10
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Card;
