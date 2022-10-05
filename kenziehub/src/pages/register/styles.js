import styled from "styled-components";
import { bounceDown, bounceUp } from "../../styles/animations";

export const RegisterContainer = styled.div`
  inset: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

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
  color: var(--gray-0);
  background-color: var(--gray-3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  gap: 0.5rem;
  padding-top: 50px;
  animation: 1.3s ${bounceUp};
`;
