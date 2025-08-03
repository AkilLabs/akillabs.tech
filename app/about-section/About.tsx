import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20  md:pt-24 lg:pt-28"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1220px]">
        {/* Hero Headline */}
        <AnimatedTitle
          text="Prompt. Build. Deploy. Repeat — with AI at the Core."
          className="mb-12 text-left text-[36px] font-extrabold leading-[1] tracking-tight text-[#e4ded7] sm:text-[45px] md:mb-20 md:text-[60px] lg:text-[72px]"
          wordSpace="mr-[14px]"
          charSpace="mr-[0.001em]"
        />

        {/* Intro Section */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
          <div className="flex w-full flex-col gap-6 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:text-[20px] lg:max-w-[65%] lg:text-[24px]">
            <AnimatedBody text="Hey, I’m Akil — a Full-Stack Developer building human-centric AI tools at the intersection of design, intelligence, and usability. My core focus is GenAI integration in real-world products that scale." />

            <AnimatedBody text="I’m currently working as a Junior Software Intern at SNS InnovationHub, where I deliver client-ready applications powered by LangChain, CrewAI, Gemini 1.5 Flash, and Python. I’ve also deployed local models with Ollama and designed UI systems with Figma and Tailwind." />

            <AnimatedBody text="On the side, I lead and contribute to student tech communities, automate my workflows with custom Chrome extensions, and build experimental projects that bridge productivity with intelligent systems." />
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
              <AnimatedBody text="React, TypeScript, Next.js, Tailwind CSS, Framer Motion, Django, FastAPI, PyMongo, Node.js" />
              <AnimatedBody text="Gemini, OpenAI, LangChain, CrewAI, Ollama, Tesseract, pdfplumber, Streamlit, Hugging Face" />
              <AnimatedBody text="GitHub, Vercel, Docker, Netlify, Notion, Postman, FlutterFlow (beginner)" />
            </div>

            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text="Now Building"
                className="text-[22px] text-[#e4ded7] md:text-[28px] lg:text-[24px]"
                wordSpace="mr-[0.2em]"
                charSpace="mr-[0.01em]"
              />
              <AnimatedBody text="Agentic AI SaaS for interview evaluation" />
              <AnimatedBody text="GitHub–Notion dashboard for developer productivity" />
              <AnimatedBody text="Emotion-aware AI music assistant powered by real-time mood analysis" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
