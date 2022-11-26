import { useState } from "react";
import { ImCross } from "react-icons/im";
import { useDetails } from "../../context/DetailsProvider";

export function Education() {
  const [qualifications, setQualifications] = useState({
    id: "",
    degree: "",
    city: "",
    school: "",
    startDate: "",
    endDate: "",
  });
  const { degree, city, school, startDate, endDate } = qualifications;
  const {
    detailState: { education },
    dispatchDetail,
  } = useDetails();
  const inputStyle =
    "w-full border-2 border-grey rounded text-lg mt-3 p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

  function submitEducation() {
    for (const property in qualifications) {
      if (qualifications[property] === "") {
        return console.log(property + " field is required");
      }
    }
    dispatchDetail({ type: "ADD_EDUCATION", payload: qualifications });
    setQualifications({
      id: "",
      degree: "",
      city: "",
      school: "",
      startDate: "",
      endDate: "",
    });
  }

  return (
    <div className="flex flex-col items-center justify-center mb-8 p-5 border-2 border-coolGray rounded shadow-xl">
      <h2 className="text-2xl font-bold text-center text-black mb-5">
        Education and Qualifications
      </h2>

      <div className="w-full md:w-96 mx-5 rounded">
        {education?.map(({ id, degree, startDate, endDate }) => {
          return (
            <div
              key={id}
              className="flex items-center justify-between my-2 px-5 py-2 border-2 border-coolGray rounded shadow"
            >
              <div>
                <p className="font-bold leading-5">{degree}</p>
                <small className="text-grey">{`${startDate} - ${endDate}`}</small>
              </div>
              <button
                onClick={() =>
                  dispatchDetail({ type: "REMOVE_EDUCATION", payload: id })
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
          <label htmlFor="Degree" className="text-grey">
            Degree
          </label>
          <input
            className={inputStyle}
            value={degree}
            type="text"
            onChange={(e) =>
              setQualifications((qualification) => ({
                ...qualification,
                degree: e.target.value,
                id: Math.random(),
              }))
            }
          />
        </div>

        <div className="w-full flex flex-col m-4">
          <label htmlFor="City" className="text-grey">
            City/Town
          </label>
          <input
            className={inputStyle}
            value={city}
            type="text"
            onChange={(e) =>
              setQualifications((qualification) => ({
                ...qualification,
                city: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="School" className="text-grey">
            School/College
          </label>
          <input
            className={inputStyle}
            value={school}
            type="text"
            onChange={(e) =>
              setQualifications((qualification) => ({
                ...qualification,
                school: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <div className="w-full flex flex-col m-4">
          <label htmlFor="Start Date" className="text-grey">
            Start Date
          </label>
          <input
            className={inputStyle}
            type="month"
            min="1960-01"
            value={startDate}
            onChange={(e) =>
              setQualifications((qualification) => ({
                ...qualification,
                startDate: e.target.value,
              }))
            }
          />
        </div>

        <div className="w-full flex flex-col m-4">
          <label htmlFor="End Date" className="text-grey">
            End Date
          </label>
          <input
            className={inputStyle}
            type="month"
            min="1960-01"
            value={endDate}
            onChange={(e) =>
              setQualifications((qualification) => ({
                ...qualification,
                endDate: e.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="w-full md:ml-4 mt-4">
        <button
          className="w-99 bg-primary text-white text-lg font-bold py-2 hover:bg-btn_hover rounded"
          onClick={submitEducation}
        >
          Add Education
        </button>
      </div>
    </div>
  );
}
