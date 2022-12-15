import Head from 'next/head';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import Loader from '../components/Common/Loader/Loader';

export default function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        Router.events.on('routeChangeStart', () => setLoading(true));
        Router.events.on('routeChangeComplete', () => setLoading(false));
        Router.events.on('routeChangeError', () => setLoading(false));
        return () => {
            Router.events.off('routeChangeStart', () => setLoading(true));
            Router.events.off('routeChangeComplete', () => setLoading(false));
            Router.events.off('routeChangeError', () => setLoading(false));
        };
    }, [Router.events]);
    return (
        <div>
            <Head>
                <title>3DotIt | A unique web solution</title>
                <meta name="description" content="3DotIt a Digital web Service Provider" />
                <link rel="icon" href="/assets/3dotit.svg" />
            </Head>
            {loading ? <Loader /> : <HomeScreen />}
        </div>
    );
}
