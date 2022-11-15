import { nanoid } from 'nanoid';
import {
  bankingAndCoverageIcon,
  costumerPaymentsIcon,
  facebookIcon,
  googleIcon,
  hpIcon,
  linkedinIcon,
  microsoftIcon,
  nvidiaIcon,
  oracleIcon,
  personalFinancesIcon,
  teslaIcon,
  twitterIcon,
} from '../assets';

export const links = [
  { id: nanoid(), name: 'about', path: '/about' },
  { id: nanoid(), name: 'pricing', path: '/pricing' },
  { id: nanoid(), name: 'contact', path: '/contact' },
];

export const brands = [
  {
    id: nanoid(),
    name: 'tesla',
    img: teslaIcon,
  },
  {
    id: nanoid(),
    img: microsoftIcon,
    name: 'microsoft',
  },
  {
    id: nanoid(),
    img: hpIcon,
    name: 'hewlett packard',
  },
  {
    id: nanoid(),
    img: oracleIcon,
    name: 'oracle',
  },
  {
    id: nanoid(),
    img: googleIcon,
    name: 'google',
  },
  {
    id: nanoid(),
    img: nvidiaIcon,
    name: 'nvidia',
  },
];

export const features = [
  {
    id: nanoid(),
    title: 'personal finances',
    icon: personalFinancesIcon,
    content:
      'Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.',
  },
  {
    id: nanoid(),
    title: 'banking & coverage',
    icon: bankingAndCoverageIcon,
    content:
      'With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.',
  },
  {
    id: nanoid(),
    title: 'customer payments',
    icon: costumerPaymentsIcon,
    content:
      'It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.',
  },
];

export const socials = [
  {
    id: nanoid(),
    name: 'facebook',
    icon: facebookIcon,
  },
  {
    id: nanoid(),
    name: 'twitter',
    icon: twitterIcon,
  },
  {
    id: nanoid(),
    name: 'linkedin',
    icon: linkedinIcon,
  },
];
