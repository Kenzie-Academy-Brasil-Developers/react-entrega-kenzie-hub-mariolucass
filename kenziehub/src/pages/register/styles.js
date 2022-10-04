import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .header__form {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }

  h1 {
    color: var(--color-primary);
  }
`;

export const FormRegister = styled.form`
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
