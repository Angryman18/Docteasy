import React from "react";
import image from "../../image/bgimage.jpg";
import styled from "styled-components";

const Hero = () => {
  return (
    <Main>
      <div className="hero">
        <img className="image" src={image} alt="background" />
        <div className="shadow"></div>
        <div className="text">
          <div className="inner_text">
            <p>Consult with a Doctor Now?</p>
            <button>Consult a Doctor</button>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@700&display=swap");

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;

  .hero {
    width: 100vw;
    height: 80vh;
    position: relative;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: all 0.5s ease;
  }

  .shadow {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.2),
      rgba(0, 229, 255, 0.5)
    );
    position: absolute;
    top: 0;
  }

  .text {
    position: absolute;
    top: 50%;
    left: 400px;
    transform: translate(-50%, -50%);
  }

  .inner_text {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin: 0;
    animation: appearText 1s ease;
  }

  @keyframes appearText {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  p {
    font-size: clamp(2rem, 5vw, 2.5rem);
    color: #fff;
    /* width: 100%; */
    font-family: "Noto Sans Mono", monospace;
    margin: 1rem 0;
    padding: 0;
    text-align: left;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }

  button {
    width: 250px;
    padding: 1rem 2rem;
    box-sizing: unset;
    font-size: 1.5rem;
    outline: none;
    border: none;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
    box-shadow: 2px 2px 30px 2px rgba(0, 0, 0, 0.2);
    font-family: "Noto Sans Mono", monospace;
  }

  @media screen and (max-width: 800px) {
    .text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    button {
      width: 250px;
      font-size: clamp(1rem, 5vw, 1.5rem);
      outline: none;
      border: none;
      background-color: #4caf50;
      color: #fff;
      cursor: pointer;
      box-shadow: 2px 2px 30px 2px rgba(0, 0, 0, 0.2);
      font-family: "Noto Sans Mono", monospace;
    }
  }
`;
