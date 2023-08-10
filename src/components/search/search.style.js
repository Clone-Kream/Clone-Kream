import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 5rem;
  width: 80rem;
  margin: 0 auto 5rem;
  position: relative;
  svg {
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 2rem;
    left: 105%;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  color: #222;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 4.8rem;
  border-bottom: 3px solid #000;
  input {
    width: 100%;
    padding: 0 0 0 0.1rem;
    border: none;
    height: 2.9rem;
    color: #000;
    font-size: 2.4rem;
    font-weight: 700;
    outline: none;
    &::placeholder {
      color: #bcbcbc;
      font-weight: 400;
      font-size: 2.2rem;
    }
  }
`;

export const SectionList = styled.div`
  margin-top: 2rem;
`;

export const ProposeBox = styled.div`
  padding-bottom: 4rem;
  ul {
    display: flex;
    margin-top: 1.2rem;
  }
  li {
    background-color: #f4f4f4;
    border: 1px solid #ebebeb;
    border-radius: 2rem;
    color: rgba(34, 34, 34, 0.8);
    font-size: 1.4rem;
    padding: 0.8rem 1.2rem;
    margin: 0 8px 12px 0;
    cursor: pointer;
  }
`;

export const PopularBox = styled.div`
  padding-bottom: 4rem;
  .popular-meta {
    display: flex;
    align-items: center;
    margin-bottom: 1.2rem;
    gap: 0.5rem;
    span {
      color: rgba(34, 34, 34, 0.8);
      font-size: 1.3rem;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 45rem;
    li {
      cursor: pointer;
      width: 50%;
      height: 4.1rem;
      padding: 4px 0 16px;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: #222;
      font-weight: 400;
      box-sizing: border-box;
      span {
        font-weight: 600;
        margin-right: 6px;
      }
    }
  }
`;

export const RecentBox = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  .recent-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
    span {
      font-size: 1.3rem;
      color: #c6c1c1;
      text-decoration: underline;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    padding-bottom: 1.5rem;
    li {
      width: 8rem;
      margin-right: 0.8rem;
      cursor: pointer;

      img {
        width: 8rem;
        height: 8rem;
        border-radius: 1rem;
      }
      span {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        font-size: 1.1rem;
        letter-spacing: -0.7px;
        margin-top: 0.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: keep-all;
      }
    }
  }
`;
