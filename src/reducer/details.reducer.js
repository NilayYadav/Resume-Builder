export function detailReducer(detailState, action){
    switch (action.type) {
        case "CHANGE_STEP":
            return { ...detailState, step: action.payload };
    
        case "ADD_FIRSTNAME":
            return { ...detailState, firstName: action.payload };

        case "ADD_LASTNAME":
                return { ...detailState, lastName: action.payload };

        case "ADD_EMAIL":
                return { ...detailState, email: action.payload };

        case "ADD_PHONE":
            return { ...detailState, phone: action.payload };

        case "ADD_ADDRESS":
            return { ...detailState, address: action.payload };
    
        case "ADD_PINCODE":
            return { ...detailState, pincode: action.payload };

        case "ADD_CITY":
            return { ...detailState, city: action.payload };

        case "ADD_WORK_EXPERIENCE": 
            return { ...detailState, workExperience: [...detailState.workExperience, action.payload] };
    
        case "REMOVE_WORK_EXPERIENCE":
            return {...detailState, workExperience: detailState.workExperience.filter(({id}) => id !== action.payload)}
        
        case "ADD_EDUCATION": 
            return { ...detailState, education: [...detailState.education, action.payload] };

        case "REMOVE_EDUCATION":
                return {...detailState, education: detailState.education.filter(({id}) => id !== action.payload)}
            
        case "ADD_SKILLS": 
            return { ...detailState, skills: [...detailState.skills, action.payload] };

        case "REMOVE_SKILL":
                return {...detailState, skills: detailState.skills.filter(({id}) => id !== action.payload)}
           
        case "ADD_IMAGE": 
            return {...detailState, image: action.payload}

        case "CHOOSE_TEMPLATE": 
            return {...detailState, template: action.payload}
        default:
            return detailState;
    }
}