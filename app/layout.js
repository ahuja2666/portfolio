import Footer from "./components/Footer";
import Header from "./components/Header";
import SocialProfiles from "./components/SocialProfiles";
import "./globals.css";
import { Fira_Code } from "next/font/google";

const font = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Harshit Ahuja",
  description:
    "Explore the portfolio website of Harshit Ahuja, a skilled and innovative full stack developer. With expertise in both front-end and back-end technologies, Harshit brings creative solutions to life. Discover a showcase of captivating projects demonstrating proficiency in HTML, CSS, JavaScript, React, Node.js, and more. From seamless user interfaces to robust server systems, Harshit's commitment to quality shines through. Stay updated on the latest tech trends by connecting on LinkedIn, Twitter, and GitHub. Join the journey of turning ideas into reality through code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="relative z-40" >
          <Header />
        </div>
        <div className="fixed top-0 z-50 left-0 ml-5 flex flex-col justify-center items-center gap-2 max-sm:hidden">
          <div className=' h-40 w-[1px] rounded-sm bg-white'>
          </div>
          <SocialProfiles />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
