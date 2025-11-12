import { createBrowserRouter } from 'react-router-dom'

import { Home } from './pages/app/home/home'
import { Error } from './pages/error'
import { NotFound } from './pages/404'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <Error />,
      children: [
        {
          path: 'mob-project',
          children: [
            {
              id: 'home',
              path: '',
              element: <Home />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
)