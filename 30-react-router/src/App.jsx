import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import Contacts from './components/Contacts';
import About from './components/About';
import Courses from './components/Courses';
import SingleCourse from './components/SingleCourse';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<h1>Not found</h1>} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
