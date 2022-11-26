import { useDetails } from "../context/DetailsProvider";

export function ProgressBar(){
    const spanClass = "px-2 py-1 text-black rounded-full";
    const { detailState:{step} } = useDetails();
    return(
        <div className="relative w-8/12 max-w-2xl m-auto my-12">
            <div className="absolute -z-10 top-2/4 w-99 h-1 bg-gray-300"></div>
            <div className={`absolute -z-10 top-2/4 h-1 bg-primary ${(step === 2 && "w-1/2") || (step === 3 && "w-99")}`}></div>
            <div className="flex items-center justify-between">
                <div className="bg-gray-300 rounded-full">
                    <span className={ spanClass + " bg-primary" }>
                        1
                    </span>
                </div>
                <div className="bg-gray-300 rounded-full">
                    <span className={ step >= 2 ? spanClass + " bg-primary" : spanClass }>
                        2
                    </span>
                </div>
                <div className="bg-gray-300 rounded-full">
                    <span className={ step === 3 ? spanClass + " bg-primary" : spanClass }>
                        3
                    </span>
                </div>
            </div>
        </div>
    )
}