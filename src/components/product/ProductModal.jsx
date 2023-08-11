import React, { useState } from "react";
import * as S from "../join/join.style";
import { size } from "./product.data";
import { shoeSizeList } from "../join/join.data";
const ProductModal = ({
  handleShowModal,
  handleSubmitSize,
  ProductCategory,
}) => {
  const [shoeSize, setShoeSize] = useState();
  let data = size;
  if (ProductCategory === "신발") {
    data = shoeSizeList;
  }
  const getShoeSize = () => {
    return data.map((item, idx) => (
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
    handleSubmitSize(shoeSize);
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

export default ProductModal;
