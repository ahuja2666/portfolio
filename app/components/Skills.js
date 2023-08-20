import { Grid } from "@mui/material";
import Image from "next/image";
import SkillsCards from "./SkillsCards";
const skills = [
  [{ name: "Languages", skills: ["JavaScript", "Python"] }],
  [{ name: "Frameworks", skills: ["ReactJs", "NextJs", "ExpressJs", "NodeJs"] },
  { name: "Databases", skills: ["MongoDb", "Mysql"] }],
  [{ name: "Others", skills: ["DSA", "HTML", "CSS", "EJS", "REDUX", "MUI", "TAILWIND"] }, { name: "Tools", skills: ["Git", "Figma", "VsCode"] }],
]

export default function Skills() {
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className='text-[#C778DD]'>#</span><span className="text-white">skills</span>
            </div>
            <div className=" w-52 h-[1px] bg-[#C778DD] max-md:hidden">
            </div>
          </div>
        </div>
        <div>
          <Grid container spacing={8} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={4} lg={4} className=" max-md:hidden" >
              <Image
                src={"/skills.png"}
                width={500}
                height={500}
                alt="skills"
              />
            </Grid>
            <Grid item xs={12} md={8} lg={8}>
              <SkillsCards skills={skills} />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
