import styled from "styled-components";
import { bounceDown, bounceLeft } from "../../styles/animations";

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
  border-top: 1px solid var(--gray-3);
  border-bottom: 1px solid var(--gray-3);
  gap: 1rem;
  animation: 1.5s ${bounceLeft};
  text-align: center;
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
  border-top: 1px solid var(--gray-3);
  gap: 1rem;
  animation: 1.5s ${bounceLeft};
  text-align: center;
`;

export const DashboardHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid var(--gray-3);
  border-radius: 1rem;
  animation: 1.5s ${bounceDown};

  h1 {
    color: var(--color-primary);
  }
`;
