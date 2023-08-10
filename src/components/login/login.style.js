import { css, styled } from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  /* background-color: pink; */
  .login {
    /* padding-top: 15.6rem; */
    width: 100%;
    height: 5.6rem;
  }
`;
export const LoginArea = styled.main`
  max-width: 42rem;
  margin: 12rem auto;
  padding: 6rem 6rem 0;
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
  input {
    margin: 1rem 0rem;
    border: none;
    border-bottom: 0.08rem solid rgba(0, 0, 0, 0.3);
    padding-bottom: 1rem;
    outline: none;
    transition: 0.1s;
  }
  input::placeholder {
    color: #bcbcbc;
    font-size: 1.4rem;
  }
  h4 {
    margin-left: 0.1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
  }
  h5 {
    margin-left: 0.1rem;
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
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
  ${(props) => {
    if (props.loginby === "email") {
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
  a {
    color: black;
    text-decoration: none;
    width: 100%;
    height: 100%;
    position: absolute;
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
  }
`;
