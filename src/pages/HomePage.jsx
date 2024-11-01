// /* eslint-disable no-unused-vars */
import Hero from "../components/Hero"; // Ensure this path is correct
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJObs from "../components/ViewAllJobs";
// import EditJobPage from "./EditJobPage";
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJObs />
      {/* <EditJobPage /> */}
      {/* <EditJobPage updateJobSubmit={updateJob} /> */}
    </>
  );
};

export default HomePage;
