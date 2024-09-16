import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Login } from "./components/login";
import { SignUp } from "./components/signup";
import { DashboardLayout } from "./layouts/dasboard-layout/components/dasboard-layout";
import { Settings } from "./layouts/dasboard-layout/components/settings";
import { UniversityGrid } from "./layouts/dasboard-layout/components/universities";
import { EvaluateYourself } from "./layouts/dasboard-layout/components/evaluate";
import { HomePage } from "./layouts/dasboard-layout/home-page";
function App() {
  const ConditionalNavbar = () => {
    const location = useLocation();
    const showNavbar =
      location.pathname === "/login" || location.pathname === "/signup";

    return showNavbar ? <Navbar /> : null;
  };
  return (
    <>
      <BrowserRouter>
        <ConditionalNavbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardLayout />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/universites" element={<UniversityGrid />} />
            <Route
              path="/dashboard/evaluate-yourself"
              element={<EvaluateYourself />}
            />

            <Route path="dashboard/" element={<HomePage />} />
          </Route>

          <Route path="/" element={<Navigate to="/login" />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
