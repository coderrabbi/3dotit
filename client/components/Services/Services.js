import { createStyles, Text, SimpleGrid, Container } from '@mantine/core';
import { IconTruck, IconCertificate, IconCoin, TablerIcon } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: 62,
        fontWeight: 900,
        lineHeight: 1.1,
        margin: 0,
        padding: 0,
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
    feature: {
        position: 'relative',
        paddingTop: theme.spacing.xl,
        paddingLeft: theme.spacing.xl,
    },

    overlay: {
        position: 'absolute',
        height: 100,
        width: 160,
        top: 0,
        left: 0,
        zIndex: 1,
    },

    content: {
        position: 'relative',
        zIndex: 2,
    },

    icon: {
        color: theme.fn.variant({ variant: 'light', color: '#15a59a' }).color,
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
}));

function Feature({ icon: Icon, title, description, className, ...others }) {
    const { classes, cx } = useStyles();

    return (
        <div className={cx(classes.feature, className)} {...others}>
            <div className={`${classes.overlay} bg-[#da8825] opacity-50`} />

            <div className={classes.content}>
                <Icon size={38} className="text-[#15a59a] " stroke={1.5} />
                <Text weight={700} size="lg" mb="xs" mt={5} className={classes.title}>
                    {title}
                </Text>
                <Text color="dimmed" size="sm">
                    {description}
                </Text>
            </div>
        </div>
    );
}

const mockdata = [
    {
        icon: IconTruck,
        title: 'Free Worldwide shipping',
        description:
            'As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.',
    },
    {
        icon: IconCertificate,
        title: 'Best Quality Product',
        description:
            'Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.',
    },
    {
        icon: IconCoin,
        title: 'Very Affordable Pricing',
        description:
            'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
    },
    {
        icon: IconCoin,
        title: 'Very Affordable Pricing',
        description:
            'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
    },
    {
        icon: IconCoin,
        title: 'Very Affordable Pricing',
        description:
            'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
    },
    {
        icon: IconCoin,
        title: 'Very Affordable Pricing',
        description:
            'Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.',
    },
];

export function Services() {
    const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

    return (
        <Container className="dark:bg-slate-700 dark:text-white" mt={30} mb={30} size="lg">
            <h1 className={`text-blue-500 font-bold md:text-[80px] text-[32px] text-center mb-10`}>
                <Text
                    component="span"
                    variant="gradient"
                    gradient={{ from: '#fc4a1a', to: '#f7b733' }}
                    inherit
                >
                    Our Services
                </Text>{' '}
            </h1>

            <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={50}>
                {items}
            </SimpleGrid>
        </Container>
    );
}
