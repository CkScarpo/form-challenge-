import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const EditHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  img {
    width: 6%;
  }
  .title {
    margin-left: 2px;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  height: 80vh;
  @media (max-width: 900px) {
    height: 95vh;
  }
  @media (max-width: 400px) {
    height: 100vh;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

