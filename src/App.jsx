/* eslint-disable no-unused-vars */
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Router,
} from "react-router-dom";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import MainLayout from "./layouts/MainLayout"; // Make sure the path is correct
import HomePage from "./pages/HomePage"; // Ensure this path exists
// import ErrorPage from "./pages/ErrorPage"; // Add your error page component
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
// import AddJobPage from "./pages/AddJobPage";
const App = () => {
  // add new job
  const addJob = async (newJob) => {
    const res = await fetch(`/api/jobs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  // delete job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };
  {
    /* update job */
  }
  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />

        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />

        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />

        {/* <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        /> */}
        {/* Catch-all route for non-existing routes */}
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
