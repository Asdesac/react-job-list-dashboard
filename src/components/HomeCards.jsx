// import React from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <>
      <section className="py-4">
        <div className="container-xl m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-a round-lg">
            <Card className="bg-white">
              <h2 className="text-2xl font-bold">For Developers</h2>
              <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
              </p>
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                View Jobs
              </Link>
            </Card>
            <Card className="bg-indigo-100">
              <h2 className="text-2xl font-bold">For Employers</h2>
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeCards;
