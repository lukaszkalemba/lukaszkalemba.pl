import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import GlobalStyle from 'components/layout/GlobalStyle';
import Scrollbar from 'components/layout/Scrollbar';
import Nav from 'components/layout/Nav';
import Footer from 'components/layout/Footer';

const Layout = ({ isFooter, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Scrollbar>
          <Nav />
          <main>{children}</main>
          {isFooter && <Footer />}
        </Scrollbar>
      </ThemeProvider>
    </>
  );
};

Layout.defaultProps = {
  isFooter: true,
};

Layout.propTypes = {
  isFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Layout;
