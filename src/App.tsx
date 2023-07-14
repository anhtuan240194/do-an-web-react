import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from './routes/Root';

import Home from './routes/Home'
import About from "./routes/About";
import Collections from "./routes/Collections";
import Article from "./routes/Article";
import Contact from "./routes/Contact";
import Cart from "./routes/Cart";


import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/main.css"
import "./css/ressponsive.css"

const router = createBrowserRouter([{
  path:"/",
  element:<Root/>,
  children: [
    {index: true, element: <Home/>},
    {path:"/about", element:<About/>},
    {path:"/collections", element: <Collections/>},
    {path: "/contact", element: <Contact/>},
    {path:"/article/*", element:<Article/>},
    {path:"/cart", element:<Cart/>}
  ]
}])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
