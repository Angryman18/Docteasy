import styled from "styled-components";

const Slide = ({ name, text, avatar, rating }) => {
  // rating is the input number
  const ar = []; // the output array
  for (let i = 0; i <= rating; i++) {
    if (i + 0.5 === rating) {
      ar.push(0.5);
    } else if (i === rating) {
      break;
    } else {
      ar.push(1);
    }
  }

  while (true) {
    if (ar.length < 5) {
      ar.push(0);
    } else {
      break;
    }
  }

  return (
    <Mainsection>
      <div>
        <img className="avatar" src={avatar} alt="firstImage" />
      </div>
      <div>
        <h4>{name}</h4>
        <span>
          {ar.map((item, idx) => {
            if (item === 1) {
              return <i key={idx} className="fas fa-star"></i>;
            } else if (item === 0.5) {
              return <i key={idx} className="fas fa-star-half-alt"></i>;
            } else if (item === 0) {
              return <i key={idx} className="far fa-star"></i>;
            } else {
              return false;
            }
          })}
        </span>
      </div>
      <div className="review_text">
        <p>{text}</p>
      </div>
    </Mainsection>
  );
};

export default Slide;

const Mainsection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;

  & :nth-child(2) h4 {
    margin: 0.5rem 0;
    color: #1a237e;
    text-transform: capitalize;
  }

  & :nth-child(2) span i {
    color: orange;
  }
  .avatar {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 1px solid #aaa;
  }
  .review_text {
    margin: 0.5rem 0;
    width: 50%;
    min-width: 250px;
    text-align: justify;
    font-style: italic;
    text-justify: inter-word;
  }
  @media screen and (max-width: 768px) {
    height: 500px;
  }
`;
