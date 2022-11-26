import { useState } from "react";
import { ImCross } from "react-icons/im"
import { useDetails } from "../../context/DetailsProvider";

export function Skills(){
    const [ skills, setSkill ] = useState({ id: "", skill: "", level: "" });
    const { skill, level  } = skills;
    const { detailState, dispatchDetail } = useDetails();
    const inputStyle = "w-full border-2 border-grey rounded text-lg mt-3 p-1 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent";

    function submitSkills(){
        for (const property in skills) {
            if(skills[property] === ""){
                return console.log(property + " field is required");
            }
          }
        dispatchDetail({ type: "ADD_SKILLS", payload: skills });
        setSkill({ id: "", skill: "", level: "" });
    }

    return(
        <div className="flex flex-col items-center justify-center mb-8 p-5 border-2 border-coolGray rounded shadow-xl">
            <h2 className="text-2xl font-bold text-center text-black mb-5">Skills</h2>

            <div className="w-full md:w-96 mx-5 rounded">
                {
                    detailState.skills?.map(({id, skill, level}) => {
                        return(
                            <div key={id} className="flex items-center justify-between my-2 px-5 py-2 border-2 border-coolGray rounded shadow">
                                <div>
                                    <p className="font-bold leading-5">{skill}</p>
                                    <small className="text-grey">{level}</small>
                                </div>
                                <button onClick={() => dispatchDetail({ type: "REMOVE_SKILL", payload: id })}>
                                    <ImCross/>
                                </button>
                            </div>
                        )
                    })
                }
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-center">
                <div className="w-full flex flex-col m-4">
                    <label htmlFor="Skill" className="text-grey">
                        Skill 
                    </label>
                    <input className={inputStyle}
                        value={skill}
                        type="text"
                        onChange={(e) => setSkill(skills => ({ ...skills, skill: e.target.value, id: Math.random() }))}
                    />
                </div>

                <div className="w-full flex flex-col m-4">
                    <label htmlFor="Level" className="text-grey">
                        Level 
                    </label>
                    <select className={inputStyle + " bg-white p-2"} 
                        name="level" 
                        id="level-select"
                        value={level}
                        onChange={(e) => setSkill(skills => ({ ...skills, level: e.target.value }))}
                    >
                        <option value="">Select Option</option>
                        <option value="Expert">Expert</option>
                        <option value="Experienced">Experienced</option>
                        <option value="Skillfull">Skillfull</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Beginner">Beginner</option>
                    </select>
                </div>
            </div>
            <div className="w-full md:ml-4 mt-4">
                <button className="w-99 bg-primary text-white text-lg font-bold py-2 hover:bg-btn_hover rounded"
                    onClick={submitSkills}
                > 
                    Add Skill
                </button>
            </div>
        </div>
    )
}