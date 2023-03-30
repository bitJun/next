import Layout from '../components/layout';
import "@arco-design/web-react/dist/css/arco.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}