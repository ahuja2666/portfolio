import { Grid } from "@mui/material";
import Image from "next/image";


export default function Main() {
  return (
    <main className='text-3xl text-white ml-36 mr-32 py-2  max-sm:ml-5 max-sm:mr-5'>
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className='flex flex-col gap-8 border border-red-600'>
            <div>
              <h2 className=' text-3xl font-semibold'>
                Harshit is a <span className='text-[#C778DD]'>Full Stack Web App Developer</span>
              </h2>
            </div>
            <div>
              <p className='text-[#ABB2BF] font-normal text-sm'>
                From Frontend Flourishes to Backend Brilliance: Powering Digital Dreams with Full Stack Wizardry</p>
            </div>
            <div>
              <button className='border-[#C778DD] border font-medium text-base py-2 px-4 hover:text-[#ABB2BF]'>Contact Me!!</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="border border-red-600">
            <Image
              height={386}
              width={457}
              src={"/main-img.png"}
              alt="harshit ahuja image"
              className="my-0 mx-auto"
            />
          </div>



        </Grid>
      </Grid>
    </main>
  )
}
