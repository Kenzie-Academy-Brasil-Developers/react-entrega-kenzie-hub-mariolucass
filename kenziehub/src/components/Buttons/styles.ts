import styled from "styled-components";

interface Props{
  
}

export const ButtonPrimario = styled.button`
  width: ${({ kind } : ) => (kind !== 3 ? "100%" : "80px")};
  background-color: ${({ kind }) => {
    if (kind === 1) {
      return "var(--color-primary)";
    } else if (kind === 2) {
      return "var(--gray-1)";
    } else {
      return "var(--gray-3)";
    }
  }};

  max-width: 350px;
  min-height: 40px;

  border: none;
  border-radius: 0.3rem;

  color: #ffffff;
  font-family: var(--font-family);
  cursor: pointer;

  :hover {
  }
`;
