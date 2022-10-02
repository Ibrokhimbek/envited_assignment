import React from "react";
import Card from "../../Components/Cart/Card";
import Container from "../../Components/Container/Container";
import CreateBtn from "../../Components/Buttons/CreateBtn";
import "./Home.scss";

function Home() {
  return (
    <Container>
      <div className="landing-wrapper">
        <div className="landing-img">
          <Card />
          <CreateBtn value={"🎉 Create my event"} />
        </div>
        <div className="landing-description">
          <h2 className="landing-description-title">
            Imagine if <br /> <span className="gradient-text">Snapchat</span>{" "}
            <br /> had events.
          </h2>
          <p className="landing-description-info">
            Easily host and share events with your friends across any social
            media.
          </p>
          <CreateBtn value={"🎉 Create my event"} />
        </div>
      </div>
    </Container>
  );
}

export default Home;
