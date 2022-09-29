import './App.css';
import Time from './components/Time/Time';
import AllRoutes from './route/AllRoutes';
import Task from "./components/Task/Task";
import Navbar from './components/Blogs/BlogNavbar/Navbar';
function App() {
  return (
    <div className="App">

      <Time/>
      
    <AllRoutes />
      <AllRoutes />
      <Task />
    <Navbar/>
    </div>
  );
}

export default App;
