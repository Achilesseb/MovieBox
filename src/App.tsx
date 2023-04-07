import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import MBLayout from './Components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MBLayout />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
