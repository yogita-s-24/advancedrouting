import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './views/Home/Home'
import Posts from './views/Posts/Posts';
import ReadPost from './views/ReadPost/ReadPost';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>
  },
  {
    path: '/post',
    element : <Posts/>
  },
  {
    path : '/post/readpost/:id',
    element:<ReadPost />
  },
  {
    path: '*',
    element : <h1>404 Not Found</h1>
  }
  

])

root.render(
 <RouterProvider router={router}/>
);

