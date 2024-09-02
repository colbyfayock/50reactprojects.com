import { ReactNode } from 'react';
import { FaAddressBook, FaBriefcase, FaFlask, FaLeaf, FaProjectDiagram, FaPuzzlePiece, FaRegClone, FaTools } from 'react-icons/fa';

export const TOPICS_CONFIG: Record<number, { title: string; icon: ReactNode; }> = {
  1: {
    title: 'Business & Real-World',
    icon: <FaBriefcase className="w-4 md:w-5 h-auto -translate-y-[1px]" />
  },
  2: {
    title: 'Fun & Interesting',
    icon: <FaFlask className="w-4 md:w-5 h-auto" />
  },
  3: {
    title: 'Personal & Portfolio',
    icon: <FaAddressBook className="w-4 md:w-5 h-auto" />
  },
  4: {
    title: 'Productivity',
    icon: <FaLeaf className="w-4 md:w-5 h-auto -translate-y-[1px]" />
  },
  5: {
    title: 'Games & Puzzles',
    icon: <FaPuzzlePiece className="w-4 md:w-5 h-auto -translate-y-[1px] translate-x-[1px]" />
  },
  6: {
    title: 'Tools & Libraries',
    icon: <FaTools className="w-4 md:w-5 h-auto" />
  },
  7: {
    title: 'Project Add-Ons',
    icon: <FaProjectDiagram className="w-4 md:w-5 h-auto translate-y-[1px]" />
  },
  8: {
    title: 'Clones',
    icon: <FaRegClone className="w-4 md:w-5 h-auto" />
  },
};