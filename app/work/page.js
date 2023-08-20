import Projects from "../components/Projects";
import ProjectsCards from "../components/ProjectsCards";
const data = [{ name: "Photo Sharing App", techStack: "REACT AWS-S3 GOOGLE-AUTH", github: "https://github.com/ahuja2666/instaclone" },
{ name: "To-Do App", techStack: "REACT HTML CSS", github: "https://github.com/ahuja2666/" },
{ name: "Tic Tac Toe", techStack: "HTML CSS JAVASCRIPT", github: "https://github.com/ahuja2666/" }
]

export default function Work() {

  return (
    <>
      <Projects workPage={true} />
      <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5 text-3xl font-medium">
        <span className='text-[#C778DD]'>#</span><span className="text-white">small-projects</span>
        <div className="mt-10">
          <ProjectsCards data={data} />
        </div>
      </div>
    </>
  )
}
