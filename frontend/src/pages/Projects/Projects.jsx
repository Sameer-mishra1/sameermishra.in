import paytmIcon from "../../assets/Projects-Icon/paytm.png";

export const Projects = () => {
  return (
    <>
      <div id="projects" className="h-screen bg-neutral-800">
        <div className="text-white text-2xl flex justify-center pt-8">
          Projects
        </div>
        {/* Project Card */}
        <div className="flex flex-col justify-center m-8 p-5 bg-neutral-600 items-center rounded-xl text-white">
          <img src={paytmIcon} className="rounded-2xl shadow-md m-2" />
          <h3 className="font-['Poppins'] m-2 text-2xl">Paytm Transactions</h3>
          <p className="text-center">
            Basic implementation of session for transactions in MongoDb wherein
            users can send & receive money without any causal inconsistency.
          </p>
          <br />
          <div className="text-xl m-1">
            Stack & Tools:
          </div>
          <div className="pt-1">
            React, Tailwind, Express, MongoDb, Zod
          </div>
          <div className="m-8 flex justify-between space-x-28">
          <button className="bg-neutral-400 p-3 rounded-lg w-28">View Live</button>
          <button className="bg-neutral-400 p-3 rounded-lg w-28">View Code</button>
          </div>
        </div>
          <div className="m-8 flex justify-between">
          <button className="bg-neutral-600 p-3 rounded-lg w-32">Previous</button>
          <button className="bg-neutral-600 p-3 rounded-lg w-32">Next</button>
          </div>
      </div>
    </>
  );
};
