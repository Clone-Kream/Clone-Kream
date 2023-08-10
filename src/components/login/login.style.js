import { css, styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
`;
export const LoginArea = styled.main`
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
export const LoginForm = styled.form`
  margin: 0 auto;
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  h4 {
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
  h5 {
    margin-left: 0.1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
export const LoginInput = styled.input`
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
export const LoginButton = styled.button`
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
${(props) => props.valid && `background-color: black; color:white;`}

  a {
    color: black;
    text-decoration: none;
    width:100%;
    height:100%;
    position:absolute;
  }
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
  
`;
