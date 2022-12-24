import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/Layout/Layout';
import { useEffect } from 'react';
import AuthProvider from '../context/AuthProvider';
import { store } from '../redux/store';
function MyApp(props) {
    const {
        Component,
        pageProps: { session, ...pageProps },
    } = props;
    useEffect(() => {
        const use = async () => {
            (await import('tw-elements')).default;
        };
        use();
    }, []);
    return (
        <Provider store={store}>
            <AuthProvider>
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
            </AuthProvider>
        </Provider>
    );
}

export default MyApp;
