import React from "react";
import { Link } from "react-router-dom";
import * as S from "./login.style";
const LoginButton = ({ item, valid }) => {
  console.log(valid);
  return (
    <S.LoginButton loginby={item.name} valid={valid}>
      <div>{item.url && <img alt={item.alt} src={item.url} />}</div>
      <h3>{item.text}</h3>
    </S.LoginButton>
  );
};

export default LoginButton;
