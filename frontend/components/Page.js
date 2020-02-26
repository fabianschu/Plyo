import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';
import theme from '../public/theme'

const Page = (props) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar/>
                <div theme={theme}>
                    {props.children}
                </div>
            </ThemeProvider>
        </>
    )
}

export default Page