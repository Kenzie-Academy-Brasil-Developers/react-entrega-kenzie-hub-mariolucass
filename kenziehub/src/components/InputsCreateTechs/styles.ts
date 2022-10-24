import styled from "styled-components";

export const InputStyled = styled.input`
  width: 100%;
  max-width: 350px;
  height: 42px;

  border-radius: 5px;
  background-color: var(--gray-2);
  padding-left: 10px;
  border: none;

  color: var(--gray-0);

  ::placeholder {
    color: var(--gray-1);
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  width: 100%;
  max-width: 350px;
  font-size: 12px;
  font-weight: 300;
`;
