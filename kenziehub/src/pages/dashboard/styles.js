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
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

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
  border-radius: 3rem;
  animation: 1.5s ${bounceLeft};
  text-align: center;

  .divTechs {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;

    button {
      width: 32px;
      height: 32px;

      background-color: var(--gray-3);
      border: none;
      border-radius: 0.3rem;

      color: #ffffff;
      font-family: var(--font-family);
      cursor: pointer;
    }
  }

  .divListaTechs {
    background-color: var(--gray-3);
    display: flex;
    height: 400px;
    border-radius: 0.5rem;
    align-items: center;

    ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90%;
      list-style: none;
      padding: 1rem;
      gap: 1rem;

      li {
        display: flex;
        justify-content: space-between;
        background-color: var(--gray-4);
        padding: 0.5rem;
        border-radius: 0.5rem;
        align-items: center;

        :hover {
          background-color: var(--gray-2);
          cursor: pointer;
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
        }
      }
    }
  }
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
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  h1 {
    color: var(--color-primary);
  }

  @media (min-width: 1024px) {
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const DashboardFooter = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 350px;
  padding: 1rem;
  border-top: 1px solid var(--gray-3);
  gap: 1rem;
  animation: 1.5s ${bounceLeft};
  text-align: center;
  background-color: var(--gray-3);
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  span {
    font-size: 1rem;
    color: var(--gray-1);
  }

  a {
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
  }

  .burguerKenzie {
    color: #27ae60;
  }

  .nuKenzie {
    color: #fd377e;
  }

  .imgFooter {
    width: 100%;
    height: 100px;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imgFooter img {
    width: 45%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.7rem;
  }
`;
