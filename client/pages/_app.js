import '../styles/globals.css';
import Head from 'next/head';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
function MyApp(props) {
    const { Component, pageProps } = props;
    const [colorScheme, setColorScheme] = useState(props.colorScheme);

    const toggleColorScheme = (value) => {
        const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
        setColorScheme(nextColorScheme);
        // when color scheme is updated save it to cookie
        setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    };
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
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
                    colorScheme,
                    dark: [
                        '#d5d7e0',
                        '#acaebf',
                        '#8c8fa3',
                        '#666980',
                        '#4d4f66',
                        '#34354a',
                        '#1E293B',
                        '#1d1e30',
                        '#0c0d21',
                        '#01010a',
                    ],
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default MyApp;
MyApp.getInitialProps = ({ ctx }) => ({
    // get color scheme from cookie
    colorScheme: getCookie('mantine-color-scheme', ctx) || 'dark',
});
