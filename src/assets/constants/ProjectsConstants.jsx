import BoseImg from "../projects/bose.png";
import MoodifyImg from "../projects/moodify-website.png";
import IOLabsImg from "../projects/iolabs.png";
import PortfolioImg from "../projects/portfolio.png";
import SplineImg from "../projects/spine-website.png";

export const projects = [
    {
      id: 1,
      title: 'Multi Mode AI Chatbot',
      description:
        'Advanced AI chatbot with multiple specialized modes including Chat, Auto, Cinephile, Game, and Research modes.',
      techStack: ["React.js", "Tailwind CSS", "RAWG API", "TMDB API" ,"SERPER API" ,"Google gemini API"],
      img: BoseImg,
      colorClass: 'indigo-400',
      link: 'https://chat-box-3hk3.onrender.com/chat',
    },
    {
      id: 2,
      title: 'Sneaker Website Landing Page',
      description:
        'Dynamic e-commerce landing page for sneakers with product showcase and interactive design.',
      techStack: ['React', 'Tailwind', 'Cursor AI'],
      img: IOLabsImg,
      colorClass: 'stone-400',
      link: 'https://sneaker-website-landing-page.netlify.app/',
    },
    {
      id: 3,
      title: 'Streaming Service Landing Page',
      description:
        'Modern, responsive landing page for a streaming service with interactive UI elements and smooth animations.',
      techStack: ['React', 'Tailwind','Framer Motion', 'TMDB API'],
      img: PortfolioImg,
      colorClass: 'amber-400',
      link: 'https://streaming-app-landing-page.netlify.app/',
    },
   
    {
      id: 4,
      title: 'Pokedex',
      description:
        'Pokedex web app to search any pokemon with 1000+ pokemons with images and every detail about them, it has retro style and with original pokedex style. it uses PokeAPI for fetching pokemon data and uses HTML, Tailwind, Next.js, and typescript',
      techStack: ['Next.js', 'Tailwind CSS', 'PokeAPI'],
      img: SplineImg,
      colorClass: 'orange-400',
      link: 'https://pokedex-five-nu-13.vercel.app/',
    },
  ];