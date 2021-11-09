import styled from "styled-components";
import Images from "../../../image";
import Input from "../../../UI/input";

const AboutSection = () => {
  return (
    <MainContent>
      <Image src={Images.virus} alt="virus" />
      <div className="content">
        <Section></Section>
        <FormSection>
          <h3>Contact Form</h3>
          <form>
            <Input
              placeholder="Enter Name"
              id="name"
              type="text"
              style={{ width: "400px" }}
              labelText="Enter Your Name:"
            />
            <Input
              placeholder="Enter Email"
              type="email"
              style={{ width: "400px" }}
              labelText="Enter Your Email:"
            />
            <Input
              placeholder="Enter Message"
              type="text"
              style={{ width: "400px" }}
              labelText="Enter Message"
            />
          </form>
        </FormSection>
      </div>
    </MainContent>
  );
};

export default AboutSection;

const MainContent = styled.div`
  width: 100%;
  height: 500px;
  position: relative;

  .content {
    width: inherit;
    height: inherit;
    position: absolute;
    top: 0;
    padding: 2rem;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Section = styled.section`
  flex: 1;
  border: 2px solid #fff;
`;

const FormSection = styled(Section)`
  text-align: center;
`;

const Image = styled.img`
  width: inherit;
  height: inherit;
  object-fit: cover;
  pointer-events: none;
`;
