import '../styles/globals.css';
import Head from 'next/head';
import { getCookie, setCookie } from 'cookies-next';
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
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

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    /** Put your mantine theme override here */
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                }}
            >
                <Component {...pageProps} />
            </MantineProvider>
        </ThemeProvider>
    );
}

export default MyApp;
