import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import PersonalInfo from './pages/PersonalInfo';
import Experience from './pages/Experience';
import Projects from './pages/Projects';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<PersonalInfo />} />
            <Route path='experience' element={<Experience />} />
            <Route path='projects' element={<Projects />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
