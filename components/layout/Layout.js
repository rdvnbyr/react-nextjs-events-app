import Footer from "./Footer";
import MainHeader from "./MainHeader";

function Layout({ children }) {
  return (
    <>
      <MainHeader />
      <main className="ui-main">{children}</main>
      <Footer/>
    </>
  );
}

export default Layout;
