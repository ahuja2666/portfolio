import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const contacts = [{ img: "/Discord.png", alt: "disord icon", href: "https://discordapp.com/users/938844640004673536", text: "!harshit#7305" },
{ img: "/Email.png", alt: "email icon", href: "mailto: ahujaharshit26@gamil.com", text: "ahujaharshit26@gamil.com" },
{ img: "/Linkedin.png", alt: "linkedin icon", href: "https://www.linkedin.com/in/ahujaharshit26/", text: "@ahujaharshit26" }
]

export default function Contact() {
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className="text-[#C778DD]">#</span>
              <span className="text-white">contact</span>
            </div>
            <div className=" w-40 h-[1px] bg-[#C778DD] max-md:hidden"></div>
          </div>
        </div>
        <div>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={6}>
              <div className="text-[#ABB2BF] font-normal text-base flex flex-col gap-7">
                <p>
                  Feel free to get in touch with me for any inquiries, feedback,
                  collaboration opportunities, or freelance work. I&apos;m always
                  excited to connect and explore new possibilities in the world
                  of web development and technology.
                </p>
                <p>
                  Your feedback is invaluable to me, as it helps me refine my
                  skills and deliver better solutions. If you&apos;re looking for a
                  passionate and skilled full-stack web app developer to join
                  your team or collaborate on a project, don&apos;t hesitate to reach
                  out. Let&apos;s work together to create innovative and impactful
                  digital experiences.
                </p>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className="flex justify-end max-md:justify-start">
                <div className="border border-[#ABB2BF] p-4 flex flex-col gap-3 max-sm:w-full">
                  <p className="text-white font-semibold text-base">Message me here</p>
                  {
                    contacts?.map((item, idx) => {
                      return (
                        <div key={idx + item?.href} className="flex gap-1 items-center">
                          <Image
                            src={item?.img}
                            height={32}
                            width={32}
                            alt={item?.alt}
                          />
                          <Link target="_blank" href={item?.href}><span className="text-[#ABB2BF] text-base font-normal">{item?.text}</span></Link>
                        </div>
                      )
                    })
                  }


                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
