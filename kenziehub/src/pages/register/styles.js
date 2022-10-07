import styled from "styled-components";
import { bounceDown, bounceUp } from "../../styles/animations";

export const RegisterContainer = styled.div`
  inset: 0;
  top: 0%;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media (min-width: 767px) {
    top: 0%;
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
  overflow-y: auto;
  color: var(--gray-0);
  background-color: var(--gray-3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 4px;
  gap: 1.5rem;
  padding-top: 50px;
  animation: 1.3s ${bounceUp};

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
