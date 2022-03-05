import Head from "next/head";
import Header from "../Header";
import BottomNav from "../BottomNav";
import Footer from "../Footer";


const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <BottomNav />
      <Footer />
    </>
  );
};

export default Layout;
