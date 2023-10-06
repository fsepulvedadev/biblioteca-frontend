import Footer from "./Footer";
import NavbarSimple from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSimple />

      {children}

      <Footer />
    </>
  );
};

export default Layout;
