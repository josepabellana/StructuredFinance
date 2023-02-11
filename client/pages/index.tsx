import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>FinanceSQL</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>
            II<span>II</span>
            <span className="bold">FINANCE </span>SQL
            <span className={styles.trademark}>TM</span>{" "}
          </h1>
          <h2>
					Get Financial Information for FREE
	        </h2>
          <button className={styles.button_login}> Login</button>
        </div>
        <div className={styles.description}>
          
          <h2>Prompt your SQL</h2>
        </div>

        
      </main>
    </>
  );
}
