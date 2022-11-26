import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import { BiSad } from "react-icons/bi";
import { JobDescription } from "../components";

export function Analyser() {
  const [jobs, setJobs] = useState(null);
  const [loader, setLoader] = useState(false);
  const [userSkills, setUserSkills] = useState(null);

  useEffect(() => {
    (async () => {
      setLoader(true);
      try {
        const api = "https://resume-builder.sauravkumar007.repl.co/analyser";
        const response = await axios.get(api);
        setJobs(response.data.matchedJobs);
        setUserSkills(response.data.userSkills);
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {loader ? (
        <div className="mt-20">
          <Spinner />
        </div>
      ) : jobs?.length === 0 ? (
        <div>
          <p className="text-3xl font-bold text-black pt-10">
            Currently No Jobs Available
          </p>
          <div className="w-max text-7xl m-auto py-2">
            <BiSad />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl my-4 font-medium">Jobs Available</h2>
          <div className="flex flex-col items-center">
            {jobs?.map((job) => {
              return (
                <JobDescription
                  key={job._id}
                  job={job}
                  userSkills={userSkills}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
