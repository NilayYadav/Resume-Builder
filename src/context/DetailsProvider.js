import { createContext, useContext, useReducer } from "react";
import { detailReducer } from "../reducer/details.reducer";


const Details = createContext();

export function DetailsProvider({ children }) {
    const details = {
        step: 1,
        image: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        pincode: "",
        city: "",
        workExperience: [],
        education: [],
        skills: [],
        template: "one"
    }
    const [ detailState, dispatchDetail ] = useReducer(detailReducer, details)
    return(
        <Details.Provider value={{ detailState, dispatchDetail }}>
            { children }
        </Details.Provider>
    )
}



export function useDetails(){
    return useContext(Details);
}