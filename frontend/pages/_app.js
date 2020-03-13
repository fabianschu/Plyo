import App from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from '../redux/store';

//import component 'App' from next, which will be extended
class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props;
        return(
            <Provider store={store}>
                {/* <Page {...pageProps}> */}
                    <CssBaseline/>  
                    <Component {...pageProps}/>
                {/* </Page> */}
            </Provider>
        )
    }
}

export default MyApp;