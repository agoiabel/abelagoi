import React from 'react';
import Themes from '../theme';
import GlobalStyle from '../global_style';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }) {

  //white, green
  const [theme, setTheme] = React.useState('green');


  return (
    <>
      <ThemeProvider theme={Themes[theme]}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
