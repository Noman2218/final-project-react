import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './screens/COURSES/Courses.jsx';

import DigitalCitizenship from './screens/COURSES/DigitalCitizenship.jsx';
import PopularCourses from './components/PopularCourses.jsx';
import WordPressForEducation from './screens/COURSES/WordPressForEducation.jsx';
import BecomeaPHPMaster from './screens/COURSES/BecomeaPHPMaster.jsx';
// import BecomeAPHPMaster from './screens/COURSES/BecomeAPHPMaster.jsx';
// import ComputerTrainingSuite from './screens/COURSES/ComputerTrainingSuite.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Courses",
    element: <Courses />,
  },
  {
    path: "/popular-courses",  // Route for PopularCourses
    element: <PopularCourses />,
  },
  {
    path: "/courses/wordpress-for-education",
    element: <WordPressForEducation />,
  },
  {
    path: "/courses/digital-citizenship",
    element: <DigitalCitizenship />,
  },

  {
    path: "/popular-courses/load more courses",
    element: <Courses />,
  },


    {
      path: "/courses/become-a-php-master",
      element: <BecomeaPHPMaster />,
    },
  // {
  //   path: "/courses/computer-training-suite",
  //   element: <ComputerTrainingSuite />,
  // },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
