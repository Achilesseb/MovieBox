import { QueryClient, QueryClientProvider } from 'react-query';
import MBLayout from '../components/Layout/Layout';
import '../styles/global.scss';
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MBLayout>{<Component {...pageProps} />}</MBLayout>
    </QueryClientProvider>
  );
}

export default App;
