import ProjectsCards from "./ProjectsCards";
const data = [{ name: "IPL DASHBOARD", techStack: "REACT CHART'JS CSS", liveUrl: "https://ipl-dashboard-com.netlify.app/", github: "https://github.com/ahuja2666/ipl-dashboard", thumbnail: "https://res.cloudinary.com/dfegprdja/image/upload/v1692451890/Screenshot_2023-08-19_at_7.00.40_PM_meli80.png", title: "Visualize Insights Seamlessly" },
{ name: "KANBAN BOARD", techStack: "REACT REACT-BEAUTIFUL-DND TAILWIND MUI", liveUrl: "https://kanbanclone-mercor.vercel.app/", github: "https://github.com/ahuja2666/kanban-clone", thumbnail: "https://res.cloudinary.com/dfegprdja/image/upload/v1692454199/Screenshot_2023-08-19_at_7.39.43_PM_wwd38d.png", title: "MODERN TODO APP" },
{ name: "LAUNDRY SERVICE", techStack: "REACT NODE EXPRESS MONGODB JWT BCRYPT", github: "https://github.com/ahuja2666/laundry-service-project", thumbnail: "https://res.cloudinary.com/dfegprdja/image/upload/v1692455222/Screenshot_2023-08-19_at_7.56.40_PM_hqibca.png", title: "FULLSTACK WEB APP" }
]

export default function Projects() {
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className='text-[#C778DD]'>#</span><span className="text-white">projects</span>
            </div>
            <div className=" w-80 h-[1px] bg-[#C778DD] max-md:hidden">
            </div>
          </div>
          <div>
            <p className=" cursor-pointer hover:text-[#ABB2BF] text-base font-medium text-white">View all ~~&gt;</p>
          </div>
        </div>
        <div>
          <ProjectsCards data={data} />
        </div>
      </div>
    </div>
  )
}
