import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import 'antd/dist/antd.dark.css'
import './sass/main.scss'
import { Navbar } from "./components";
import { Login, Register, Dashboard } from "./pages";


export default function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/"  element={<Register />}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/dashboard"  element={<Dashboard />}/>

          <Route path="/*"  element={<Register />}/>

        </Routes>
      </div>
    </Router>
  );
}

