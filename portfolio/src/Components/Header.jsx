import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Home, Work, Mail } from '@mui/icons-material';
import styles from './Header.module.css';

function Header() {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Typography variant="h6" component="div" className={styles.title}>
          My Portfolio
        </Typography>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <IconButton component={Link} to="/" color="inherit">
                <Home />
              </IconButton>
              <Typography variant="body2" color="inherit" component={Link} to="/">
                Home
              </Typography>
            </li>
            <li>
              <IconButton component={Link} to="/projects" color="inherit">
                <Work />
              </IconButton>
              <Typography variant="body2" color="inherit" component={Link} to="/projects">
                Projects
              </Typography>
            </li>
            <li>
              <IconButton component={Link} to="/contact" color="inherit">
                <Mail />
              </IconButton>
              <Typography variant="body2" color="inherit" component={Link} to="/contact">
                Contact
              </Typography>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
