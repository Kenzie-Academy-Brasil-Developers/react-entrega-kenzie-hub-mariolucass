import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #ffffff;
`;

export const DashboardWelcome = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 120px;
  padding: 1rem;
  border: 1px solid var(--gray-3);
  border-radius: 0.5rem;
  gap: 1rem;

  span {
    font-size: 1rem;
    color: var(--gray-1);
  }
`;

export const DashboardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 200px;
  padding: 1rem;
  border: 1px solid var(--gray-3);
  border-radius: 0.5rem;
  gap: 1rem;
`;

export const DashboardHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid var(--gray-3);

  h1 {
    color: var(--color-primary);
  }
`;
