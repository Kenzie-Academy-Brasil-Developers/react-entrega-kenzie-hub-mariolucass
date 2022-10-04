import styled from "styled-components";

export const InputStyled = styled.input`
  border-radius: 5px;
  background-color: var(--gray-2);
  padding: 1rem;
  border: none;
  width: 320px;
  height: 32px;
  color: var(--gray-0);

  ::placeholder {
    color: var(--gray-1);
  }
`;

export const LabelStyled = styled.label`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
`;
