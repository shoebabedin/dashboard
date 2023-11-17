import PropTypes from 'prop-types';
// import { useMemo } from 'react';

// material-ui
// import { useTheme } from '@mui/material/styles';
// import { Box, Drawer, useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';

// project import
// import DrawerHeader from './DrawerHeader';
// import DrawerContent from './DrawerContent';
import MiniDrawerStyled from './MiniDrawerStyled';
// import { drawerWidth } from 'config';
import { Link, NavLink } from 'react-router-dom';

import logo from './../../../assets/images/images/logo.svg';
import downArrow from './../../../assets/images/images/down-arrow.svg';

// ==============================|| MAIN LAYOUT - DRAWER ||============================== //

const MainDrawer = () => {
  // const theme = useTheme();
  // const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  // responsive drawer container
  // const container = window !== undefined ? () => window().document.body : undefined;

  // header content
  // const drawerContent = useMemo(() => <DrawerContent />, []);
  // const drawerHeader = useMemo(() => <DrawerHeader open={open} />, [open]);

  return (
    <Box component="nav" sx={{ flexShrink: { md: 0 }, zIndex: 1300 }} aria-label="mailbox folders">
      {/* {!matchDownMD ? (
        <MiniDrawerStyled variant="permanent" open={open}>
          {drawerHeader}
          {drawerContent}
        </MiniDrawerStyled>
      ) : (
        <Drawer
          container={container}
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              borderRight: `1px solid ${theme.palette.divider}`,
              backgroundImage: 'none',
              boxShadow: 'inherit'
            }
          }}
        >
          {drawerHeader}
          {drawerContent}
        </Drawer>
      )} */}
      <MiniDrawerStyled variant="permanent" open={true}>
        <div className="dash_left_bar_area oflow-hd">
          <div className="dash_left_bar">
            <div className="dash_left_bar_logo oflow-hd">
              <Link to="">
                {/* <img src={require("images/logo.svg")} alt="img" /> */}
                <img src={logo} alt="img" />
              </Link>
              <button className="mobile_menu_close">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_535_2)">
                    <path
                      d="M0.976745 20.0001C0.783573 20.0002 0.594729 19.9429 0.434101 19.8356C0.273472 19.7283 0.148276 19.5758 0.074347 19.3973C0.000418327 19.2188 -0.0189212 19.0225 0.0187748 18.833C0.0564707 18.6435 0.149509 18.4695 0.28612 18.3329L18.333 0.286066C18.5162 0.102901 18.7646 0 19.0236 0C19.2827 0 19.5311 0.102901 19.7142 0.286066C19.8974 0.469231 20.0003 0.717657 20.0003 0.976691C20.0003 1.23573 19.8974 1.48415 19.7142 1.66732L1.66737 19.7142C1.57676 19.805 1.4691 19.877 1.35058 19.9261C1.23207 19.9751 1.10502 20.0003 0.976745 20.0001Z"
                      fill="black"
                    />
                    <path
                      d="M19.0236 20.0001C18.8953 20.0003 18.7682 19.9751 18.6497 19.9261C18.5312 19.877 18.4236 19.805 18.3329 19.7142L0.286066 1.66732C0.102901 1.48415 0 1.23573 0 0.976691C0 0.717657 0.102901 0.469231 0.286066 0.286066C0.469231 0.102901 0.717657 0 0.976691 0C1.23573 0 1.48415 0.102901 1.66732 0.286066L19.7142 18.3329C19.8508 18.4695 19.9438 18.6435 19.9815 18.833C20.0192 19.0225 19.9999 19.2188 19.926 19.3973C19.852 19.5758 19.7268 19.7283 19.5662 19.8356C19.4056 19.9429 19.2167 20.0002 19.0236 20.0001Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_535_2">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div className="dash_left_bar_menu oflow-hd">
              <ul>
                <li className="menu_active">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li className="has_dropdown">
                  <Link to="#">
                    Create Events
                    <img src={downArrow} alt="img" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="">Create Events</Link>
                    </li>
                    <li>
                      <Link to="">Draft</Link>
                    </li>
                    <li>
                      <Link to="">Submitted for Review</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="">Manage Events</Link>
                </li>
                <li className="has_dropdown">
                  <Link to="#">
                    Ticketing & Registration
                    <img src={downArrow} alt="img" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="">Create Ticket</Link>
                    </li>
                    <li>
                      <Link to="">Dashboard</Link>
                    </li>
                    <li>
                      <Link to="">Update Ticket</Link>
                    </li>
                    <li>
                      <Link to="">Promotion & Discount</Link>
                    </li>
                    <li>
                      <Link to="">Privilege Tickets</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="">Company Information</Link>
                </li>
                <li className="has_dropdown">
                  <Link to="#">
                    Setting and Privacy
                    <img src={downArrow} alt="img" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="">Users and Roles</Link>
                    </li>
                    <li>
                      <Link to="">Password</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MiniDrawerStyled>
    </Box>
  );
};

MainDrawer.propTypes = {
  open: PropTypes.bool,
  window: PropTypes.object,
  handleDrawerToggle: PropTypes.func
};

export default MainDrawer;
