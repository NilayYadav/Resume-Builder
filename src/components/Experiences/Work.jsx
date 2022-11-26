import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDetails } from "../../context/DetailsProvider";

export function Work() {
  const [work, setWork] = useState({
    id: "",
    job: "",
    company: "",
    startDate: "",
    endDate: "",
  });
  const { job, company, startDate, endDate } = work;
  const {
    detailState: { workExperience },
    dispatchDetail,
  } = useDetails();
  const inputStyle =
    "w-full border-2 border-grey rounded text-lg mt-3 p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  function submitWorkExperience() {
    for (const property in work) {
      if (work[property] === "") {
        return console.log(property + " field is required");
      }
    }
    dispatchDetail({ type: "ADD_WORK_EXPERIENCE", payload: work });
    setWork({ id: "", job: "", company: "", startDate: "", endDate: "" });
  }

  return (
    <div className="flex flex-col items-center justify-center mb-8 p-5 border-2 border-coolGray rounded shadow-xl">
      <h2 className="text-2xl font-bold text-center text-black mb-5">
        Work Experience
      </h2>

      <div className="w-full md:w-96 mx-5 rounded">
        {workExperience?.map(({ id, job, startDate, endDate }) => {
          return (
            <div
              key={id}
              className="flex items-center justify-between my-2 px-5 py-2 border-2 border-coolGray rounded shadow"
            >
              <div>
                <p className="font-bold leading-5">{job}</p>
                <small className="text-grey">{`${startDate} - ${endDate}`}</small>
              </div>
              <button
                onClick={() =>
                  dispatchDetail({
                    type: "REMOVE_WORK_EXPERIENCE",
                    payload: id,
                  })
                }
              >
                <ImCross />
              </button>
            </div>
          );
        })}
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="Job Title" className="text-grey">
            Job Title
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputStyle}
            value={job}
            type="text"
            onChange={(e) =>
              setWork((work) => ({
                ...work,
                job: e.target.value,
                id: Math.random(),
              }))
            }
          />
        </div>

        <div className="w-full flex flex-col m-4">
          <label htmlFor="Company" className="text-grey">
            Company
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputStyle}
            value={company}
            type="text"
            onChange={(e) =>
              setWork((work) => ({ ...work, company: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="Start Date" className="text-grey">
            Start Date
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputStyle}
            type="month"
            min="1960-01"
            value={startDate}
            onChange={(e) =>
              setWork((work) => ({ ...work, startDate: e.target.value }))
            }
          />
        </div>

        <div className="w-full flex flex-col m-4">
          <label htmlFor="End Date" className="text-grey">
            End Date
            <span className="text-red-500">*</span>
          </label>
          <input
            className={inputStyle}
            type="month"
            min="1960-01"
            value={endDate}
            onChange={(e) =>
              setWork((work) => ({ ...work, endDate: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="w-full md:ml-4 mt-4">
        <button
          className="w-99 bg-primary text-white text-lg font-bold py-2 hover:bg-btn_hover rounded"
          onClick={submitWorkExperience}
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}
