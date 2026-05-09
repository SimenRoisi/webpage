export const portfolioData = {
  profile: {
    name: "Simen Røisi",
    tagline: "Fullstack AI Developer",
    about: "Welcome to my personal portfolio. Here you'll find a curated collection of my selected projects. Links to both demo and source code can be found under each project.",
    pictureUrl: "/portrett_litenfil.jpg"
  },
  experience: {
    work: `I'm a fullstack AI developer focused on building practical AI systems and products. I recently joined KonversAI, where I work across the entire stack developing AI-driven applications and integrations, currently with a focus on React and JavaScript.

I hold a master's degree in Autonomous Systems from DTU, specializing in computer vision, deep learning, robotics, and image analysis. My interests span applied AI, LLM systems, intelligent automation, and building software that connects advanced machine learning with real user needs.`,
    workLinks: [{ label: 'KonversAI', href: 'https://konvers.ai/en/' }],
    education: [
      {
        institution: "Technical University of Denmark",
        logo: "/dtu-logo.png",
        details: "M.Sc. Autonomous Systems"
      },
      {
        institution: "University of Stavanger",
        logo: "/uis-logo.png",
        details: "B.Eng Electrical Engineering"
      }
    ]
  },
  projects: [
    {
      id: 1,
      title: "Drone-Based Corrosion Detection (Master's Thesis)",
      description:
        "From Pixels to Persistent Voxels: a drone-based pipeline for automated corrosion detection in marine vessels. UNet segmentation on RGB imagery, fused with LiDAR via OctoMap into persistent 3D voxel maps for analysis—Python, ROS, and real-time-oriented processing.",
      githubUrl:
        "https://github.com/SimenRoisi/Thesis-Drone-Based-Corrosion-Detection-in-Marine-Vessels",
      demoUrl: "https://www.youtube.com/watch?v=CAsVO3fOcgg",
      imageUrl: "/project-drone-corrosion-placeholder.svg",
      hoverExpand: true,
      tags: ["Python", "Deep Learning", "ROS", "Computer Vision"]
    },
    {
      id: 2,
      title: "SkyComfort RAG Support Chatbot",
      description:
        "A domain-bound airline support assistant built with FastAPI and OpenAI: pgvector retrieval over a curated knowledge base, guardrails for off-topic queries, chat memory with query reformulation, and a Tailwind chat UI—containerized with Docker and PostgreSQL.",
      githubUrl: "https://github.com/SimenRoisi/RAG-chatbot",
      demoUrl: "https://skycomfort.vercel.app/",
      imageUrl: "/project-rag-chatbot-placeholder.svg",
      hoverExpand: true,
      tags: ["Python", "FastAPI", "RAG", "PostgreSQL"]
    },
    {
      id: 3,
      title: "WeatherETL",
      description:
        "End-to-end weather ETL: pull from yr.no and Open-Meteo, normalize timezones, units, and variables, load layered raw/normalized tables, then expose consensus forecasts and source-deviation views through a FastAPI API—SQLite locally, PostgreSQL in production, deployed on Vercel with Mangum.",
      githubUrl: "https://github.com/SimenRoisi/WeatherETL",
      demoUrl: "https://weather-etl.vercel.app",
      imageUrl: "/project-weather-etl-placeholder.svg",
      hoverExpand: true,
      tags: ["Python", "FastAPI", "ETL", "SQLAlchemy"]
    }
  ]
};
