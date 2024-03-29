import { useState } from 'react';
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandLinkedin, IconBrandGithub } from '@tabler/icons';
import { IconSun, IconMoonStars } from '@tabler/icons';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    marginTop: '1rem',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,
    marginRight: theme.spacing.md,

    [theme.fn.smallerThan('sm')]: {
      marginRight: 0,
      paddingRight: 0,
      width: 100,
    },
  },

  logo: {
    width: 400,
    marginRight: theme.spacing.md,
    textAlign: 'center',
    lineHeight: '2rem',
    [theme.fn.smallerThan('sm')]: {
      width: 200,
      overflowWrap: 'break-word',
    },
  },

  toggle: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
      marginRight: 0,
    },
  },

  // burger: {
  //   marginRight: theme.spacing.md,

  //   [theme.fn.largerThan('sm')]: {
  //     display: 'none',
  //   },
  // },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  // linkActive: {
  //   '&, &:hover': {
  //     backgroundColor: theme.fn.variant({
  //       variant: 'light',
  //       color: theme.primaryColor,
  //     }).background,
  //     color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
  //       .color,
  //   },
  // },
}));

export default function Layout() {
  // const [opened, { toggle }] = useDisclosure(false);

  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  const { classes, cx } = useStyles();

  return (
    <Header height={81.5} zIndex={100}>
      <Container className={classes.inner}>
        {/* <Burger
          opened={opened}
          onClick={toggle}
          size='sm'
          className={classes.burger}
        /> */}
        <Group className={classes.links} spacing={5}>
          <ActionIcon
            component='a'
            href='https://www.linkedin.com/in/alexander-smith-bklyn/'
            target='_blank'
            rel='noopener noreferrer'
            size='lg'
          >
            <IconBrandLinkedin size={25} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://github.com/lapsangsouchy'
            target='_blank'
            rel='noopener noreferrer'
            size='lg'
          >
            <IconBrandGithub size={25} stroke={1.5} />
          </ActionIcon>
        </Group>

        <Link href='/' className={classes.logo}>
          <h1>Alexander Lee Smith</h1>
        </Link>

        <Group spacing={0} className={classes.toggle} position='right' noWrap>
          <ActionIcon
            variant='outline'
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title='Toggle color scheme'
          >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}
