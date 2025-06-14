import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import IntroText from "./IntroText";
import AnimatedButton from "./AnimatedButton";

export default function Main() {
  return (
    <main className="text-3xl text-white ml-36 mr-32 py-2  max-sm:mx-5  max-sm:mt-3 flex flex-col gap-10 justify-between">
      <Grid container spacing={6} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="flex flex-col gap-8">
            <div>
              <h2 className=" text-3xl font-semibold">
                Harshit is a{" "}
                <span className="text-[#C778DD]">
                  Full Stack Web App Developer
                </span>
              </h2>
            </div>
            <div>
              <p className="text-[#ABB2BF] font-normal text-sm">
                From Frontend Flourishes to Backend Brilliance: Powering Digital
                Dreams with Full Stack Wizardry
              </p>
            </div>
            <div>
              <Link href={"/contact"}>
                <AnimatedButton btnText={"Contact Me!!"} />
              </Link>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div>
            <Image
              height={386}
              width={457}
              src={"/main-img.png"}
              alt="harshit ahuja image"
              className="my-0 mx-auto"
            />
            <div className=" text-sm border border-[#ABB2BF] p-1 text-center">
              <Image
                height={16}
                width={16}
                src={"/box.png"}
                alt="box"
                className=" inline mr-2 mb-0.5"
              />
              <span className="text-[#ABB2BF]">Currently working at </span>
              <span>Solvative Private Limited</span>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="p-0 m-0 box-border w-[85%] mx-auto max-md:hidden">
        <fieldset className="border border-[#ABB2BF] pl-[2%] border-b-0">
          <div className=" text-2xl text-center p-3 pt-1 font-normal">
            <IntroText words={"Turning coffee into code, one cup at a time!"} />
          </div>
          <legend>
            <Image height={25} width={25} src={"/comma.png"} alt="comma" />
          </legend>
        </fieldset>
        <fieldset className="border-t border-[#ABB2BF] pl-[95%] -mt-2 max-md:pl-[88%]">
          <legend>
            <Image height={25} width={25} src={"/comma.png"} alt="comma" />
          </legend>
        </fieldset>
        <div className="border border-[#ABB2BF] border-t-0 -mt-2 ml-[70%]">
          <p className=" text-2xl text-center p-3 font-normal">- Programmer</p>
        </div>
      </div>
    </main>
  );
}
