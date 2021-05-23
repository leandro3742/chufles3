import React from 'react';

import NavBar from './Navbar';
import Footer from './Footer';

function Layout(props) {
  
  return (
    <div>
      <NavBar />
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;