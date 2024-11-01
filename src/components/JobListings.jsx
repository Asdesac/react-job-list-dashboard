/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
// import jobsData from "./jobs.json"; // Import your JSON data directly
import jobsData from "../jobs.json"; // Adjust the path based on the actual location

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiJobs = isHome ? jobsData.jobs.slice(0, 3) : jobsData.jobs; // Limit jobs for home
      try {
        // const res=await fetch(apiJobs);
        // const data=await res.json();
        // setJobs(data);
        setJobs(apiJobs);
      } catch (error) {
        setError("Error loading data");
        console.log("Error loading data", error);
      } finally {
        setLoading(false); // Set loading to false immediately
      }
    };

    fetchJobs();
  }, [isHome]);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
