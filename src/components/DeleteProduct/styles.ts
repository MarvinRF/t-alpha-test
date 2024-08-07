import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #007bff;
`;

export const Header = styled.header`
  margin-bottom: 40px;
  background-color: #fff;
  width: 100%;
  display: flex;
  height: 5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 26rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 1rem;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  cursor: pointer;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const HeaderSubTitle = styled.h2`
  font-size: 1.6rem;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 400px;
  }
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 12px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  font-size: 1rem;
  color: #333;
`;
