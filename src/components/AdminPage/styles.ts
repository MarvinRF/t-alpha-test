import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26rem;
  white-space: nowrap;
  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: 7rem;
    align-items: center;
  }
`;
export const HeaderTitle = styled.h1`
  @media (max-width: 1024px) {
    margin-bottom: 0.2rem;
  }
`;

export const HeaderSubTitle = styled.h1`
  @media (max-width: 1024px) {
    margin-bottom: 0.2rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 1440px) {
    align-items: center;
    margin-bottom: 50px;
  }
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h3`
  margin-top: 10px;
  text-align: center;
`;

export const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 0.3rem;
`;
