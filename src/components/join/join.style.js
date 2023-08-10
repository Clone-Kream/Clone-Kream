import { css, styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;
export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const ModalWrapper = styled.section`
  box-sizing: border-box;
  position: absolute;
  top: calc(50% - 21.5rem);
  left: calc(50% - 22.5rem);
  background-color: white;
  width: 45rem;
  height: 43rem;
  border-radius: 2rem;
  padding: 2.5rem 3.6rem;
  overflow: hidden;
  z-index: 2;
`;
export const ModalArea = styled.div`
  width: 100%;
  height: 100%;

  text-align: center;
  header {
    font-size: 1.9rem;
    font-weight: 600;
  }
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    margin-top: 3rem;
    overflow-x: hidden;
    overflow-y: auto;
    height: 26rem;
  }
`;
export const ModalButton = styled.button`
  margin-top: 2rem;
  width: 13rem;
  height: 4.5rem;
  border-radius: 1rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  outline: none;
  background-color: white;
  font-weight: 600;
  ${(props) =>
    props.is_clicked &&
    `
  background-color: black;
  color:white;
  `}
`;
export const ShoeSizeList = styled.li`
  box-sizing: border-box;
  margin: 0;
  list-style: none;
  border: 0.1rem solid rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.5rem;
  border-radius: 1.2rem;
  font-size: 1.4rem;
  cursor: pointer;
  &:active {
    background-color: rgba(0, 0, 0, 0.03);
  }
  ${(props) =>
    props.is_clicked &&
    `
  border: 0.15rem solid black;
  font-weight:600;
  `}
`;

export const JoinArea = styled.main`
  max-width: 42rem;
  margin: 12rem auto;
  padding: 0px 6rem;
`;
export const Header = styled.header`
  text-align: center;
  h1 {
    font-size: 3rem;
    font-style: oblique;
    font-weight: 100;
    letter-spacing: 0.6rem;
  }
  h3 {
    margin-top: 0.8rem;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    word-spacing: 0.05rem;
    font-weight: 800;
  }
`;
export const JoinForm = styled.form`
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    svg {
      margin-top: 0.2rem;
      margin-left: 0.5rem;
    }
  }
  h4 {
    margin-top: 1.5rem;
    margin-left: 0.1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  p {
    margin-left: 0.3rem;
    color: salmon;
    margin-bottom: 0.3rem;
    font-weight: 600;
  }
`;
export const JoinInput = styled.input`
  margin: 1rem 0rem;
  border: none;
  ${(props) =>
    props.valid
      ? `border-bottom: 0.08rem solid salmon;`
      : `border-bottom: 0.08rem solid rgba(0, 0, 0, 0.3)`};
  padding-bottom: 1rem;
  outline: none;
  transition: 0.1s;
  input::placeholder {
    color: #bcbcbc;
    font-size: 1.4rem;
  }
`;
export const SignUp = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 4rem;
  font-size: 1.5rem;
  a {
    margin-left: 1rem;
    text-decoration: none;
    color: salmon;
  }
`;
export const JoinButton = styled.button`
  ${(props) => {
    if (props.joinby === "email") {
      return css`
        background-color: red;
      `;
    }
  }}
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  outline: none;
  border: 0.08rem solid rgba(0, 0, 0, 0.3);
  border-radius: 1.2rem;
  font-weight: 600;
  font-size: 1.4rem;
  cursor: pointer;
  div {
    position: absolute;
    top: calc(50% - 1.5rem);
    left: 1rem;
    width: 3rem;
    height: 3rem;
    background-color: inherit;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const SelectSize = styled.div`
  position: relative;
  input {
    width: 100%;
    cursor: pointer;
    caret-color: transparent;
    margin: 1rem 0rem;
    border: none;
    border-bottom: 0.08rem solid rgba(0, 0, 0, 0.3);
    padding-bottom: 1rem;
    outline: none;
    transition: 0.1s;
    input::placeholder {
      color: #bcbcbc;
      font-size: 1.4rem;
    }
  }
`;
export const SelectIcon = styled.div`
  position: absolute;
  top: 30%;
  right: 0;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const Agreement = styled.section`
  margin-top: 3rem;
  div {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    width: 100%;
    input {
      margin: 0;
      margin-right: 1rem;
      width: 2rem;
      height: 2rem;
    }
  }
  div:last-child {
    margin-bottom: 5rem;
  }
`;
