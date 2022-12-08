import '../styles/globals.css';
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';
function MyApp(props) {
    const { Component, pageProps } = props;

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <Head>
                <title>3DotIt</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
