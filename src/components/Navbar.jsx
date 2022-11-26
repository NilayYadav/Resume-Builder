import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useRef, useEffect } from "react";
import { useDetails } from "../context/DetailsProvider";

export function Navbar() {
  const {
    detailState: { step },
    dispatchDetail,
  } = useDetails();
  const navigate = useNavigate();
  const scrollToTopRef = useRef(null);

  useEffect(() => {
    scrollToTopRef.current.scrollIntoView();
  }, [step]);

  return (
    <nav
      ref={scrollToTopRef}
      className="text-white bg-primary p-4 sticky flex items-center justify-between"
    >
      <Link
        to="/"
        className="text-2xl font-bold"
        onClick={() => dispatchDetail({ type: "CHANGE_STEP", payload: 1 })}
      >
        Resume Builder
      </Link>
      <div className="flex">
        <Link to="/analyser" className="mx-8 font-bold">
          Analyser
        </Link>
        <button onClick={() => navigate("/profile")} className="text-xl">
          {<FaUser />}
        </button>
      </div>
    </nav>
  );
}
