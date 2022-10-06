import styled from "styled-components";

export const SelectStyled = styled.select`
  width: 100%;
  height: 42px;
  border-radius: 5px;
  background-color: var(--gray-2);
  color: #ffffff;
  border: none;
  padding-left: 10px;
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
