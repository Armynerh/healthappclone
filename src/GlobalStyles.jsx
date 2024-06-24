import { Global, css } from '@emotion/react';


const globalStyles = css`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; /* Example: Setting a default font */
    /* Add any other global styles here */
  }
`;

const GlobalStyles = () => <Global styles={globalStyles} />;

export default GlobalStyles;