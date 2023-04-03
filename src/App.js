import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';

import { MBHeader } from './Components/Header/Header';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MBHeader />
      </div>
    </QueryClientProvider>
  );
}

export default App;
