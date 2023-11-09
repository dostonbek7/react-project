import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './layout/RootLayout'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  const routes = createBrowserRouter([
      {
        path: '/',
        element: <RootLayout />,
        children:[
          {
            index: true,
            element: <Home/>
          }
        ]
      },
  ])

  return <RouterProvider router = {routes}/>
}

export default App
