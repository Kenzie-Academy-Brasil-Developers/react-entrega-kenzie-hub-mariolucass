import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative:#59323F;

    --gray-0:#F8F9FA;
    --gray-1:#868E96;
    --gray-2:#343B41;
    --gray-3:#212529;
    --gray-4:#121214;

    --sucess: #3FE864;
    --error: #E83F5B;

    --font-family:'Inter', sans-serif;  
}

.Toastify__toast-container{
    width: 40%;
    max-width:250px;
  }

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background-color: #000000;
    background-image:url(/src/assets/wave.svg);
    width:100vw;
    height:100vh;
    font-family: var(--font-family);
}
`;

export default GlobalStyle;
