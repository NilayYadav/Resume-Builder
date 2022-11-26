import { useDetails } from "../../context/DetailsProvider";
import { Work, Education, Skills } from "../index";

export function Experiences() {
  const { dispatchDetail } = useDetails();

  return (
    <div className="w-11/12 max-w-4xl mx-auto my-10">
      <Work />
      <Education />
      <Skills />
      <div className="w-full flex items-center justify-between my-10">
        <button
          className="bg-primary text-white text-lg font-bold py-2 px-4 hover:bg-btn_hover rounded"
          onClick={() => dispatchDetail({ type: "CHANGE_STEP", payload: 1 })}
        >
          Go Back
        </button>
        <button
          className="bg-primary text-white text-lg font-bold py-2 px-4 hover:bg-btn_hover rounded"
          onClick={() => dispatchDetail({ type: "CHANGE_STEP", payload: 3 })}
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
