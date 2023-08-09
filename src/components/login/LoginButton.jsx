import React from "react";
import { Link } from "react-router-dom";
import * as S from "./login.style";
const LoginButton = ({ item }) => {
  return (
    <S.LoginButton loginby={item.name}>
      <div>{item.url && <img alt={item.alt} src={item.url} />}</div>
      <h3>{item.text}</h3>
      <Link to="/"></Link>
    </S.LoginButton>
  );
};

export default LoginButton;
