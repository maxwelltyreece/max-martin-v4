export type Project = {
  id: string
  title: string
  shortDescription: string
  longDescription: string[]
  repoUrl?: string
}

export const projects: Project[] = [
  {
    id: "maureen-onwunali",
    title: "Maureen Onwunali",
    shortDescription:
      "Creative collaboration exploring sound, identity, and visual language.",
    longDescription:
      [
        "The Maureen Onwunali website is a digital portfolio and creative home for the spoken-word poet, performer, and cultural voice. Designed",
        "At its core, the site functions as both a showcase and a living archive. From a technical perspective, the site is built using modern front-end tools (NextJS ) and deployed with performance and accessibility in mind. Fast load times, responsive layouts, and a restrained visual language help ensure that the work itself remains the focus across all devices. As an ongoing project, the website is designed to evolve alongside Maureen’s creative output, functioning not just as a portfolio but as an adaptable digital space that grows with her artistic journey."
      ]
  },
  {
    id: "emotion-driven-visualisation",
    title: "Emotion Driven Visualisation",
    shortDescription:
      "An experimental music-tech project translating emotion into visual form.",
    longDescription:
        [
            "This final year project explores how emotional content in music can be modelled, interpreted, and translated into dynamic visual representations. The core aim was to bridge my background in music production and performance with my training in computer science, resulting in a system that responds to sound not just technically, but expressively.",
            "The project investigates existing research into music emotion, particularly the limitations of traditional discrete emotion models, and instead adopts a more continuous approach to emotional representation. Musical features such as tempo, spectral content, dynamics, and harmonic movement are analysed and mapped to parameters within a real-time visual environment. Rather than producing literal or prescriptive visuals, the system prioritises ambiguity and fluidity, allowing emotional qualities to emerge through motion, colour, and spatial change.",
            "From a technical perspective, the project involved building a full processing pipeline, including audio feature extraction, data normalisation, and visual parameter mapping. Emphasis was placed on designing an architecture that was modular and extensible, enabling experimentation with different emotional models and visual responses without restructuring the entire system. Performance and responsiveness were also key considerations, particularly when working with real-time audio input.",
            "Creatively, this project reflects my interest in how music is experienced beyond sound alone. By treating emotion as a spectrum rather than a label, the visual output becomes an extension of the music rather than an illustration of it. The final system functions both as a research artefact and a creative tool, suitable for live performance contexts, installations, or further exploration within music technology and audiovisual practice."
        ]
    
  },
  {
    id: "g-saver",
    title: "Gsaver",
    shortDescription:
      "A student-centric budgeting and finance tracking application.",
    longDescription:
        [
            "Gsaver is a student-centric budgeting and finance tracking application designed to help young users take control of their personal finances and build healthier monetary habits. Originally developed during the Google BGN Hackathon 2023 and placing 2nd overall, Gsaver was built by a motivated small team and awarded 2nd place in the competition, highlighting both its utility and polish.",
            "The core goal behind Gsaver was to address a common challenge faced by students: managing irregular incomes, balancing expenses, and understanding where money is being spent. Rather than presenting raw numbers alone, Gsaver’s interface is focused on clarity and responsiveness, making financial insights accessible even to users with minimal budgeting experience. Visual feedback and real-time updates empower users to see patterns and trends at a glance, reducing stress and encouraging proactive planning.",
            "From a technical perspective, Gsaver blends modern frontend development with intuitive state management. The application leverages React for its UI architecture, enabling reactive updates and modular component design. Tailwind CSS provides a responsive, utility-first styling foundation that supports a cohesive visual system across devices, while tools like CRACO streamline configuration and development workflows. State is managed with React’s Context API (or Redux where applicable), maintaining a predictable and scalable data layer that adapts smoothly as the app grows.",
            "Throughout the project, emphasis was placed on user experience, accessibility, and extensibility. While core features include tracking income and categorising spending, the application was built with future expansion in mind — for example, the addition of alerts, savings goals, or data visualisations. Gsaver exemplifies practical problem-solving through software: it’s not just a tool, but an approachable first step toward financial literacy for students."
        ],
    repoUrl: "https://github.com/maxwelltyreece/Gsaver",
  },
  {
    id: "gobl",
    title: "Gobl",
    shortDescription:
        "A full-stack wellness tracker focused on food, hydration, and personal well-being.",
    longDescription:
        [
            "Gobl is a student-driven, full-stack wellness tracker built as a collaborative group project. Designed to help users log and track food intake, hydration, and personal well-being, the application bridges practical self-care with real-world software engineering practices. Developed by a multidisciplinary team of nine contributors, Gobl emphasises modular architecture, clean UI, and extensibility for future growth. ",
            "At its core, Gobl allows users to record meals, log hydration, and monitor wellness habits over time. The structure encourages consistent self-reflection and awareness of daily routines, a key component of holistic health in busy student and professional lifestyles. This focus on wellbeing distinguishes the project from typical productivity tools by combining practical tracking features with a design that emphasises usability and accessibility for a broad audience.",
            "From a technical standpoint, Gobl showcases a full-stack approach to application development. The frontend is built with React Native to deliver a responsive, cross-platform mobile experience, while the backend leverages Node.js to handle data persistence, user authentication, and API logic. The team structured the codebase to support rapid iteration and team collaboration, using shared conventions, clear module boundaries, and well-documented installation instructions to onboard contributors quickly. "
        ],
    repoUrl: "https://github.com/maxwelltyreece/CloudChasers",
  },
  {
    id: "school-simulator",
    title: "School Simulator",
    shortDescription:
        "An interactive web-based simulation game exploring school life dynamics.",
    longDescription:
        [
            "School-Simulator is an interactive web-based simulation game designed to explore the dynamics of school life through a blend of puzzle-style and decision-making games. Built as a project during A-level studies with a focus on modular design and rich visuals, the simulator invites the user to navigate common challenges found in educational environments.",
            "At its core, School-Simulator is structured around a simulation loop, where players make choices that influence outcomes within the game. From a technical perspective, the project was built using C# and Unity, with all characters, maps, and items illustrated and designed by me.",
            "Developing this project allowed me to explore the full creative pipeline, from concept and visual design through to implementation and gameplay logic. Particular emphasis was placed on creating systems that could be easily extended, enabling new mechanics, scenarios, and interactions to be added without reworking the core structure. The project represents an early but formative exploration of game development, combining problem-solving, creative design, and technical execution, and laid the groundwork for my continued interest in building interactive, user-driven experiences."
        ],
    repoUrl: "https://github.com/maxwelltyreece/School-Simulator",
  },
]
