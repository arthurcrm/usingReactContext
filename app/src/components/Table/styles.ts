import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.313rem;
  background-color: rgb(82, 85, 86);

  display: flex;

  table {
    width: 100%;
    height: 100%;
    border-color: #7a8082;
    border-spacing: 0 0.5rem;

    th {
      color: rgb(255, 255, 250);
      font-weight: bold;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: #333;
      color: #fff;

      &:first-child {
        color: #fff;
      }

      button {
        background: none;
        float: right;
        clear: both;
        cursor: pointer;
        display: flex;

        img {
          padding: 0 2rem;
        }
      }
    }
  }
`;
