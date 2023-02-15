import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import agrotisLogo from '../../assets/agrotis-logo.jpg';
import { Content, EditHeader } from './styles';
import { Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
  const theme = createTheme();
  const logo = agrotisLogo;

  return (
    <ThemeProvider theme={theme}>
      <header>
        <AppBar
          position="absolute"
          color="inherit"
          elevation={1}
          sx={{
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <EditHeader>
              <img alt="logo" src={logo} />
              <strong className="title">AGROTIS</strong>
            </EditHeader>
          </Toolbar>
        </AppBar>
      </header>
      <Box height="100vh" bgcolor="#f3f2f0">
        <Content>
          <Outlet />
        </Content>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
