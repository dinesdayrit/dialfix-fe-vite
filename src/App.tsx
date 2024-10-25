import { Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "@/pages/authCallbackPage";
import ProtectedRoute from "./auth/ProtectedRoute";
import UserProfilePage from "./pages/UserProfilePage";
import ManageServicesPage from "./pages/ManageServicesPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />

      <Route
        path="/search-service-provider/:city"
        element={
          <Layout>
            <SearchPage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />

      {/* protected routes */}

      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />
        <Route
          path="/manage-services"
          element={
            <Layout>
              <ManageServicesPage />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
