import styled from "styled-components";
import faqs from "../../../Data/faqData";

const SingleQuestion = () => {
  return (
    <MainSection>
      <div className="main" id="parent">
        {faqs.map((item) => {
          return (
            <div key={item.id} className="content">
              <div className="question" id={`heading${item.id}`}>
                <h2 className="mb-0">
                  <div
                    className="btn btn-block text-left collapsed text-bold"
                    data-toggle="collapse"
                    data-target={`#collapse${item.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${item.id}`}
                  >
                    <span className="item-question">
                      <i className="far fa-dot-circle"></i> {item.question}
                    </span>
                  </div>
                </h2>
              </div>

              <div
                id={`collapse${item.id}`}
                className="collapse"
                aria-labelledby={`heading${item.id}`}
                data-parent="#parent"
              >
                <div className="card-body">{item.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </MainSection>
  );
};

export default SingleQuestion;

const MainSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0;
  box-sizing: border-box;
  padding: 0;
  animation: aprearText 0.5s ease;

  @keyframes aprearText {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  .main {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    width: 50%;
    min-width: 500px;
  }

  .content {
    width: 100%;
    min-width: 500px;
    box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: 0.3s ease;
    border: 2px solid rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    position: relative;
  }

  .card-body {
    text-align: justify;
    text-justify: inter-word;
  }

  .item-question {
    font-size: clamp(1rem, 1.1vw, 1.2rem);
    font-weight: bold;
    color: #3f51b5;
  }
  @media (max-width: 768px) {
    .content {
      width: 90%;
      min-width: 300px;
      box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.1);
      padding: 0.5rem;
      border-radius: 5px;
      transition: 0.3s ease;
      border: 2px solid rgba(0, 0, 0, 0.1);
    }
    .main {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 300px;
    }
  }
`;
