import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <main className="w-full max-w-5xl m-auto py-8 px-5 text-center">
      <h2 className="text-5xl md:text-6xl font-bold text-black py-10">
        Create your professional Resume online with Resume Builder
      </h2>
      <button
        className="bg-primary text-white text-xl font-bold py-2 px-10 hover:bg-btn_hover rounded"
        onClick={() => navigate("/details")}
      >
        Create Resume
      </button>
    </main>
  );
}
