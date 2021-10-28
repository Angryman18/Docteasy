import styled from "styled-components";
import Slide from "./Slide";
import reviewData from "../../../Data/reviewData";
import NavbarData from "../../../Data/navData";
import React from "react";

const ReviewSlider = () => {
  const {Reviews} = NavbarData
  return (
    <React.Fragment>
      <Title>
        <span className="title">Reviews</span>
      </Title>
      <Main id={Reviews.text}>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {reviewData.map((item, idx) => {
              return (
                <div
                  className={
                    idx === 0 ? "carousel-item active" : "carousel-item"
                  }
                  key={item.id}
                >
                  <Slide
                    text={item.text}
                    name={item.name}
                    avatar={item.avatar}
                    rating={item.rating}
                  />
                </div>
              );
            })}
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </Main>
    </React.Fragment>
  );
};

export default ReviewSlider;

const Title = styled.h2`
  /* text-align: center;
  margin: 1rem 0;
  font-size: clamp(1.5rem, 2vw, 2rem);
  position: relative; */

  display: flex;
  justify-content: center;
  align-items: center;

  .title {
    font-size: clamp(1.5rem, 2vw, 2rem);
    position: relative;
  }

  .title::after {
    content: "";
    width: 10vw;
    height: 2px;
    background-color: #212121;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateX(11vw);
  }

  .title::before {
    content: "";
    width: 10vw;
    height: 2px;
    background-color: #212121;
    position: absolute;
    top: 50%;
    /* left: -100%; */
    transform: translateX(-11vw);
  }
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & div {
    width: inherit;
    text-align: center;
  }

  .carousel-control-next,
    .carousel-control-prev /*, .carousel-indicators */ {
    filter: invert(100%);
  }
`;
