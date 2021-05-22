import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  
  return (
    <div>
      <NavBar />
      <div style={{marginTop: '150px'}}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;