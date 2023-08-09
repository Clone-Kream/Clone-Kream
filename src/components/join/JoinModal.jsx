import React, { useState } from "react";
import * as S from "./join.style";
import { shoeSizeList } from "./join.data";
const JoinModal = ({ handleShowModal, handleSubmitShoeSize }) => {
  const [shoeSize, setShoeSize] = useState();
  const getShoeSize = () => {
    return shoeSizeList.map((item, idx) => (
      <S.ShoeSizeList
        is_clicked={item == shoeSize}
        key={idx}
        onClick={handleClickShoeSize}
      >
        {item}
      </S.ShoeSizeList>
    ));
  };
  const handleModalClose = () => {
    handleShowModal();
  };
  const handleModalBtnClick = () => {
    handleSubmitShoeSize(shoeSize);
    handleShowModal();
  };
  const handleClickShoeSize = (event) => {
    const size = event.target.innerText;
    setShoeSize(size);
  };
  return (
    <>
      <S.ModalBackground onClick={handleModalClose} />
      <S.ModalWrapper>
        <S.ModalArea>
          <header>사이즈 선택</header>
          <main>{getShoeSize()}</main>
          <footer>
            <S.ModalButton
              onClick={handleModalBtnClick}
              is_clicked={shoeSize ? true : false}
            >
              확인
            </S.ModalButton>
          </footer>
        </S.ModalArea>
      </S.ModalWrapper>
    </>
  );
};

export default JoinModal;
