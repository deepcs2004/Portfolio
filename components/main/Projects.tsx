import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center lg:pt-20 pb-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Our Works
      </h1>
      <div className="h-full w-full grid md:grid-cols-3 gap-10 px-10">
      
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Books Website"
          description="Explore a curated collection of thought-provoking modern books at Modern Books Website. Elevate your reading experience with our diverse literary selection."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Portfolio "
          description="Immerse yourself in creativity at Interactive Portfolio. Engage with dynamic projects showcasing skills and passion for a memorable online experience."
        />
        

        <ProjectCard
          src="/CardImage2.png"
          title="SAAS Website "
          description="Experience innovation with our SAAS Website. Empower your business with seamless solutions for enhanced efficiency and a competitive edge."
        />

        <ProjectCard
          src="/CardImage3.png"
          title="Construction Company 1"
          description="Building dreams into reality with our Construction Company. Quality craftsmanship, reliability, and excellence in every project we undertake."
        />

        <ProjectCard
          src="/CardImage4.png"
          title="Construction Company 2"
          description="Crafting a legacy of strength and structure, our Construction Company delivers exceptional results with precision, professionalism, and passion."
        />

        <ProjectCard
          src="/CardImage5.png"
          title="Construction Company 3"
          description="Constructing tomorrow's landmarks today. Our Construction Company is committed to delivering excellence through skill, dedication, and visionary expertise."
        />

        <ProjectCard
          src="/CardImage6.png"
          title="Construction Company 4"
          description="From blueprints to brilliance, our Construction Company transforms visions into concrete reality. Elevate your projects with our commitment to quality and innovation."
        />

        <ProjectCard
          src="/CardImage7.png"
          title="Construction Company 5"
          description="Unleashing the power of construction innovation. Our Company stands as a beacon of reliability, integrity, and superior craftsmanship in every endeavor."
        />

        <ProjectCard
          src="/CardImage8.png"
          title="Medical Company"
          description="Promoting well-being and healing, our Medical Company is dedicated to providing compassionate care, cutting-edge solutions, and a healthier future for all."
        />

        <ProjectCard
          src="/CardImage9.png"
          title="Medical Company 2"
          description="Elevating healthcare standards with our Medical Company. Committed to excellence, innovation, and a steadfast focus on improving lives through comprehensive medical solutions."
        />

        <ProjectCard
          src="/CardImage10.png"
          title="Doctor Porfolio"
          description="Explore my professional journey and expertise on my Doctor Portfolio Website. A showcase of passion, skill, and dedication to healthcare excellence."
        />

        <ProjectCard
          src="/CardImage11.png"
          title="Web3 Startup"
          description="Unleash the potential of digital assets with our NFT Startup. Transforming creativity into unique, tradable tokens, we redefine the future of ownership and expression."
        />

        <ProjectCard
          src="/CardImage12.png"
          title="Restraunt 1"
          description="Savor the extraordinary at our Restaurant. Indulge in culinary delights, crafted with passion and served with a side of unforgettable experiences."
        />

        <ProjectCard
          src="/CardImage13.jpg"
          title="Restraunt 2"
          description="Embark on a culinary journey at our Restaurant. From delectable dishes to a welcoming ambiance, we create moments that linger on your palate and in your memories."
        />
      </div>
    </div>
  );
};

export default Projects;



