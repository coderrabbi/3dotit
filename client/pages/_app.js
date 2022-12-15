import '../styles/globals.css';
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
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

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
