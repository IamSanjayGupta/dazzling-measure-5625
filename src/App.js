import "./App.css";
import AllRoutes from "./route/AllRoutes";
import Task from "./components/Task/Task";
import Navbar from "./components/Blogs/BlogNavbar/Navbar";
import Userprofile from "./components/Auth/Userprofile";
import Profile from "./components/Auth/Profile";
import SideMenu from "./components/SideMenu/SideMenu";

function App() {
  return (
    <div className="App">
      {/* <AllRoutes /> */}
      <SideMenu />
      <Task />
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
