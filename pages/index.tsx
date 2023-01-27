import Head from 'next/head';
import styles from '../styles/index.module.css';
import { getDatabase, getMeta } from '../lib/notion';
import PostCard from '../components/PostCard';
import {
  SimpleGrid,
  Container,
  Title,
  Group,
  Button,
  createStyles,
  // Image,
} from '@mantine/core';
import Image from 'next/image';
import profilePic from '../public/me.jpg';

export const databaseId: string = process.env.NOTION_BLOG_DATABASE_ID;

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.sm * 4,
    paddingBottom: theme.spacing.xl * 4,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
      marginBottom: '2rem',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 40,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      order: 2,
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
}));

export default function Home({ posts, meta }: { posts: any; meta: any }) {
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
          <Container size={500} className={classes.image}>
            <Image
              style={{ borderRadius: '8px' }}
              alt='Alex Smith Headshot'
              src={profilePic}
              height={500}
              width={350}
              placeholder='blur'
            />
          </Container>
          <div className={classes.content}>
            <Title className={classes.title}>
              {meta.title[0]['plain_text']}
            </Title>
            <Title order={2} color='dimmed' mt='md'>
              {meta.description[0]['plain_text']}
            </Title>
            <Title order={3} mt='md'>
              <a href='mailto:aleesmithnyc@gmail.com'>
                aleesmithnyc@gmail.com 📮
              </a>
            </Title>
          </div>
        </div>
      </Container>

      <main className={styles.container}>
        <div className={styles.heading}>
          <h2>Projects</h2>
        </div>

        <Group py='lg'>
          <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
            {posts.map((post: any) => (
              <PostCard key={post.id} post={post} />
            ))}
          </SimpleGrid>
        </Group>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  const dbMeta = await getMeta(databaseId);

  return {
    props: {
      posts: database,
      meta: dbMeta,
    },
    revalidate: 1,
  };
};
