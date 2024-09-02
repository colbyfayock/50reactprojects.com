import { FaAddressBook, FaBriefcase, FaFlask, FaLeaf, FaProjectDiagram, FaPuzzlePiece, FaRegClone, FaTools } from 'react-icons/fa';

export const PROJECT_TOPICS = [
  {
    title: 'Business & Real-World',
    icon: <FaBriefcase className="w-4 md:w-5 h-auto -translate-y-[1px]" />
  },
  {
    title: 'Fun & Interesting',
    icon: <FaFlask className="w-4 md:w-5 h-auto" />
  },
  {
    title: 'Personal & Portfolio',
    icon: <FaAddressBook className="w-4 md:w-5 h-auto" />
  },
  {
    title: 'Productivity',
    icon: <FaLeaf className="w-4 md:w-5 h-auto -translate-y-[1px]" />
  },
  {
    title: 'Games & Puzzles',
    icon: <FaPuzzlePiece className="w-4 md:w-5 h-auto -translate-y-[1px] translate-x-[1px]" />
  },
  {
    title: 'Tools & Libraries',
    icon: <FaTools className="w-4 md:w-5 h-auto" />
  },
  {
    title: 'Project Add-Ons',
    icon: <FaProjectDiagram className="w-4 md:w-5 h-auto translate-y-[1px]" />
  },
  {
    title: 'Clones',
    icon: <FaRegClone className="w-4 md:w-5 h-auto" />
  },
];