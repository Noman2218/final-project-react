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
import IntroductiontoCloudComputing from './screens/COURSES/IntroductiontoCloudComputing.jsx';
import ITCapstoneWrittenProject from './screens/COURSES/ITCapstoneWrittenProject.jsx';
import IntroductiontoIT from './screens/COURSES/IntroductiontoIT.jsx';
import ContactPage from './screens/ContactPage.jsx';



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
    element: <About/>,
  },
  {
    path: "/Conatct",
    element: <ContactPage/>
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
    element: <LearningSnagitforMac/>,
  },
  {
    path: "/courses/Diploma-in-HTML5,-CSS3",
    element: <DiplomainHTML5/>,
  },
  {
    path: "courses/Introduction-to-Cloud-Computing",
    element: <IntroductiontoCloudComputing/>,
  },
  {
    path: "courses/IT-Capstone-Written-Project",
    element: <ITCapstoneWrittenProject/>
  },
  {
    path: "courses/Introduction-to-IT",
    element: <IntroductiontoIT/>
  },

]);

      



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
