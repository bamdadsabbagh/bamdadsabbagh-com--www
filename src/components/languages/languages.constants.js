import babelIcon from '@iconify/icons-simple-icons/babel';
import cypressIcon from '@iconify/icons-simple-icons/cypress';
import d3dotjsIcon from '@iconify/icons-simple-icons/d3dotjs';
import gitIcon from '@iconify/icons-simple-icons/git';
import githubActionsIcon from '@iconify/icons-simple-icons/githubactions';
import jestIcon from '@iconify/icons-simple-icons/jest';
import nextdotjsIcon from '@iconify/icons-simple-icons/nextdotjs';
import pythonIcon from '@iconify/icons-simple-icons/python';
import reactIcon from '@iconify/icons-simple-icons/react';
import testingLibraryIcon from '@iconify/icons-simple-icons/testinglibrary';
import threedotjsIcon from '@iconify/icons-simple-icons/threedotjs';
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
import vueIcon from '@iconify/icons-simple-icons/vuedotjs';
import webpackIcon from '@iconify/icons-simple-icons/webpack';
import {Icon} from '@iconify/react';
import shuffle from 'just-shuffle';
import React from 'react';

export const LanguagesConstants = shuffle([
  {
    text: 'TypeScript',
    icon: <Icon icon={typescriptIcon} />,
    color: '#007acc',
  },
  {
    text: 'React',
    icon: <Icon icon={reactIcon} />,
    color: '#60DBFB',
  },
  {
    text: 'Next.js',
    icon: <Icon icon={nextdotjsIcon} />,
    color: '#000000',
  },
  {
    text: 'Jest',
    icon: <Icon icon={jestIcon} />,
    color: '#99425B',
  },
  {
    text: 'Testing Library',
    icon: <Icon icon={testingLibraryIcon} />,
    color: '#DB2F2F',
  },
  {
    text: 'Cypress',
    icon: <Icon icon={cypressIcon} />,
    color: '#3C3C3C',
  },
  {
    text: 'webpack',
    icon: <Icon icon={webpackIcon} />,
    color: '#1C78C0',
  },
  {
    text: 'Babel',
    icon: <Icon icon={babelIcon} />,
    color: '#F9DC3D',
  },
  {
    text: 'GitHub Actions',
    icon: <Icon icon={githubActionsIcon} />,
    color: '#2088FF',
  },
  {
    text: 'D3',
    icon: <Icon icon={d3dotjsIcon} />,
    color: '#F79144',
  },
  {
    text: 'Three.js',
    icon: <Icon icon={threedotjsIcon} />,
    color: '#000000',
  },
  {
    text: 'Git',
    icon: <Icon icon={gitIcon} />,
    color: '#E94E31',
  },
  {
    text: 'Python',
    icon: <Icon icon={pythonIcon} />,
    color: '#FFD43B',
  },
  {
    text: 'Vue.js',
    icon: <Icon icon={vueIcon} />,
    color: '#41B883',
  },
]);
