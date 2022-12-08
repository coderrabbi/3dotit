import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

const ToggleTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    // const [darkToggle, setDarkToggle] = useState(currentTheme);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const themeToggler = () => {
        if (currentTheme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
        console.log(theme);
    };
    return (
        <>
            <Switch
                onChange={() => themeToggler()}
                checked={theme === 'dark'}
                onLabel={<IconSun size={20} stroke={1.5} />}
                offLabel={<IconMoonStars size={20} stroke={1.5} />}
            />
        </>
    );
};

export default ToggleTheme;
