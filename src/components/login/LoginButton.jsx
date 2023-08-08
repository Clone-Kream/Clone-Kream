import React from "react";
import * as S from "./login.style";
const LoginButton = ({ item }) => {
  return (
    <S.LoginButton loginby={item.name}>
      <div>{item.url && <img alt={`${item.name}-logo`} src={item.url} />}</div>
      <h3>{item.text}</h3>
    </S.LoginButton>
  );
};

export default LoginButton;
