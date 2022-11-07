import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Movies',
    path: '/movies',
    icon: <BiIcons.BiMovie/>,
    cName: 'nav-text'
  },
  {
    title: 'Music',
    path: '/music',
    icon: <IoIcons.IoMdMusicalNote />,
    cName: 'nav-text'
  },
  {
    title: 'Discover',
    path: '/discover',
    icon: <AiIcons.AiFillCompass />,
    cName: 'nav-text'
  },
  {
    title: 'More',
    path: '/more',
    icon: <IoIcons.IoIosArrowForward/>,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
