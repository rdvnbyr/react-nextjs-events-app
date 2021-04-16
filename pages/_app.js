import "../styles/globals.css";
import '../styles/general-styles.css';
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
