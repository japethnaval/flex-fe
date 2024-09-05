// eslint-disable-next-line import/no-extraneous-dependencies

import { Dashboard } from 'pages/dashboard/dashboard.page'
import { Login } from 'pages/login/login.page'
import { NewStudentDrawer } from 'pages/popups/new-student.drawer'
import { RemoveStudentModal } from 'pages/popups/remove-student.modal'
import { Fragment } from 'react/jsx-runtime'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/layout'

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Login />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
      ],
    },
  ])

  return (
    <Fragment>
      {/* MODALS HERE */}
      <NewStudentDrawer />
      <RemoveStudentModal />
      {/* MODALS END */}

      <RouterProvider router={router} />
    </Fragment>
  )
}

export default App
