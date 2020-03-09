import Head from 'next/head';
import ApplicationListView from '../components/ApplicationListView';
import {applications} from '../public/mock-data';


const Home = (applications) => {
  
  console.log(applications);
  
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

Home.getInitialProps = async ctx => {
  console.log('stuff happening')
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  return applications;
}

export default Home
