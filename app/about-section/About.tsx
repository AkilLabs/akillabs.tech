import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20  md:pt-24 lg:pt-28 "
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1220px]">
        {/* Hero Headline */}
        <AnimatedTitle
          text="I Build with Code, Create with AI, and Design for Impact."
          className="mb-12 text-left text-[36px] font-extrabold leading-[1] tracking-tight text-[#e4ded7] sm:text-[45px] md:mb-20 md:text-[60px] lg:text-[72px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        {/* Intro Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-6 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:text-[20px] lg:max-w-[65%] lg:text-[24px]">
            <AnimatedBody text="Hey, I’m Akil — a GenAI-focused Full-Stack Developer who crafts real-world applications by blending frontend precision with backend intelligence. I believe in building tools that not only work but *feel* human." />

            <AnimatedBody text="I currently work as a Junior Software Intern at SNS InnovationHub, where I build real-time AI-powered apps for clients using Python, LangChain, CrewAI, and Gemini. My stack spans from frontend design systems to backend orchestration." />

            <AnimatedBody text="Some of my proudest work includes 'InterviewIQ' — an AI interviewer that reads your resume and asks HR-style questions — and a stock prediction system that uses real-time scraping and GenAI to verify financial news." />

            <AnimatedBody text="Outside code, I'm leading student tech communities, sharing knowledge, and constantly refining my systems — from automating GitHub dashboards to making custom Chrome extensions for daily productivity." />
          </div>

          {/* Skills Summary */}
          <div className="flex w-full flex-col gap-6 text-[#e4ded7]/80 lg:max-w-[35%] text-[16px] md:text-[18px]">
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text="Powered Stack"
                className="text-[22px] text-[#e4ded7] md:text-[28px] lg:text-[24px]"
                wordSpace="mr-[0.2em]"
                charSpace="mr-[0.01em]"
              />
              <AnimatedBody text="React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Django, FastAPI, MongoDB, Firebase" />
              <AnimatedBody text="OpenAI, Gemini, LangChain, CrewAI, Ollama, Streamlit, Tesseract, pdfplumber" />
              <AnimatedBody text="Vercel, GitHub, Docker, Netlify, Notion, Postman, FlutterFlow" />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text="Now Building"
                className="text-[22px] text-[#e4ded7] md:text-[28px] lg:text-[24px]"
                wordSpace="mr-[0.2em]"
                charSpace="mr-[0.01em]"
              />
              <AnimatedBody text="🧠 A SaaS GenAI API layer for interview evaluation" />
              <AnimatedBody text="📊 GitHub-Notion integration for dev dashboards" />
              <AnimatedBody text="🎵 A music-powered emotion-tracking AI app" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
