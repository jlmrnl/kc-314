import MyNavbar from "../components/MyNavbar/MyNavbar";
import CreateAppointmentPage from "../pages/appointmentspage/createAppointmentPage";
import SeeAppointmentPage from "../pages/appointmentspage/seeAppointmentPage";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import HomePage from "../pages/homepage/homePage";
import ServicePage from "../pages/servicePage/servicePage";
import AboutPage from "../pages/aboutpage/aboutPage";
import { useAuth } from "../context/AuthContext";
function HomeRoutes() {
  const { authenticated } = useAuth(); 
  const navigate = useNavigate();

  if (!authenticated) {
    navigate('/'); 
    return null;
  }
  return (
    <>
      <MyNavbar />
      <main className="p-3">
        <Routes>
          <Route index element={<HomePage/> } />
          <Route path='/services' element={<ServicePage/>} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/create-appointments' element={<CreateAppointmentPage />} />
          <Route path='/appointments' element={<SeeAppointmentPage />} />
        </Routes>
      </main>
    </>
  );
}

export default HomeRoutes;