import Image from "next/image"

const images = ["/github.png", "/Linkedin.png", "/Discord.png"]


export default function SocialProfiles() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      {
        images?.map((item) => {
          return (
            <div key={item}>
              <Image
                src={item}
                width={35}
                height={35}
                alt={item.split("/")[1].split(".")[0]}
                className="cursor-pointer"
              />
            </div>
          )
        })
      }
    </div>
  )
}
