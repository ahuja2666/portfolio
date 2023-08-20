import { Grid } from "@mui/material"


export default function SkillsCards(props) {
  const { skills } = props
  return (
    <Grid item container spacing={2}>

      {
        skills?.map((item, idx) => {
          return (
            <Grid key={idx + "skill"} item xs={12} md={4} lg={4}>
              <div className="flex flex-col gap-4 ">
                {
                  item?.map((skill, ind) => {
                    return (
                      <div key={ind + "each"} className="border border-[#ABB2BF]">
                        <div className=""><p className="text-white text-base font-semibold p-2 border-b border-[#ABB2BF]">{skill?.name}</p></div>
                        <div className="p-2 text-[#ABB2BF] text-base font-normal">
                          {skill?.skills?.join(" ")}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </Grid>
          )
        })
      }


    </Grid>
  )
}
