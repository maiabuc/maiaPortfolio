import ThisWebsite from "./images/ThisWebsite.png";
import BamOCR from "./images/BameOcr.png";
import quatroDosSH from "./images/quatroDos.png";
import Malloc from "./images/Malloc.png";
import LinkLearn from "./images/LinkandLearn.png";
import Piquette from "./images/Piquette.png";
import Tiger from "./images/Tiger.jpeg";
import AudioPlayer from "./AudioPlayer";
import Bacteria from "./images/Bacteria.png";
import ML from "./documents/ML_Project.pdf";
import EnglishCV from "./documents/Resume_MaiaBUCAMP.pdf";
import FrenchCV from "./documents/CV_MaiaBucamp_fr.pdf";

function ProjectCard({
  title,
  subtitle,
  bgColor,
  description,
  children,
  image,
  link,
  document,
}) {
  return (
    <div className="project-card">
      <div className={`project-content p-6 ${bgColor}`}>
        {/* If there's an image, no white background */}
        <div
          className={`w-full h-32 md:h-40 mb-4 flex items-center justify-center ${image ? "" : "bg-white"
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
          {document && (
            <a
              href={document}
              download="Project Specifications"
              className="text-blue-600 font-bold mt-2 inline-block hover:underline"
            >
              Download Project Specifications →
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
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <a
          href={EnglishCV}
          download="CV-MaiaBucamp"
          className="font-bold mt-2 hover:underline"
          style={{ color: "#8B004D" }}
        >
          Download my Resume →
        </a>
        <a
          href={FrenchCV}
          download="CV-MaiaBucamp_fr"
          className="font-bold mt-2 hover:underline"
          style={{ color: "#8B004D" }}
        >
          Télécharger mon CV →
        </a>
      </div>
      <p></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 - Hackathon IBM x Airbus x AWS */}
        <ProjectCard
          title="Hackathon IBM x Airbus x AWS"
          subtitle="Télécom SudParis • 2026"
          bgColor="bg-pale-pink"
          description=""
        />

        {/* Project 2 - PMS */}
        <ProjectCard
          title="PMS"
          subtitle="EPITA SIGL • In process • 2026"
          bgColor="bg-pale-blue"
          description="Built a 5-year IT strategy for a fictional company facing delays and compliance failures, diagnosing root causes and structuring a multi-year transformation roadmap. Group of 6, 1-year project."
        />

        {/* Project 3 - ACOO */}
        <ProjectCard
          title="ACOO"
          subtitle="EPITA SIGL • 2026"
          bgColor="bg-pale-yellow"
          description="Modeled a fictional client's application landscape through use case diagrams, sequence diagrams, and a unified process diagram, turning ambiguous requirements into a clear system view. Group of 5, 2 weeks."
          link="askaccess"
        />

        {/* Project 4 - ARCL */}
        <ProjectCard
          title="ARCL"
          subtitle="EPITA SIGL • 2026"
          bgColor="bg-pale-green"
          description="Built a hybrid cloud spanning OpenStack (Hetzner) and GCP, applying resilience principles and data persistence across providers. Group of 6, 2 months."
        />

        {/* Project 5 - CNP */}
        <ProjectCard
          title="CNP"
          subtitle="EPITA SIGL • In process • 2026"
          bgColor="bg-pale-orange"
          description="Developed a multi-cloud (3 providers) deployment platform with RBAC, letting teams ship applications without managing underlying infrastructure. Group of 6, 1-year project (ongoing)."
        />

        {/* Project 6 - PIT */}
        <ProjectCard
          title="PIT"
          subtitle="EPITA SIGL • In process • 2026"
          bgColor="bg-pale-purple"
          description="Designed an IoT wristband for festival data analytics, building the full startup case around it — product, business model, and go-to-market. Group of 6, 1-year project (ongoing)."
        />

        {/* Project 7 - MEPA */}
        <ProjectCard
          title="MEPA"
          subtitle="EPITA SIGL • 2026"
          bgColor="bg-pale-teal"
          description="Designed a website for a fictional Ministry of Education and CNIL, running user research on AI usage and its ethical implications, delivered with Agile methodology. Group of 6, 1 month."
        />

        {/* Project 8 - MOAE */}
        <ProjectCard
          title="MOAE"
          subtitle="EPITA SIGL • 2026"
          bgColor="bg-pale-coral"
          description="Led business analysis ('maîtrise d'ouvrage') on a fictional HR information system transformation, proposing a solution to modernize the SIRH. Group of 6, 1 month."
        />

        {/* Project 9 - SOAR */}
        <ProjectCard
          title="SOAR"
          subtitle="EPITA SIGL • 2026"
          bgColor="bg-pale-mint"
          description="Proposed a SAP architecture for a fictional Danone use case, structuring the enterprise system design around their business processes. Group of 6, 3 weeks."
        />

        {/* Project 10 - UBSI */}
        <ProjectCard
          title="UBSI"
          subtitle="EPITA SIGL • In process • 2026"
          bgColor="bg-pale-lavender"
          description="Building the full information system for an airline, end to end, as part of a 50-person project in a 6-person team. Acting as DevOps for 6 applications within the system. 1-year project (ongoing)."
        />

        {/* Project 1 - Link&Learn */}
        <ProjectCard
          title="Link&Learn"
          subtitle="EPITA StartUp program • Failed • 2025"
          bgColor="bg-pale-peach"
          description="Failed due to lack of team members. The project was to create a platform to connect students and teachers to learn together. The project was developed in React and Node.js."
          image={LinkLearn}
        />

        {/* Project 1 - Link&Learn */}
        <ProjectCard
          title="Tiger Compiler"
          subtitle="EPITA • 2025"
          bgColor="bg-pale-blue"
          description="The project aims at the implementation of a compiler in C++. C++ is by no means an adequate language to study compilers but it is a school requirement"
          image={Tiger}
        />
        {/* Project 2 Bacteria KHU*/}
        <ProjectCard
          title="CNN Bacteria Segmentation"
          subtitle="Introduction to Machine Learning KHU • 2024"
          bgColor="bg-pale-mint"
          description="Detection and segmentation of bacteria. After training the accuracy given was 97.53% using validation data."
          image={Bacteria}
          document={ML}
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
