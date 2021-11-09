import styled from "styled-components";

const Input = ({ type, placeholder, style, id, labelText }) => {
  return (
    <Main>
      <Label htmlFor={id}>{labelText}</Label>
      <InputBox
        type={type}
        required
        placeholder={placeholder}
        style={style}
        id={id}
      />
      ;
    </Main>
  );
};

export default Input;

const InputBox = styled.input`
  outline: none;
  border: none;
  border-bottom: 2px solid green;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.1);
  position: relative;
  border-radius: 5px;
  padding: 5px;
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  border: 1px solid;
  padding: 0;
`;

const Label = styled.label`
  text-align: left;
`;
