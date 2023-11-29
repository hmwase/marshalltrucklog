 "use client";
// import React from "react";
// import Link from "next/link";
// import styles from "./navbar.module.css";


// const links = [
//     {
//         id: 1,
//         title: "Home",
//         url:"/",
//     },
//     {
//         id: 2,
//         title: "Stripping Out",
//         url: "/strippingout"
//     },
//     {
//         id: 3,
//         title: "Loading",
//         url: "/loading"
//     }
// ]

// const Navbar = () => {
//     return (
//         <div className={styles.container}>
//             <Link href="/" className={styles.logo}>
//                 Marshall Trucking Log
//             </Link>
//             <div className={styles.links}>
//                 {links.map((link) => (
//                     <Link key={link.id} href={link.url} className={styles.link}>
//                         {link.title}
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default Navbar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">Marshall Truck Log</Link>
          </Typography>
          <Button color="inherit"><Link href="/dashboard">Dashboard</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}