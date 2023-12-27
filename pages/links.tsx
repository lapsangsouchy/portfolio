import Head from 'next/head';
import styles from '../styles/index.module.css';
import { getDatabase, getMeta } from '../lib/notion';

import {
  SimpleGrid,
  Container,
  Title,
  Group,
  Button,
  createStyles,
  Card,
  Flex,
  Center,
} from '@mantine/core';
import Image from 'next/image';
import monkee from '../public/monkee.jpeg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.sm,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  content: {
    maxWidth: 480,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },

  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },

    width: '100%',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

export default function Links({ posts, meta }: { posts: any; meta: any }) {
  const { classes } = useStyles();
  return (
    <div>
      <Head>
        <title>Alexander Lee Smith</title>
        <meta property='og:url' content='https://www.alexanderleesmith.com/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Alexander Lee Smith | Portfolio' />
        <meta property='og:image' content={'/me.jpg'} />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌺</text></svg>'
        />
      </Head>

      <Container>
        <div className={classes.inner}>
          <Title className={classes.title}>Links</Title>
        </div>
      </Container>

      <main className={styles.container}>
        <Flex
          py='lg'
          gap='md'
          justify='center'
          align='center'
          direction='column'
        >
          <Card p='md' radius='md' className={classes.card}>
            <a href='https://www.goodreads.com/aleenyc'>Goodreads</a>
          </Card>
          <Card p='md' radius='md' className={classes.card}>
            <a href='https://boxd.it/1jFcZ'>Letterboxd</a>
          </Card>
          <Card p='md' radius='md' className={classes.card}>
            <a href='mailto:aleesmithnyc@gmail.com'>
              aleesmithnyc@gmail.com 📮
            </a>
          </Card>
        </Flex>
        <Center mb='sm'>
          <a href='https://youtu.be/nhjIWDdXpAU?si=_dxSajhSaMPrnaJy'>
            <Image
              style={{ borderRadius: '8px' }}
              alt='hehehe'
              src={monkee}
              height={500}
              width={350}
              placeholder='blur'
            />
          </a>
        </Center>
      </main>
    </div>
  );
}
