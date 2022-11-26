import { ProgressBar, PersonalDetail, Experiences, PrintResume } from "../components";
import { useDetails } from "../context/DetailsProvider";

export function Details(){
    const {detailState:{ step }} = useDetails();
    return(
        <div>
            <ProgressBar/>
            { step === 1 && <PersonalDetail/> }
            { step === 2 && <Experiences/> }
            { step === 3 &&  <PrintResume/> }
        </div>
    )
}