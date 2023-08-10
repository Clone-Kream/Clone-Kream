import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./join.style";
import LoginButton from "../login/LoginButton";
import { AiOutlineRight } from "react-icons/ai";
import JoinModal from "./JoinModal";
const JoinWrap = (props) => {
  const emailJoin = {
    name: "email",
    text: "가입하기",
  };

  const initialJoinInput = {
    email: "",
    password: "",
    shoeSize: "",
    ageAgreement: false,
    adAgreement: false,
  };

  const [joinInput, setJoinInput] = useState(initialJoinInput);
  const [isModalShow, setIsModalShow] = useState(false);
  const [isJoinFormValid, setIsJoinFormValid] = useState(false);
  const handleJoinInput = (event) => {
    const { name, value } = event.target;
    if (name.includes("Agreement")) {
      setJoinInput({
        ...joinInput,
        [name]: !joinInput[name],
      });
    } else {
      setJoinInput({
        ...joinInput,
        [name]: value,
      });
    }
  };
  const handleShowModal = () => {
    setIsModalShow(!isModalShow);
  };
  const handleSubmitShoeSize = (shoeSize = "") => {
    setJoinInput({
      ...joinInput,
      shoeSize,
    });
  };
  // 로그인 폼 유효성 검사
  const handleSubmitJoinForm = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <S.Wrapper>
        {isModalShow && (
          <JoinModal
            handleShowModal={handleShowModal}
            handleSubmitShoeSize={handleSubmitShoeSize}
          />
        )}
        <S.JoinArea>
          <S.Header>
            <h1>회원가입</h1>
          </S.Header>
          <S.JoinForm onSubmit={handleSubmitJoinForm}>
            <h4>이메일 주소</h4>
            <input
              onChange={handleJoinInput}
              type="email"
              name="email"
              placeholder="예) kream@kream.co.kr"
              value={joinInput.email}
              autoComplete="off"
            />
            <h4>비밀번호</h4>
            <input
              onChange={handleJoinInput}
              type="password"
              name="password"
              placeholder="영문, 숫자, 특수문자 조합 8-16자"
              value={joinInput.password}
              autoComplete="off"
            />
            <h4>신발 사이즈</h4>
            <S.SelectSize onClick={handleShowModal}>
              <input
                type="text"
                name="size"
                value={joinInput.shoeSize}
                placeholder="선택하세요"
                autoComplete="off"
              />
              <S.SelectIcon>
                <AiOutlineRight />
              </S.SelectIcon>
            </S.SelectSize>
            <S.Agreement>
              <div>
                <input
                  id="age-checkbox"
                  type="checkbox"
                  name="ageAgreement"
                  checked={joinInput.ageAgreement}
                  onChange={handleJoinInput}
                />
                <label htmlFor="age-checkbox">
                  [필수] 만 14세 이상이며 모두 동의합니다.
                </label>
              </div>
              <div>
                <input
                  id="ad-checkbox"
                  type="checkbox"
                  name="adAgreement"
                  checked={joinInput.adAgreement}
                  onChange={handleJoinInput}
                />
                <label htmlFor="ad-checkbox">
                  [선택] 광고성 정보 수신에 모두 동의합니다.
                </label>
              </div>
            </S.Agreement>
            <LoginButton item={emailJoin}></LoginButton>
          </S.JoinForm>
        </S.JoinArea>
      </S.Wrapper>
    </>
  );
};

export default JoinWrap;
