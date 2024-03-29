import paytmIcon from "../../assets/Projects-Icon/paytm.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <>
        <div  id="projects" className="text-white bg-neutral-800 text-2xl flex justify-center pt-8">
          Projects
        </div>
      <div className="p-2 bg-neutral-800 md:flex md:flex-row md:justify-center">
        {/* Project Card */}
        <ProjectCard
          image={paytmIcon}
          title={"Paytm Transactions"}
          description={
            "Basic implementation of session for transactions in MongoDb wherein users can send & receive money without any causal inconsistency."
          }
          stack={"React, Tailwind, Express, MongoDb, Zod"}
          codeUrl = {"https://github.com/Sameer-mishra1/paytm-transactions"}
        />
        <ProjectCard
          image={paytmIcon}
          title={"Paytm Transactions"}
          description={
            "Basic implementation of session for transactions in MongoDb wherein users can send & receive money without any causal inconsistency."
          }
          stack={"React, Tailwind, Express, MongoDb, Zod"}
          codeUrl = {"https://github.com/Sameer-mishra1/paytm-transactions"}
        />
        <ProjectCard
          image={paytmIcon}
          title={"Paytm Transactions"}
          description={
            "Basic implementation of session for transactions in MongoDb wherein users can send & receive money without any causal inconsistency."
          }
          stack={"React, Tailwind, Express, MongoDb, Zod"}
          codeUrl = {"https://github.com/Sameer-mishra1/paytm-transactions"}
        />
        
        {/* <div className="m-8 flex justify-between">
          <button className="bg-neutral-600 p-3 rounded-lg w-32">Previous</button>
          <button className="bg-neutral-600 p-3 rounded-lg w-32">Next</button>
          </div> */}
      </div>
    </>
  );
};
