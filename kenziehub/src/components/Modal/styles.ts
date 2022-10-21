import styled from "styled-components";

export const BackgroundModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);

  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 400px;
    height: 300px;
    background-color: var(--gray-4);
    align-items: center;
    border-radius: 0.5rem;
  }

  .headModal {
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: var(--gray-3);
    padding: 1rem;
    border-radius: 0.5rem;

    button {
      background-color: var(--gray-3);
      border: none;
      border-radius: 0.3rem;

      color: #ffffff;
      font-family: var(--font-family);
      cursor: pointer;
    }
  }
`;
