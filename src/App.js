import React from 'react';
import './App.css';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import style from 'styled-theming';
import useTheme from './components/Theme/useTheme';
import DarkButton from './components/Theme/dark_theme_toggle';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const getBackground = style('mode',{
  light: '#fff',
  dark: '#3d3d3d'
});

const getForeground = style('mode',{
  light: '#3d3d3d',
  dark: '#fff'
});

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${getBackground};
  color: ${getForeground};
  transition: 0.5s ease;
}
a{
  color: ${getForeground};
}
`;


function App(){
  const theme = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div>
          <DarkButton />
          <Header />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;