import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './screens/COURSES/Courses.jsx';
import DigitalCitizenship from './screens/COURSES/DigitalCitizenship.jsx';
import WordPressForEducation from './screens/COURSES/WordPressForEducation.jsx';
import BecomeaPHPMaster from './screens/COURSES/BecomeaPHPMaster.jsx';
import ComputerTrainingSuite from './screens/COURSES/ComputerTrainingSuite.jsx';
import About from './screens/About.jsx';
import LearningSnagitforMac from './screens/COURSES/LearningSnagitforMac.jsx';
import DiplomainHTML5 from './screens/COURSES/DiplomainHTML5.jsx';
import ITCapstoneWrittenProject from './screens/COURSES/ITCapstoneWrittenProject.jsx';
import IntroductiontoIT from './screens/COURSES/IntroductiontoIT.jsx';
import ContactPage from './screens/ContactPage.jsx';
import IntroductiontoCloudComputing from './screens/COURSES/introductiontoCloudComputing.jsx';
import RegisterPage from './components/RegisterPage.jsx';
import AdminPage from './screens/AdminPage.jsx';

// Import the Register and Admin pages for user management

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <ContactPage />
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
    path: "/courses/become-a-php-master",
    element: <BecomeaPHPMaster />,
  },
  {
    path: "/courses/computer-training-suite",
    element: <ComputerTrainingSuite />,
  },
  {
    path: "/courses/learning-snagit-for-mac",
    element: <LearningSnagitforMac />,
  },
  {
    path: "/courses/diploma-in-html5-css3",
    element: <DiplomainHTML5 />,
  },
  {
    path: "/courses/introduction-to-cloud-computing",
    element: <IntroductiontoCloudComputing />,
  },
  {
    path: "/courses/it-capstone-written-project",
    element: <ITCapstoneWrittenProject />
  },
  {
    path: "/courses/introduction-to-it",
    element: <IntroductiontoIT />
  },

  // Adding routes for Register and Admin pages
  {
    path: "/register", // Register page for creating users
    element: <RegisterPage />,
  },
  {
    path: "/admin", // Admin page for managing users (create & delete)
    element: <AdminPage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
