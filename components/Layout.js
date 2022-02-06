import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Globe from "./Globe";
import styles from "@styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      {router.pathname === "/" && <Globe />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Afrah Rayan 13",
  description: "Trouvez vos joix au Afrah Rayan Magazin",
  keywords: "afrah, rayan, oran, 31, patisserie",
};
