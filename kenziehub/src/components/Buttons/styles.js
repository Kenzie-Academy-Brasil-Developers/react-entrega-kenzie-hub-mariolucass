import styled from "styled-components";

export const ButtonPrimario = styled.button`
  width: ${(props) => (props.tipo !== 3 ? "100%" : "80px")};
  max-width: 350px;
  height: 40px;

  background-color: ${(props) => {
    if (props.tipo === 1) {
      return "var(--color-primary)";
    } else if (props.tipo === 2) {
      return "var(--gray-1)";
    } else {
      return "var(--gray-3)";
    }
  }};

  border: none;
  border-radius: 0.3rem;

  color: #ffffff;
  font-family: var(--font-family);
  cursor: pointer;

  :hover {
  }
`;
