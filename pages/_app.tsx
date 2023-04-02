import { GetServerSidePropsContext } from 'next';
import { useState } from 'react';
import { AppProps } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import { DehydartedPageProps } from 'types/DehydartedPageProps';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function App(props: AppProps<DehydartedPageProps> & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  //React Query Client Provider Setup for every user
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Interview Demo App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
              theme={{
                colorScheme,
                primaryColor: 'red',
                globalStyles: (theme) => ({
                  body: {
                    backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
                    
                  },
                }),
              }}
              withGlobalStyles
              withNormalizeCSS
            >
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});
