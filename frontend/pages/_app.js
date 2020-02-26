import App from 'next/app';
import Page from '../components/Page';
import CssBaseline from '@material-ui/core/CssBaseline';

//import component 'App' from next, which will be extended
class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return(
            <Page {...pageProps}>
                <CssBaseline/>  
                <Component {...pageProps}/>
            </Page>
        )
    }
}

export default MyApp;