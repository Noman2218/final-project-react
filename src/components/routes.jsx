import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import WordPressForEducation from '../screens/COURSES/WordPressForEducation';
import Courses from './Courses';
import Pages from './Pages';

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/WordPressForEducation" element={<WordPressForEducation />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/pages" element={<Pages />} />
    </Routes>
  );
}