
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Getpost from './components/Getpost';
import Main from './components/main/Main';


const router = createBrowserRouter([
  {path: "/",children:[
    {index : true ,element:<Main></Main>},
    {path : "posts", element:<Getpost></Getpost>}

  ]}
])
function App() {
  return (
    <RouterProvider router = {router}></RouterProvider>
    
  );
}

export default App;
