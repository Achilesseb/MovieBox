import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import { MBHeader } from './Components/Header/Header';
import { HomePage } from './Components/Dashboard/HomePage/homePage-component';


function App() {
  const queryClient = new QueryClient();
  

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MBHeader />
        <HomePage/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
