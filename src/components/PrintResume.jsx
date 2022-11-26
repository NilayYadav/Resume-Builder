import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { TemplateOne, TemplateTwo, TemplateThree, TemplateFour } from "./index";
import { useDetails } from "../context/DetailsProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PrintResume() {
  const navigate = useNavigate();
  const componentRef = useRef();
  const { detailState, dispatchDetail } = useDetails();
  const { template, skills } = detailState;
  const userSkill = skills.map((i) => i.skill);

  async function addSkills() {
    navigate("/analyser");
    try {
      const api = "https://resume-builder.sauravkumar007.repl.co/analyser";
      await axios.post(api, { skills: userSkill });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full mx-auto my-2 p-2 border-2 border-coolGray rounded shadow-xl">
      <div className="flex flex-col md:flex-row w-full m-auto scale-50 md:scale-75 transform overflow-hidden">
        <div
          className={`border-2 border-grey m-2 cursor-pointer ${
            template === "one" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() =>
            dispatchDetail({ type: "CHOOSE_TEMPLATE", payload: "one" })
          }
        >
          <TemplateOne refrence={template === "one" ? componentRef : null} />
        </div>
        <div
          className={`border-2 border-grey ${
            template === "two" ? "opacity-100" : "opacity-50"
          } m-2 cursor-pointer	`}
          onClick={() =>
            dispatchDetail({ type: "CHOOSE_TEMPLATE", payload: "two" })
          }
        >
          <TemplateTwo refrence={template === "two" ? componentRef : null} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full -mt-32 mx-auto scale-50 md:scale-75 transform overflow-hidden">
        <div
          className={`border-2 border-grey m-2 cursor-pointer ${
            template === "three" ? "opacity-100" : "opacity-50"
          }`}
          onClick={() =>
            dispatchDetail({ type: "CHOOSE_TEMPLATE", payload: "three" })
          }
        >
          <TemplateThree
            refrence={template === "three" ? componentRef : null}
          />
        </div>
        <div
          className={`border-2 border-grey ${
            template === "four" ? "opacity-100" : "opacity-50"
          } m-2 cursor-pointer	`}
          onClick={() =>
            dispatchDetail({ type: "CHOOSE_TEMPLATE", payload: "four" })
          }
        >
          <TemplateFour refrence={template === "four" ? componentRef : null} />
        </div>
      </div>
      <div className="flex align-center justify-center">
        <ReactToPrint
          trigger={() => (
            <button className="bg-primary text-white text-lg font-bold px-4 py-2 hover:bg-btn_hover rounded">
              Print Resume
            </button>
          )}
          content={() => componentRef.current}
        />
      </div>
      <button
        className="bg-primary text-white text-lg font-bold my-4 px-4 py-2 hover:bg-btn_hover rounded"
        onClick={addSkills}
      >
        Analyze Resume
      </button>
    </div>
  );
}
