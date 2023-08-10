import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./login.style";
import LoginButton from "./LoginButton";

const LoginWrap = () => {
  const emailLogin = {
    name: "email",
    text: "로그인",
  };
  const socialLoginList = [
    {
      name: "naver",
      text: "네이버로 로그인",
      url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAmVBMVEX///8AvxgAvQDY9eJP2ISN4KIAvgQAwSPb+u7N9Nyq784AwR259NuW3JkAvhH8//9W0nIAwyslyUrz/vrB8tay5rhq25CG35276sLN9+VZ1X0AxDXr+/NHzmN725TB7s2B4qUgxj+h57Y0ylOx68Wq5LJ757KG5rK99d/i+e6n6b1m1oFr2YzJ89uY5bAzzV43xkNQ1Xlg0nJ9EnlhAAADxUlEQVR4nO3da1faQBCH8d1BA166GLFC5WaqvaACrd//w5WcQ6lo2GQWLTNz/s/7LPwOgTUx2TiHEEIIIYQQQgghhBBCqHHdq8/XR+LqD768k+/kJiOhDfujd/CNiYIXWiCa9PbzdftEh2bEo3y6F3As3OfLz/F2D2AhH7iKrpOFFyqAK+LXROCxEqAPWSsJ2MrE/oa+LrtLEmrZR8voPgHYUQT0oUgQTjQJPc35wlzNt7CMJmygqp10tZvyf2umyoRD9t/g35QJfYcrVDPdr+NP+hBKC0II5QchhPKDEEL5QQih/CCEUH4QQig/CCGUH4QQyg9CCOUH4X7CEL+CMLZp+pb/Uxja56eRbiMj0ffYlj8YxI8V5vGhIhfm0M/YhidihO34ULP2zss66NyE0D3sHMuKcPd+akbY27WfmhG6+x2j2RG6x+rhDAl7w8r91JDQXVWOZ0nonqoGNCXsFhX7qSmhm1fce2NLWHXVsTFhxX5qTFhx3bE14dtBzQnd8tWo9oStsP1VtCd0i+1hDQpf7acWhaOt+8UsCrdPaZgUbp3SsCkcvTilYVP48pSGUaG72YxtVdjb3PlnVfjvxjizws2pN7vCv4eKdoVuTtaF61NvloXuMrMunJd/gpsWuj5ZF7oisy7sUDAuXL2GdaFb2hBGFuOa2RB+irz24tSEMLYoR3Q1CzVCOua+uDphyvI4uoRh2DUu9PRoXZi2FpcqYThLWYZTk9DT0rrQp0wZuoSe+GsbKhOGgr1arDKhpyfrQk/c9XDVCQMx91N1Qk9j60JPC+tC5nK4CoU+KzhHGRqFvClDpZB1lKFTGPLmRxk6hZ4urAsZK6hrFQaaGRf67LLhlKFW2Hhpar1CT1fWhSFvdJShWNhwytAsbDZlqBYG32DKUC30dFc/ZegWeupbF3o6sS4Mw7opQ7uw/n9u6oWeHqwL66YMOcL46i27hXXPaRIj9P4sVvR9Rbc8YzzM54OFIVb6lpynFWElLAjlByGE8oMQQvlBCKH8IIRQfhBCKD8IIZQfhBDKD0II5QchhPLjCxfmhQNdwpB3uMLqNdTFFn5xga6bcf4De/DoN1sYezqMwGjAF041CUNg36C6qvp5DTLj359atuu5IgILWcrt/s6N1RCZ9zVu6nCu2Dlk9JwGLK+6UkGky5SfmTUxyw799uujprfgVBML6d/FQM/pn2BZ74kk76qB2jXXqDao9ZitkBJbva/8eL8PcN1ocHRXtKWVF8tJs9unmtXrSGu2z+8LQgghhBBCCCGEEEIIvekPP5Cn33NBThsAAAAASUVORK5CYII=",
      alt: "naver-logo",
    },
    {
      name: "apple",
      text: "Apple로 로그인",
      url: "data:image/png;base64,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",
      alt: "apple-logo",
    },
  ];

  const initialLoginInput = {
    email: "",
    password: "",
  };
  const [loginInput, setloginInput] = useState(initialLoginInput);
  const [isLoginInputTouched, setIsLoginInputTouched] = useState({
    email: false,
    password: false,
  });
  const handleLoginInput = (event) => {
    const { name, value } = event.target;
    setloginInput({
      ...loginInput,
      [name]: value,
    });
  };
  const valueInputBlurHandler = (event) => {
    const { name, value } = event.target;
    setIsLoginInputTouched({
      ...isLoginInputTouched,
      [name]: true,
    });
  };
  const isLoginInputValid = (name) => {
    if (loginInput[name].trim() === "" || !loginInput.email.includes("@")) {
      return false;
    }
    return true;
  };
  let isEmailInvalid = isLoginInputTouched.email && !isLoginInputValid("email");
  let isPasswordInvalid =
    isLoginInputTouched.password && !isLoginInputValid("password");
  const navigate = useNavigate();
  // 로그인 폼 유효성 검사
  const isFormValid =
    isLoginInputValid("email") && isLoginInputValid("password");
  console.log(isFormValid);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(isFormValid);
    if (!isFormValid) {
      return;
    }
    setloginInput(initialLoginInput);
    setIsLoginInputTouched({ email: false, password: false });
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.LoginArea>
        <S.Header>
          <h1>KREAM</h1>
          <h3>KICKS RULE EVERYTHING AROUND ME</h3>
        </S.Header>
        <S.LoginForm onSubmit={handleSubmitForm}>
          <h4>이메일 주소</h4>
          <S.LoginInput
            valid={isEmailInvalid}
            onChange={handleLoginInput}
            onBlur={valueInputBlurHandler}
            type="email"
            name="email"
            placeholder="예) kream@kream.co.kr"
            value={loginInput.email}
            autoComplete="off"
          />
          {isEmailInvalid && <p>이메일 주소를 정확히 입력해주세요.</p>}
          <h5>비밀번호</h5>
          <S.LoginInput
            valid={isPasswordInvalid}
            onChange={handleLoginInput}
            onBlur={valueInputBlurHandler}
            type="password"
            name="password"
            value={loginInput.password}
            autoComplete="off"
          />
          {isPasswordInvalid && <p>공백을 제외하고 입력해주세요.</p>}
          <LoginButton item={emailLogin} />
        </S.LoginForm>
        <S.SignUp>
          아직 계정이 없으신가요? <Link to="/join">회원가입</Link>
        </S.SignUp>
        {socialLoginList.map((item, idx) => (
          <LoginButton key={idx} item={item} />
        ))}
      </S.LoginArea>
    </S.Wrapper>
  );
};

export default LoginWrap;
