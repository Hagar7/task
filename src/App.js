import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';

function App() {
  let routes = createBrowserRouter([
    {path:"/",element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"birth",element:<Home/>}
    ]}
  ])
  return (
  <RouterProvider router={routes}/>
  );
}

export default App;
