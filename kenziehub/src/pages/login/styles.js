import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  h1 {
    color: var(--color-primary);
  }
`;

export const FormLogin = styled.form`
  color: var(--gray-0);
  background-color: var(--gray-3);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  gap: 0.5rem;
`;
