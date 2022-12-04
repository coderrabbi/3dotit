import React from "react";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Box,
  Container,
} from "@mantine/core";

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
      textTransform: "uppercase",
    },
  }));
  function Card({ image, title, category }) {
    const { classes } = useStyles();

    return (
      <Paper
        className={` md:flex-row flex flex-col gap-10 justify-around items-center mt-10 lg:py-36 py-5 md:px-28 px-6`}
      >
        <div className="flex-1 flex flex-col gap-8">
          <Text className={`${classes.category}`} size="xs">
            <h1>{category}</h1>
          </Text>
          <Title order={3} className={`${classes.title}`}>
            {title}
          </Title>
          <div className="flex gap-4">
            <Button variant="default" color="red">
              Explore Services
            </Button>
            <Button
              color="orange"
              variant="filled"
              className="text-white bg-orange-500"
            >
              Contact Us
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center  ">
          <img
            src={image}
            alt={title}
            className="md:w-[100%] w-[70%] h-[100%]  "
          />
        </div>
      </Paper>
    );
  }
  const data = [
    {
      image: "/assets/3Dotit_personal_text.svg",
      title: "Best forests to visit in North America",
      category: "nature",
    },
    {
      image: "/assets/3Sotit-slider1.svg",
      title: "Hawaii beaches review: better than you think",
      category: "beach",
    },
    {
      image: "/assets/3Dotit_work_togather.svg",
      title: "Hawaii beaches review: better than you think",
      category: "beach",
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
      sx={{ maxWidth: "100%" }}
      mx="auto"
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
      slideGap={1}
      align="start"
      slidesToScroll={mobile && 1}
    >
      {slides}
    </Carousel>
  );
};

export default Hero;
