import Image from "next/image";
import Link from "next/link";
const contacts = [{ img: "/Discord.png", alt: "disord icon", href: "https://discordapp.com/users/938844640004673536", text: "!harshit#7305" },
{ img: "/Email.png", alt: "email icon", href: "mailto: ahujaharshit26@gamil.com", text: "ahujaharshit26@gamil.com" },
{ img: "/Linkedin.png", alt: "linkedin icon", href: "https://www.linkedin.com/in/ahujaharshit26/", text: "@ahujaharshit26" }
]

export default function Footer() {
  return (
    <footer className="border-t mt-32 border-white">
      <div className="ml-36 mr-32 mt-8 max-sm:ml-5 max-sm:mr-5">
        <div className="flex justify-between flex-wrap max-md:gap-2">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <Image height={16} width={16} alt="small logo" src={"/logo.png"} />
              <span className=" text-base text-white font-medium">Harshit</span>
              <Link target="_blank" href={"mailto: ahujaharshit26@gamil.com"}><span className="text-[#ABB2BF] text-base font-normal ml-4">ahujaharshit26@gmail.com</span></Link>
            </div>
            <div className="text-white font-normal text-base">
              Full Stack Web App Developer
            </div>
            <div className="text-white font-normal text-xs">
              <Link target="_blank" href={"https://www.figma.com/community/file/1164933568884615740/Portfolio"}>Design Credit ~ Elias from Figma community</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-white text-2xl font-medium">
              Social Media
            </div>
            <div className="flex gap-3 items-center">
              {
                contacts?.map((item, idx) => {
                  return (
                    <div key={idx + item?.href} >
                      <Link target="_blank" href={item?.href}><Image
                        src={item?.img}
                        height={32}
                        width={32}
                        alt={item?.alt}
                      />
                      </Link>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="my-7">
          <p className="text-center text-[#ABB2BF] text-base font-normal">&#169; Copyright 2023. Made by Harshit</p>
        </div>
      </div>
    </footer>
  )
}
