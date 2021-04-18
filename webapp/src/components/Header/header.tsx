/* eslint-disable react/jsx-key */
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { uuid } from 'uuidv4';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
const headersData = [
  {
    key: uuid(),
    label: 'Home',
    href: '/',
  },
  {
    key: uuid(),
    label: 'Register',
    href: '/register/User',
  },
  {
    key: uuid(),
    label: 'Login',
    href: '/login',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#400CCC',
    paddingRight: '79px',
    paddingLeft: '118px',
  },
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left',
  },
  menuButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    marginLeft: '75px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
export default function Header(): JSX.Element {
  const { header, logo, menuButton, toolbar } = useStyles();
  const display = () => {
    return (
      <Toolbar className={toolbar}>
        {customLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };
  const customLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Logo
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ key, label, href }) => {
      return (
        <Button
          {...{
            key: key,
            color: 'inherit',
            to: href,
            component: RouterLink,
            className: menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return <AppBar className={header}>{display()}</AppBar>;
}
