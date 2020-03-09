import Head from 'next/head';
import ApplicationListView from '../components/ApplicationListView';

const Home = () => {
  
  return (
    <div className="container" >
      <Head>
        <title>Plyo</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
      </Head>
      <ApplicationListView/>
    </div>
  )
}

export default Home
