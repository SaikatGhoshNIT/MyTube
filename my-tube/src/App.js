
import './App.css';
import Head from "./components/Head"
import Body from "./components/Body"
import store from './utils/store';
import { Provider } from 'react-redux';
import  { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { Children } from 'react';
import MainContener from './components/MainContener';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path : '/',
  element : <Body/>,
  children:[
    {
      path : "/",
      element: <MainContener/>
    },
    {
      path: "/watch",
      element: <WatchPage/>
    },
  ],
}])


function App() {
  return (
    <Provider store={store}> 
    <div>
      <Head/>
      <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
