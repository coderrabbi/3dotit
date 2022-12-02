import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

function MyApp({ Component, pageProps }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Head>
                <title>Page title</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                    colorScheme: 'light',
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </AnimatePresence>
    );
}

export default MyApp;
