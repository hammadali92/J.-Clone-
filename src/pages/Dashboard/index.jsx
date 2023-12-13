import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import AdminProducts from '../../components/AdminProducts';
import Table from '../../components/Table';

  const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState(<AdminProducts />);
  
    const handleNavigationClick = (component) => {
      setActiveComponent(component);
    };

  return (
    <>
      <div style={{ background: "#D5DBDB" }}>
        <div className="text-center">
          <h4 className="fw-bold pt-4">Dashboard</h4>
        </div>

        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#preNavMenu"
              aria-controls="preNavMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="preNavMenu">
              <ul
                className="navbar-nav mx-auto mb-2 mb-lg-0"
                style={{ paddingRight: "40px" }}
              >
                  <li
                  className="nav-item px-4 hover-effect"
                  onClick={() => handleNavigationClick(<AdminProducts />)}
                >
                  <i className="fa-solid fa-tag"></i> Products
                </li>
                <li
                  className="nav-item px-4 hover-effect"
                  onClick={() => handleNavigationClick(null)}
                >
                  <Link to="/MainPage" className="hover-effect">
                    <i className="fa-solid fa-house"></i> Home
                  </Link>
                </li>
                <li
                  className="nav-item px-4 hover-effect"
                  onClick={() => handleNavigationClick(<Table />)}
                >
                  <i className="fa-solid fa-user"></i> Users
                </li>
              
                <li
                  className="nav-item px-4 hover-effect"
                  onClick={() => handleNavigationClick(null)}
                >
                  <i className="fa-solid fa-universal-access"></i> Sales
                </li>
                <li
                  className="nav-item px-4 hover-effect"
                  onClick={() => handleNavigationClick(null)}
                >
                  <i className="fa-brands fa-first-order"></i> Orders
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div>{activeComponent}</div>
    </>
  );
};

export default Dashboard;



// import React, { useState } from 'react';
// import Container from '@mui/material/Container';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Group, Home, QueryStats } from '@mui/icons-material';
// import SellIcon from '@mui/icons-material/Sell';
// import Table from '../../components/Table';
// import AdminProducts from '../../components/AdminProducts';
// import { Link } from 'react-router-dom';
// const drawerWidth = 240;

// export default function Dashboard() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [displayComponent, setDisplayComponent] = useState(null);
//   const [activeTab, setActiveTab] = useState(''); // To track the active tab

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleProductsClick = () => {
//     if (activeTab !== 'Products') {
//       setDisplayComponent(<AdminProducts />);
//       setActiveTab('Products');
//     } else {
//       setDisplayComponent(null);
//       setActiveTab('');
//     }
//   };

//   const handleUsersClick = () => {
//     if (activeTab !== 'Users') {
//       setDisplayComponent(<Table />);
//       setActiveTab('Users');
//     } else {
//       setDisplayComponent(null);
//       setActiveTab('');
//     }
//   };

//   const drawer = (
//     <div>
       
//       <Toolbar />
//       <Divider />
//       <List>
//       <ListItem disablePadding>
//           <ListItemButton>
           
//           <div class="text-center">
//     <Link to="/MainPage"><img style={{height:" 8vh"}} src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png" alt="" /></Link>
// </div>    
//           </ListItemButton>
//         </ListItem>
//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <Home />
//             </ListItemIcon>
//      <Link to="/MainPage"><ListItemText>Home</ListItemText></Link>     
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <SellIcon />
//             </ListItemIcon>
//             <ListItemText>Orders</ListItemText>
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding onClick={handleProductsClick}>
//           <ListItemButton>
//             <ListItemIcon>
//               <Home />
//             </ListItemIcon>
//             <ListItemText>Products</ListItemText>
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding onClick={handleUsersClick}>
//           <ListItemButton>
//             <ListItemIcon>
//               <Group />
//             </ListItemIcon>
//             <ListItemText>Users</ListItemText>
//           </ListItemButton>
//         </ListItem>

//         <ListItem disablePadding>
//           <ListItemButton>
//             <ListItemIcon>
//               <QueryStats />
//             </ListItemIcon>
//             <ListItemText>Sales Report</ListItemText>
//           </ListItemButton>
//         </ListItem>
//       </List>
//     </div>
//   );

//   return (
//     <Container sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//           },
//         }}
//         open
//       >
//         {drawer}
//       </Drawer>
//       <main
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: `calc(100% - ${drawerWidth}px)`,
//         }}
//       >
//         <Toolbar />
//         {displayComponent}
//       </main>
//     </Container>
//   );
// }
