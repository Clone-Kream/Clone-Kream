import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./login.style";
const LoginButton = ({ item }) => {
  const navigate = useNavigate();
  const clickLogin = () => {
    console.log("눌림");
    localStorage.setItem("token", "success");
    navigate("/");
  };
  return (
    <S.LoginButton loginby={item.name} onClick={clickLogin}>
      <div>{item.url && <img alt={item.alt} src={item.url} />}</div>
      <h3>{item.text}</h3>
    </S.LoginButton>
  );
};

export default LoginButton;
