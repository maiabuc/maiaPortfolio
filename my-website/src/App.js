import ThisWebsite from "./images/ThisWebsite.png";
import BamOCR from "./images/BameOcr.png";
import quatroDosSH from "./images/quatroDos.png";
import Malloc from "./images/Malloc.png";
import LinkLearn from "./images/LinkandLearn.png";
import Piquette from "./images/Piquette.png";
import Tiger from "./images/Tiger.jpeg";
import AudioPlayer from "./AudioPlayer";

function ProjectCard({
  title,
  subtitle,
  bgColor,
  description,
  children,
  image,
  link,
}) {
  return (
    <div className="project-card">
      <div className={`project-content p-6 ${bgColor}`}>
        {/* If there's an image, no white background */}
        <div
          className={`w-full h-32 md:h-40 mb-4 flex items-center justify-center ${
            image ? "" : "bg-white"
          }`}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            children
          )}
        </div>
        <h3 className="font-bold text-lg text-dark">{title}</h3>
        <p className="text-gray text-sm">{subtitle}</p>
      </div>
      <div className={`hidden-text ${bgColor}`}>
        {description}
        <p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-bold mt-2 inline-block hover:underline"
            >
              Click and GO →
            </a>
          )}
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <header className="mb-16">
        <div className="text-3xl mb-2">👋</div>
        <h1 className="main-text">
          I'm Maia Bucamp
          <p> a student in CS at EPITA</p>
          <p className="text-2xl font-bold text-dark">
            Here is a little bit about my projects
          </p>
        </h1>
        <h4>(Epita projects are required to have private repositories)</h4>
      </header>
      <AudioPlayer />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 - Link&Learn */}
        <ProjectCard
          title="Link&Learn"
          subtitle="EPITA StartUp program • In process • 2025"
          bgColor="bg-pale-peach"
          description="We are building a StartUp and we only have 4 months! Made with React, Js, Css and HTML"
          image={LinkLearn}
        />

        {/* Project 1 - Link&Learn */}
        <ProjectCard
          title="Tiger Compiler"
          subtitle="EPITA • In process • 2025"
          bgColor="bg-pale-blue"
          description="The project aims at the implementation of a compiler in C++. C++ is by no means an adequate language to study compilers but it is a school requirement"
          image={Tiger}
        />

        {/* Project 2 42SH*/}
        <ProjectCard
          title="42SH"
          subtitle="EPITA • 2024"
          bgColor="bg-pale-pink"
          description="Developed a UNIX shell in C within 
          one month as part of a team of four."
          image={quatroDosSH}
        />

        {/* Project 3 - C projects EPITA */}
        <ProjectCard
          title="Malloc, MyFind, BitTorrent"
          subtitle="EPITA• 2024"
          bgColor="bg-pale-mint"
          description="Implemented my own malloc, find, and a BitTorrent client
          as part of one-week university projects in C."
          image={Malloc}
        ></ProjectCard>

        {/* Project 5 OCR-SUDOKU*/}
        <ProjectCard
          title="OCR Sudoku"
          subtitle="EPITA • 2023"
          bgColor="bg-pale-blue"
          description="Developed an Optical Character
           Recognizer that solves sudokus in C."
          image={BamOCR}
          link="https://briossant.com/BAME-OCR/"
        />
        {/* Project 4  VIDEO GAME PIQUETTE*/}
        <ProjectCard
          title="Video Game Piquette"
          subtitle="EPITA • 2022-2023"
          bgColor="bg-pale-peach"
          image={Piquette}
          description="Developed a video game in C# and created it's 3D characters with blender."
          link="https://briossant.com/piquette/"
        />

        {/* Project 6 This Website*/}
        <ProjectCard
          title="This Website"
          subtitle=" • 2025"
          bgColor="bg-pale-mint"
          description="Made with React and the knowledge the internet provided :)"
          image={ThisWebsite}
        />
      </div>
    </div>
  );
}

export default App;
