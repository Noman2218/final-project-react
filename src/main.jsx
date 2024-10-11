// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import WordPressForEducation from './components/WordPressForEducation.jsx'




// const router = createBrowserRouter([
//   {
//     path: "/Courses",
//     element: (
//      <WordPressForEducation/>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },


// ]);



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       {/* <RouterProvider router={router} /> */}
//       <App />
//     </BrowserRouter>
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import WordPressForEducation from './screens/COURSES/WordPressForEducation.jsx' 
import Courses from './screens/COURSES/Courses.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Courses",
    element: (
     <Courses/>
    ),
  },
  {
    path: "/about",
    element: 
    (
      <WordPressForEducation/>
    )
  },
  {
    path: "/about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)