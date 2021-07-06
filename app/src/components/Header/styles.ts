import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #399bda;

  border-radius: 0.313rem 0.313rem 0 0;

  --webkit-font-smoothing: antialiased;

  strong {
    margin-left: 0.625rem;
    color: #fff;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10rem;
    height: 3rem;

    background-color: #333333;
    align-items: center;
    justify-content: center;

    margin: 0.625rem;
    padding: 0.313rem;

    img {
      font-size: 1rem;
      width: 1.25rem;
      height: 1.25rem;

      margin-right: auto;
    }

    span {
      color: #fff;
      margin-right: auto;
    }
  }

  button:hover {
    border: 2px solid rgba(0, 200, 100, 0.8);
    width: 13rem;
    height: 3.5rem;
    transition: width 0.5s, height 1s ease-in-out 1s;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0.625rem;
  color: rgba(255, 255, 255, 0.9);
`;
