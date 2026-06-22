import { Navigate } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import AboutPage from "../pages/about/AboutPage";
import ProjectDetail from "../pages/projects/ProjectDetail";
import DeshboardLayout from "../pages/deshboard/DeshboardLayout";
import DeshboardHome from "../pages/deshboard/DeshboardHome";
import Login from "../pages/deshboard/Login";
import Register from "../pages/deshboard/Register";
import AddProject from "../pages/deshboard/AddProject";
import EditProject from "../pages/deshboard/EditProject";
import ManageProjects from "../pages/deshboard/ManageProjects";
import Inbox from "../pages/deshboard/Inbox";
import EditSiteContent from "../pages/deshboard/EditSiteContent";
import ManageSkills from "../pages/deshboard/ManageSkills";
import ManageSocialLinks from "../pages/deshboard/ManageSocialLinks";
import ProtectedRoute from "../pages/deshboard/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects/:slug", element: <ProjectDetail /> },
    ],
  },
  {
    path: "/deshboard",
    element: <DeshboardLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        index: true,
        element: (
          <ProtectedRoute>
            <DeshboardHome />
          </ProtectedRoute>
        ),
      },
      {
        path: "addproject",
        element: (
          <ProtectedRoute>
            <AddProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "manageprojects",
        element: (
          <ProtectedRoute>
            <ManageProjects />
          </ProtectedRoute>
        ),
      },
      {
        path: "edit/:id",
        element: (
          <ProtectedRoute>
            <EditProject />
          </ProtectedRoute>
        ),
      },
      {
        path: "inbox",
        element: (
          <ProtectedRoute>
            <Inbox />
          </ProtectedRoute>
        ),
      },
      {
        path: "content",
        element: (
          <ProtectedRoute>
            <EditSiteContent />
          </ProtectedRoute>
        ),
      },
      {
        path: "skills",
        element: (
          <ProtectedRoute>
            <ManageSkills />
          </ProtectedRoute>
        ),
      },
      {
        path: "social",
        element: (
          <ProtectedRoute>
            <ManageSocialLinks />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

export default router;
