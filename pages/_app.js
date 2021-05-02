import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS RESET */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
 
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after, q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
 
  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

html {
  font-family: 'Roboto', sans-serif;

  height: 100%
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

  body {
    height: 100%;
  }

  #__next {
    height: 100%;
  }
`;

const theme = {
  colors: {
    primary: {
      main: 'hsl(33deg 99% 50%)',
      dark: 'hsl(33deg 99% 40%)',
      darker: 'hsl(33deg 99% 33%)',
      text: 'hsl(0deg 0% 100%)',
    },
    secondary: {
      main: 'hsl(68deg 90% 43%)',
      dark: 'hsl(68deg 90% 30%)',
      darker: 'hsl(68deg 90% 20%)',
      text: 'hsl(0deg 0% 100%)',
    },
    accent: 'hsl(8deg 89% 65%)',
    dark: 'hsl(32deg 32% 10%)',
    gray50: 'hsl(0deg 0% 95%)',
    gray300: 'hsl(0deg 0% 75%)',
    gray500: 'hsl(0deg 0% 50%)',
    gray700: 'hsl(0deg 0% 40%)',
    black: 'hsl(0deg 0% 0%)',
    transparentGray15: 'hsl(0deg 0% 50% / 0.15)',
    transparentGray35: 'hsl(0deg 0% 50% / 0.35)',
  },
};

function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
