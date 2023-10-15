import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/loginpage/loginPage';
import SignupPage from './pages/signuppage/signupPage';
import HomeRoutes from "./navigation/homeRoutes";



function App() {

  return (
    <Routes >
      <Route path='/' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignupPage />} />
      <Route path='/home/*' element={<HomeRoutes />} />
    </Routes>
  );
}

export default App;
