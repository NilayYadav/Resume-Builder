import React from "react";
import { PieChart } from "./PieChart";
import { matchSkills } from "../helpers/chartData";

export function JobDescription({ job, userSkills }) {
  const chartData = {
    labels: ["Skills Match", "Skills Lack"],
    datasets: [
      {
        label: "match skills",
        data: matchSkills(job.requirements, userSkills),
        backgroundColor: ["#0fa6e9", "#ecf0f1"],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="m-2 p-5 border-2 border-current flex items-start justify-between w-11/12 max-w-2xl border-2 border-current rounded-md">
      <div className="text-left w-9/12">
        <div className="my-4">
          <p className="text-grey">Name</p>
          <p>{job?.company}</p>
        </div>
        <div className="my-4">
          <p className="text-grey">Skills Required</p>
          <p>{job?.requirements.join(", ").toUpperCase()}</p>
        </div>
        <div className="my-4">
          <p className="text-grey">Description</p>
          <p>
            {job?.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Magnam, laboriosam.
          </p>
        </div>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${job?.email}`}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white text-sm font-bold my-4 py-2 px-4 hover:bg-btn_hover rounded"
        >
          Apply
        </a>
      </div>
      <div className="w-2/5">
        <PieChart chartData={chartData} />
      </div>
    </div>
  );
}
