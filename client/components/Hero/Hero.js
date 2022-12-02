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
} from "@mantine/core";
import Lottie from "lottie-react";
import heroImg from "../../public/assets/hero-image.json";
import heroImg3 from "../../public/assets/3dotit-hero-image3.json";
const Hero = () => {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  const useStyles = createStyles((theme) => ({
    card: {
      display: "flex",

      justifyContent: "space-between",
      alignItems: "flex-start",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

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
      <Paper shadow="md" p="xl" className={`${classes.card} `}>
        <div>
          <Text className={`${classes.category}`} size="xs">
            <h1>this is slider</h1>
          </Text>
          <Title order={3} className={`${classes.title}`}>
            {title}
          </Title>
          <Button variant="gradient" color="red">
            Read article
          </Button>
        </div>
        <div>
          <Lottie animationData={image} loop={true} className="h-[550px]" />;
        </div>
      </Paper>
    );
  }
  const data = [
    {
      image: heroImg,
      title: "Best forests to visit in North America",
      category: "nature",
    },
    {
      image: heroImg,
      title: "Hawaii beaches review: better than you think",
      category: "beach",
    },
    {
      image: heroImg3,
      title: "Mountains at night: 12 best locations to enjoy the view",
      category: "nature",
    },
    {
      image: heroImg,
      title: "Aurora in Norway: when to visit for best experience",
      category: "nature",
    },
    {
      image: heroImg,
      title: "Best places to visit this winter",
      category: "tourism",
    },
    {
      image: heroImg,
      title: "Active volcanos reviews: travel at your own risk",
      category: "nature",
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
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
};

export default Hero;
