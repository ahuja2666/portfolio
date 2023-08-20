import { Grid } from "@mui/material";
import Image from "next/image";
const softSkill = [
  {
    "heading": "Communication",
    "text": "Clear tech talk, non-tech explanations."
  },
  {
    "heading": "Problem-Solving",
    "text": "Decode complexity to smart solutions."
  },
  {
    "heading": "Critical Thinking",
    "text": "Evaluate options, decide, build smartly."
  },
  {
    "heading": "Teamwork",
    "text": "Collaborate, code, achieve greatness together."
  },
  {
    "heading": "Adaptability",
    "text": "Embrace change, learn, stay cutting-edge."
  },
  {
    "heading": "Time Management",
    "text": "Plan, code, deliver, repeat with precision."
  },
  {
    "heading": "Empathy",
    "text": "Code with users' feelings in mind."
  },
  {
    "heading": "Creativity",
    "text": "Innovate code, craft unique solutions."
  },
  {
    "heading": "Attention to Detail",
    "text": "Code: error-free, pixel-perfect, user-approved."
  },
  {
    "heading": "Self-Motivation",
    "text": "Passion fuels code that excels always."
  }
]


export default function SoftSkills() {
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className="text-[#C778DD]">#</span>
              <span className="text-white">my-soft-skills</span>
            </div>
          </div>
        </div>
        <div>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={12} lg={12}>
              <Grid container item spacing={2} >
                {
                  softSkill?.map((item) => {
                    return (
                      <Grid key={item.heading} item xs={12} md={6} lg={4}>
                        <div className="border border-[#ABB2BF] p-2 text-base font-normal`">
                          <span className="text-white ">{item?.heading}</span>
                          <span className="text-[#ABB2BF]"> {item?.text}</span>
                        </div>
                      </Grid>
                    )
                  })
                }

              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div >
  )
}
