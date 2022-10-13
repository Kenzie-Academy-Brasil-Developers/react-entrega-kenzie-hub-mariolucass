import styled from "styled-components";
import { bounceDown, bounceUp } from "../../styles/animations";

export const LoginContainer = styled.div`
  inset: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 20px;
    color: var(--color-primary);
    animation: 1.5s ${bounceDown};
    margin-bottom: 50px;
  }
`;

export const FormLogin = styled.form`
  animation: 1.5s ${bounceUp};
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
  gap: 1.5rem;
  padding-top: 50px;

  .Link {
    width: 100%;
    max-width: 350px;
    min-height: 40px;

    background-color: var(--gray-1);
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

  span {
    color: var(--gray-1);
    font-size: 0.85rem;
  }
`;
