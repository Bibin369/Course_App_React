import logo from './logo.svg';
import './App.css';
import AddCourse from './components/AddCourse';
import SearchCourse from './components/SearchCourse';
import DeleteCourse from './components/DeleteCourse';
import ViewAll from './components/ViewAll';
import CourseHeader from './components/CourseHeader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element={<AddCourse/>}/>
      <Route path='Delete' element={<DeleteCourse/>}/>
      <Route path='Search' element={<SearchCourse/>}/>
      <Route path='View' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
