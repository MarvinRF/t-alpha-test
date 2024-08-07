import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 40px;
  background-color: #fff;
  width: 100%;
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
  font-size: 2rem;
  @media (max-width: 1024px) {
    margin-bottom: 0.2rem;
    font-size: 1.8rem;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-size: 1.6rem;
  @media (max-width: 1024px) {
    margin-bottom: 0.2rem;
    font-size: 1.4rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;
