import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Router from 'next/router';

export default function Home() {
  // setup to redirect the tasks page
  const redirectToMain = () => {
    Router.push('/main');
  };
  useEffect(() => {
    redirectToMain();
  }, []);
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="main_wrap"></div>
      </main> */}
    </>
  );
}
