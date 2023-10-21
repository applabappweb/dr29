import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
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
      {/* {router.pathname === "/" && <></>} */}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Dr. Mohammed Kamel Gouizi",
  description: "Trouvez votre santé avec le Dr. Mohammed Kamel Gouizi",
  keywords: "docteur, gouizi, mascara, 29, santé",
};
