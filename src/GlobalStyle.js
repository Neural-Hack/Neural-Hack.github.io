import { createGlobalStyle } from "styled-components";
import { Palette } from "./assets/Colors";

const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css2?family=Lexend&family=Montserrat:wght@700&display=swap');
        margin: 0;
        padding: 0;
        background: ${Palette.bg};
    }
`;

export default GlobalStyle