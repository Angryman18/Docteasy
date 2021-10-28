import styled from "styled-components";
import SingleQuestion from "./SingleQuestion";
import NavbarData from "../../../Data/navData";

const Faq = () => {
    const {Faq} = NavbarData
    return (
        <Main>
            <h4 id={Faq.text}> Frequently Asked Questions? (FAQ)</h4>
            <SingleQuestion />
        </Main>
    )
}

export default Faq;


const Main = styled.div`

    color: #2c387e;
    text-align: center;
    margin: 2rem 0;

    & h1::before {
        content: "/";
        font-size: 2rem;
        font-weight: bold;
        color: red;
        margin: 0;
        padding: 0;
    }

`