import Link from "next/link";
import ProjectsCards from "./ProjectsCards";
const data = [
  {
    name: "GEN AI VIDEO INTERVIEW APP",
    techStack: "OPENAI LANGGRAPH LANGCHAIN",
    liveUrl: "https://ai-interview-india-jobs.vercel.app/",
    github: "https://github.com/ahuja2666/ai-interview-india-jobs",
    thumbnail:
      "https://res.cloudinary.com/dfegprdja/image/upload/v1755242793/Screenshot_2025-08-15_at_12.55.40_PM_bmlzvn.png",
    title: "Get Hired with AI",
  },
  {
    name: "GEN AI CHATBOT",
    techStack: "OPENAI PROMPT ENGINEERING",
    liveUrl: "https://hitesh-persona.vercel.app/",
    github: "https://github.com/ahuja2666/hitesh-persona",
    thumbnail:
      "https://res.cloudinary.com/dfegprdja/image/upload/v1755243045/Screenshot_2025-08-15_at_1.00.23_PM_tcxrvu.png",
    title: "CHAT WITH HITESH PERSONA",
  },
  {
    name: "IPL DASHBOARD",
    techStack: "REACT CHART'JS CSS",
    liveUrl: "https://ipl-dashboard-com.netlify.app/",
    github: "https://github.com/ahuja2666/ipl-dashboard",
    thumbnail:
      "https://res.cloudinary.com/dfegprdja/image/upload/v1692451890/Screenshot_2023-08-19_at_7.00.40_PM_meli80.png",
    title: "Visualize Insights Seamlessly",
  },
  {
    name: "KANBAN BOARD",
    techStack: "REACT REACT-BEAUTIFUL-DND TAILWIND MUI",
    liveUrl: "https://kanbanclone-mercor.vercel.app/",
    github: "https://github.com/ahuja2666/kanban-clone",
    thumbnail:
      "https://res.cloudinary.com/dfegprdja/image/upload/v1692454199/Screenshot_2023-08-19_at_7.39.43_PM_wwd38d.png",
    title: "MODERN TODO APP",
  },
  {
    name: "LAUNDRY SERVICE",
    techStack: "REACT NODE EXPRESS MONGODB JWT BCRYPT",
    github: "https://github.com/ahuja2666/laundry-service-project",
    thumbnail:
      "https://res.cloudinary.com/dfegprdja/image/upload/v1692455222/Screenshot_2023-08-19_at_7.56.40_PM_hqibca.png",
    title: "FULLSTACK WEB APP",
  },
];

export default function Projects(props) {
  const { workPage } = props;
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className="text-[#C778DD]">{workPage ? "/" : "#"}</span>
              <span className="text-white">projects</span>
            </div>
            {!workPage && (
              <div className=" w-80 h-[1px] bg-[#C778DD] max-md:hidden"></div>
            )}
          </div>
          {!workPage && (
            <div>
              <Link href={"/work"}>
                <p className=" cursor-pointer hover:text-[#ABB2BF] text-base font-medium text-white">
                  View all ~~&gt;
                </p>
              </Link>
            </div>
          )}
        </div>
        {workPage && (
          <div className="text-white  font-normal text-base mb-4">
            List of my projects
          </div>
        )}
        {workPage && (
          <div className="text-3xl font-medium">
            <span className="text-[#C778DD]">#</span>
            <span className="text-white">completed-apps</span>
          </div>
        )}
        <div>
          <ProjectsCards data={workPage ? data : data.slice(0, 3)} />
        </div>
      </div>
    </div>
  );
}
