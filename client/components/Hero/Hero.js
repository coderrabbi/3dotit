import React from 'react';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {
    createStyles,
    Paper,
    Text,
    Title,
    Button,
    useMantineTheme,
    Box,
    Container,
} from '@mantine/core';

const Hero = () => {
    const autoplay = useRef(Autoplay({ delay: 20000 }));
    const useStyles = createStyles((theme) => ({
        title: {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
            color: theme.dark,
            lineHeight: 1.2,
            fontSize: 32,
            marginTop: theme.spacing.xs,
        },

        category: {
            color: theme.dark,
            opacity: 0.7,
            fontWeight: 700,
            textTransform: 'uppercase',
        },
    }));
    function Card({ image, title, category }) {
        const { classes } = useStyles();

        return (
            <Paper className={` flex justify-around items-center mt-10 py-36`}>
                <div>
                    <Text className={`${classes.category}`} size="xs">
                        <h1>{category}</h1>
                    </Text>
                    <Title order={3} className={`${classes.title} w-1/2`}>
                        {title}
                    </Title>
                    <Button variant="gradient" color="red">
                        Read article
                    </Button>
                </div>
                <div>
                    <img src={image} alt={title} className="w-[400px]" />
                </div>
            </Paper>
        );
    }
    const data = [
        {
            image: '/assets/3Dotit_personal_text.svg',
            title: 'Best forests to visit in North America',
            category: 'nature',
        },
        {
            image: '/assets/3Sotit-slider1.svg',
            title: 'Hawaii beaches review: better than you think',
            category: 'beach',
        },
    ];

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            sx={{ maxWidth: '100%' }}
            mx="auto"
            withIndicators
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
            slideGap={1}
            align="start"
            slidesToScroll={mobile && 1}
        >
            {slides}
        </Carousel>
    );
};

export default Hero;
