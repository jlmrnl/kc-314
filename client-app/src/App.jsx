import { Route, Routes } from "react-router-dom";
import LoginPage from './pages/loginpage/loginPage';
import SignupPage from './pages/signuppage/signupPage';
import HomeRoutes from "./navigation/homeRoutes";
import PageNotFound from "./pages/pagenotfound/pageNotFound";
import StartPage from "./pages/startpage/startpage";



function App() {

  return (
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignupPage />} />
      <Route path='/home/*' element={<HomeRoutes />} />
      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  );
}

export default App;
