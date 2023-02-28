import React, { useRef } from "react";
import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/pagination.css";

const CarousalCard = ({ color, heading, image }) => {
  return (
    <>
      <div
        className="carousal-card f-d f-v-c f-h-c"
        style={{ backgroundColor: `${color}` }}
      >
        <h2 className="card-heading">{heading}</h2>
        {image && (
          <img className="card-bg-image" src={image} alt="card-image" />
        )}
      </div>
      <style jsx={"true"}>{`
        .carousal-card {
          margin: 1.5rem;
          width: 1024px;
          height: 370px;
          background-color: #e04f4f;
          box-shadow: 2px 2px 40px rgba(0, 0, 0, 0.2);
          border-radius: 32px;
          font-family: "Inter";
          font-style: normal;
          font-weight: 700;
          font-size: 56px;
          color: #fff;
          position: relative;
          transition: height 250ms;
        }
        .card-bg-image {
          width: 100%;
          height: 100%;
          border-radius: 32px;
          object-fit: cover;
        }
        .card-heading {
          position: absolute;
          color: #fff;
        }
        .vertically-align {
          display: flex;
          align-items: center;
        }
        @media only screen and (max-device-width: 1500px) {
          .carousal-card {
            width: 900px;
            height: 325px;
            margin: 1.5rem 1.25rem;
          }
        }
        @media only screen and (max-device-width: 1350px) {
          .carousal-card {
            width: 700px;
            height: 252px;
            margin: 1.5rem 1rem;
          }
        }
        @media only screen and (max-device-width: 1050px) {
          .carousal-card {
            width: 500px;
            height: 180px;
            margin: 1.5rem 0.75rem;
          }
        }
        @media only screen and (max-device-width: 760px) {
          .carousal-card {
            width: 400px;
            height: 144px;
            margin: 1.5rem 0.5rem;
          }
        }
        @media only screen and (max-device-width: 600px) {
          .carousal-card {
            width: 320px;
            height: 115px;
            margin: 1.5rem 0.4rem;
          }
        }
        @media only screen and (max-device-width: 450px) {
          .carousal-card {
            width: 280px;
            height: 101px;
            margin: 1.5rem 0.4rem;
          }
        }
      `}</style>
    </>
  );
};

const Carousal = ({ content }) => {
  const plugins = [new Pagination({ type: "scroll" }), new AutoPlay()];
  const flickingRef = useRef();

  return (
    <>
      <Flicking
        ref={flickingRef}
        circular={true}
        adaptive={true}
        plugins={plugins}
        onMoveStart={(e) => {
          let camera = e.currentTarget.camera.element;
          camera.classList.add("vertically-align");

          let centerPanel = e.currentTarget.currentPanel;
          centerPanel.element.querySelector(".carousal-card").style.transform =
            "scale(0.85)";

          centerPanel
            .next()
            .element.querySelector(".carousal-card").style.transform =
            "scale(1)";

          centerPanel
            .next()
            .next()
            .element.querySelector(".carousal-card").style.transform =
            "scale(0.85)";
        }}
      >
        {content.cards.map((card, idx) => {
          return (
            <div key={idx}>
              <CarousalCard
                color={card["bg-color"]}
                heading={card["heading"]}
                image={card["image-desk"]}
              />
            </div>
          );
        })}

        <ViewportSlot className="viewport">
          <div className="flicking-pagination"></div>
        </ViewportSlot>
      </Flicking>
    </>
  );
};

export default Carousal;
