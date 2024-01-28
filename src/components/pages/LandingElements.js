import styled from 'styled-components'

export const TitlePage = styled.ul`
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
`;

export const MainTitle = styled.li`
    color: #FFF;
    letter-spacing: 3px;
    font-size: 40px;
    display: block;
    //font-family: 'Montserrat', sans-serif;
`;

export const Div = styled.div`
    background-color: #000;
    height: 100%;
    width: 100%;
    margin: -10px;
    padding: 0;
`;