import styled from 'styled-components';

export const Container = styled.header`
  background-color: #399bda;

  strong {
    margin-left: 0.625rem;
    color: #fff;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0.625rem;
  color: rgba(255, 255, 255, 0.9);
`;

export const Content = styled.div`
  margin: 0 auto;

  padding: 2rem 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1rem;
    color: #fff;
    background: #5d96f0;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    box-shadow: 1px 1px 1px 1px #333;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.9);
    }

    img {
      margin-right: auto;
    }

    span {
      margin-right: auto;
    }
  }
`;
