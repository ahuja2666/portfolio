'use client'
import AnimatedButton from "./AnimatedButton";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import Link from "next/link";
const LinkedInRecommendations = () => {
  return (
    <div className="ml-36 mr-32 mt-16 max-sm:ml-5 max-sm:mr-5">
      <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="text-3xl font-medium">
              <span className='text-[#C778DD]'>#</span><span className="text-white">recommendations</span>
            </div>
            <div className=" w-52 h-[1px] bg-[#C778DD] max-md:hidden">
            </div>
          </div>

        </div>
        <div className="h-[30rem] rounded-md flex flex-col antialiased bg-[#282c33]  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
          />
        </div>
        <div className="self-center">
          <Link className="text-white hover:text-[#ABB2BF]" target="_blank" href={'https://www.linkedin.com/in/ahujaharshit26/details/recommendations'}>
            <AnimatedButton btnText={`See More on LinkedIn ->`} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LinkedInRecommendations

const testimonials = [
  {
    quote:
      "Harshit has always gone that extra mile to bring all his work to the finish line. He brought skill and innovation to his work. He is a fast learner and dedicated person.",
    name: "Sonal Padole",
    title: "Senior Project Manager at BluePi",
  },
  {
    quote:
      `Harshit is not only technically proficient but also an excellent team player. He consistently collaborated well with our back-end developers, designers, and other team members, ensuring smooth project execution and a harmonious work environment. His strong communication skills and proactive attitude were instrumental in meeting tight deadlines without compromising on quality.`,
    name: "Parvesh Kumar",
    title: "Techinal Lead at BluePi",
  },
  {
    quote: "I highly recommend Harshit for his exceptional problem-solving skills and positive attitude. Despite joining our project slightly later, he quickly grasped all the workflows and has become a key resource. Harshit is a true go-getter, consistently implementing complex features in our React app with ease. Working with him is always a pleasure.",
    name: "Prakhar Agarwal",
    title: "Associate Technical Lead at BluePi",
  },
];