import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (
  <div className="bg-[#F3F7FB] min-h-[100vh] flex flex-col">
    <Header />
    <main className="grow">
      { props.children }
    </main>
    <Footer />
  </div>
);

export default Layout;