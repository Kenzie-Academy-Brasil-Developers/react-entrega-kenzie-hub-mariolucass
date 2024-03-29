import styled from "styled-components";
import { bounceDown, bounceUp } from "../../styles/animations";

export const RegisterContainer = styled.div`
  inset: 0;
  top: 0%;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  justify-content: center;
  align-items: center;

  .Link {
    width: 80px;
    max-width: 350px;
    min-height: 40px;

    background-color: var(--gray-3);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 0.3rem;

    color: #ffffff;
    font-family: var(--font-family);
    cursor: pointer;
  }

  .header__form {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 90%;
    max-width: 380px;
    animation: 1.3s ${bounceDown};
    margin-bottom: 50px;
  }

  h1 {
    margin-bottom: 20px;
    color: var(--color-primary);
  }
`;

export const FormRegister = styled.form`
  width: 90%;
  max-width: 380px;
  justify-content: flex-start;
  align-items: flex-start;
  height: 700px;
  overflow-y: auto;
  color: var(--gray-0);
  background-color: var(--gray-3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 4px;
  gap: 0.5rem;
  padding-top: 30px;
  animation: 1.3s ${bounceUp};
  margin-bottom: 50px;

  h3 {
    width: 100%;
    text-align: center;
  }

  span {
    width: 100%;
    color: var(--gray-1);
    font-size: 0.85rem;
    text-align: center;
  }
`;
