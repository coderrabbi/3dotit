// import {
//     ThemeIcon,
//     Text,
//     Title,
//     Container,
//     SimpleGrid,
//     useMantineTheme,
//     createStyles,
// } from '@mantine/core';
// import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, TablerIcon } from '@tabler/icons';

// export const MOCKDATA = [
//     {
//         icon: IconGauge,
//         title: 'Extreme performance',
//         description:
//             'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
//     },
//     {
//         icon: IconUser,
//         title: 'Privacy focused',
//         description:
//             'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
//     },
//     {
//         icon: IconCookie,
//         title: 'No third parties',
//         description:
//             'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
//     },
//     {
//         icon: IconLock,
//         title: 'Secure by default',
//         description:
//             'Although it still can’t fly, its jumping power is outstanding, in Alola the mushrooms on Paras don’t grow up quite right',
//     },
//     {
//         icon: IconMessage2,
//         title: '24/7 Support',
//         description:
//             'Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail',
//     },
// ];

// export function Feature({ icon: Icon, title, description }) {
//     const theme = useMantineTheme();
//     return (
//         <div>
//             <ThemeIcon variant="light" size={40} radius={40}>
//                 <Icon size={20} stroke={1.5} />
//             </ThemeIcon>
//             <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
//             <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
//                 {description}
//             </Text>
//         </div>
//     );
// }

// const useStyles = createStyles((theme) => ({
//     wrapper: {
//         paddingTop: theme.spacing.xl * 4,
//         paddingBottom: theme.spacing.xl * 4,
//     },

//     title: {
//         fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//         fontWeight: 900,
//         marginBottom: theme.spacing.md,
//         textAlign: 'center',

//         [theme.fn.smallerThan('sm')]: {
//             fontSize: 28,
//             textAlign: 'left',
//         },
//     },

//     description: {
//         textAlign: 'center',

//         [theme.fn.smallerThan('sm')]: {
//             textAlign: 'left',
//         },
//     },
// }));

// export function FeaturesGrid({ title, description, data = MOCKDATA }) {
//     const { classes, theme } = useStyles();
//     const features = data.map((feature, index) => <Feature {...feature} key={index} />);

//     return (
//         <Container className={classes.wrapper}>
//             <Title className={classes.title}>{title}</Title>

//             <Container size={560} p={0}>
//                 <Text size="sm" className={classes.description}>
//                     {description}
//                 </Text>
//             </Container>

//             <SimpleGrid
//                 mt={60}
//                 cols={3}
//                 spacing={theme.spacing.xl * 2}
//                 breakpoints={[
//                     { maxWidth: 980, cols: 2, spacing: 'xl' },
//                     { maxWidth: 755, cols: 1, spacing: 'xl' },
//                 ]}
//             >
//                 {features}
//             </SimpleGrid>
//         </Container>
//     );
// }

import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: `${theme.spacing.xl * 2}px ${theme.spacing.xl}px`,
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1.1,
        marginBottom: theme.spacing.md,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

const featuresData = [
    {
        icon: IconReceiptOff,
        title: 'Free and open source',
        description:
            'All packages are published under MIT license, you can use Mantine in any project',
    },
    {
        icon: IconFileCode,
        title: 'TypeScript based',
        description: 'Build type safe applications, all components and hooks export types',
    },
    {
        icon: IconCircleDotted,
        title: 'No annoying focus ring',
        description:
            'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
    },
    {
        icon: IconFlame,
        title: 'Flexible',
        description:
            'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
    },
];

export function Features() {
    const { classes } = useStyles();

    const items = featuresData.map((feature) => (
        <div key={feature.title}>
            <ThemeIcon
                size={44}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
            >
                <feature.icon size={26} stroke={1.5} />
            </ThemeIcon>
            <Text size="lg" mt="sm" weight={500}>
                {feature.title}
            </Text>
            <Text color="dimmed" size="sm">
                {feature.description}
            </Text>
        </div>
    ));

    return (
        <div className={classes.wrapper}>
            <Title className="text-center py-10">Services That We Provide</Title>
            <Grid gutter={80}>
                <Col span={12} md={5}>
                    <Title className={classes.title} order={2}>
                        A fully featured React components library for your next project
                    </Title>
                    <Text color="dimmed">
                        Build fully functional accessible web applications faster than ever –
                        Mantine includes more than 120 customizable components and hooks to cover
                        you in any situation
                    </Text>

                    <Button
                        variant="gradient"
                        gradient={{ deg: 133, from: 'blue', to: 'cyan' }}
                        size="lg"
                        radius="md"
                        mt="xl"
                    >
                        Get started
                    </Button>
                </Col>
                <Col span={12} md={7}>
                    <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
                        {items}
                    </SimpleGrid>
                </Col>
            </Grid>
        </div>
    );
}
