import img1 from "../../asset/item1.webp";
import img2 from "../../asset/item2.webp";
import img3 from "../../asset/item3.webp";
import img4 from "../../asset/item4.webp";
import img5 from "../../asset/item5.webp";
import img6 from "../../asset/item6.webp";
import img7 from "../../asset/item7.webp";
import profileImg from "../../asset/profile.jpg";

export const user = {
  name: "두가두가",
  email: "s*****4@naver.com",
  img: profileImg,
  membership: "일반 회원",
  point: 415,
};

export const shoppingInfo = [
  "구매 내역",
  "판매 내역",
  // "관심 상품",
  // "최근 본 상품",
];

// export const myInfo = ["금액 관리", "프로필 관리"];
export const myInfo = ["금액 관리"];

export const tabs = [
  { id: "전체", label: "전체" },
  { id: "판매대기", label: "판매대기" },
  { id: "판매 중", label: "판매 중" },
  { id: "정산 완료", label: "정산 완료" },
];

export const saleTabs = [
  { id: "전체", label: "전체" },
  { id: "구매대기", label: "구매대기" },
  { id: "진행 중", label: "진행 중" },
  { id: "정산 완료", label: "정산 완료" },
];

// 구매 내역
export const allData = [
  {
    id: 1,
    img: img1,
    name: "헤드셋",
    price: 55000,
    quantity: 1,
    purchaseDate: "2023.08.07",
    status: "입출 중",
    method: "신용카드",
  },
  {
    id: 9,
    img: img1,
    name: "헤드셋23",
    price: 55000,
    quantity: 1,
    purchaseDate: "2023.08.07",
    status: "입출 중",
    method: "신용카드",
  },
  {
    id: 2,
    img: img3,
    name: "조던",
    price: 150000,
    quantity: 1,
    purchaseDate: "2023.08.05",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 8,
    img: img1,
    name: "헤드셋1",
    price: 150000,
    quantity: 1,
    purchaseDate: "2023.08.05",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 3,
    img: img2,
    name: "꼼데가르송 컨버스",
    price: 115000,
    quantity: 1,
    purchaseDate: "2023.08.03",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 10,
    img: img4,
    name: "후드티123",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.30",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 4,
    img: img4,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.26",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 11,
    img: img4,
    name: "후드티058",
    price: 52000,
    quantity: 1,
    purchaseDate: "2023.07.20",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 12,
    img: img4,
    name: "후드티367",
    price: 74000,
    quantity: 1,
    purchaseDate: "2023.07.19",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 5,
    img: img5,
    name: "후디",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.18",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 6,
    img: img6,
    name: "디스이즈네버댓",
    price: 124000,
    quantity: 1,
    purchaseDate: "2023.07.14",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 7,
    img: img7,
    name: "디스이즈네버댓",
    price: 330000,
    quantity: 3,
    purchaseDate: "2023.07.02",
    status: "배송완료",
    method: "신용카드",
  },
];

export const waitingData = [
  {
    id: 1,
    img: img1,
    name: "헤드셋",
    price: 55000,
    quantity: 1,
    purchaseDate: "2023.08.07",
    status: "입출 중",
    method: "신용카드",
  },
  {
    id: 2,
    img: img3,
    name: "조던",
    price: 150000,
    quantity: 1,
    purchaseDate: "2023.08.05",
    status: "배송완료",
    method: "가상계좌",
  },
];

export const buyingData = [
  {
    id: 3,
    img: img2,
    name: "꼼데가르송 컨버스",
    price: 115000,
    quantity: 1,
    purchaseDate: "2023.08.03",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 4,
    img: img4,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.30",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 5,
    img: img5,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.18",
    status: "배송완료",
    method: "신용카드",
  },
];

export const finishData = [
  {
    id: 6,
    img: img6,
    name: "디스이즈네버댓",
    price: 124000,
    quantity: 1,
    purchaseDate: "2023.07.14",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 7,
    img: img7,
    name: "디스이즈네버댓",
    price: 330000,
    quantity: 3,
    purchaseDate: "2023.07.02",
    status: "배송완료",
    method: "신용카드",
  },
];

// 판매 내역
export const saleAllData = [
  {
    id: 6,
    img: img6,
    name: "디스이즈네버댓",
    price: 124000,
    quantity: 1,
    purchaseDate: "2023.08.07",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 1,
    img: img1,
    name: "헤드셋",
    price: 55000,
    quantity: 1,
    purchaseDate: "2023.08.05",
    status: "입출 중",
    method: "신용카드",
  },
  {
    id: 2,
    img: img3,
    name: "조던",
    price: 150000,
    quantity: 1,
    purchaseDate: "2023.08.05",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 8,
    img: img1,
    name: "헤드셋1",
    price: 150000,
    quantity: 1,
    purchaseDate: "2023.08.03",
    status: "배송완료",
    method: "가상계좌",
  },

  {
    id: 4,
    img: img4,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.30",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 5,
    img: img5,
    name: "후디",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.18",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 3,
    img: img2,
    name: "꼼데가르송 컨버스",
    price: 115000,
    quantity: 1,
    purchaseDate: "2023.07.14",
    status: "배송완료",
    method: "가상계좌",
  },

  {
    id: 7,
    img: img7,
    name: "디스이즈네버댓",
    price: 330000,
    quantity: 3,
    purchaseDate: "2023.07.02",
    status: "배송완료",
    method: "신용카드",
  },
];

export const saleWaitingData = [
  {
    id: 3,
    img: img2,
    name: "꼼데가르송 컨버스",
    price: 115000,
    quantity: 1,
    purchaseDate: "2023.08.03",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 4,
    img: img4,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.30",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 5,
    img: img5,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.18",
    status: "배송완료",
    method: "신용카드",
  },
];

export const saleBuyingData = [
  {
    id: 3,
    img: img2,
    name: "꼼데가르송 컨버스",
    price: 115000,
    quantity: 1,
    purchaseDate: "2023.08.03",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 4,
    img: img4,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.30",
    status: "배송완료",
    method: "신용카드",
  },
  {
    id: 5,
    img: img5,
    name: "후드티",
    price: 81000,
    quantity: 1,
    purchaseDate: "2023.07.18",
    status: "배송완료",
    method: "신용카드",
  },
];

export const saleFinishData = [
  {
    id: 6,
    img: img6,
    name: "디스이즈네버댓",
    price: 124000,
    quantity: 1,
    purchaseDate: "2023.07.14",
    status: "배송완료",
    method: "가상계좌",
  },
  {
    id: 7,
    img: img7,
    name: "디스이즈네버댓",
    price: 330000,
    quantity: 3,
    purchaseDate: "2023.07.02",
    status: "배송완료",
    method: "신용카드",
  },
];
