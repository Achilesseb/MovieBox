import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { MBHeader } from './Components/Header/Header';
import {HomePage} from "./src/Components/Dashboard/HomePage"

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
