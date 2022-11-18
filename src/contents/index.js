import { nanoid } from 'nanoid';
import {
  bankingAndCoverageIcon,
  costumerPaymentsIcon,
  personalFinancesIcon,
} from '../assets';

export const links = [
  { id: nanoid(), name: 'about', path: '/about' },
  { id: nanoid(), name: 'pricing', path: '/pricing' },
  { id: nanoid(), name: 'contact', path: '/contact' },
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

export const plans = [
  {
    id: nanoid(),
    plan: 'free',
    price: '0.00',
    description:
      'Build and test using our core set of products with up to 100 API requests ',
    features: [
      {
        id: nanoid(),
        feature: 'transactions',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'auth',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'identity',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'investments',
        included: false,
      },
      {
        id: nanoid(),
        feature: 'assets',
        included: false,
      },
      {
        id: nanoid(),
        feature: 'liabilities',
        included: false,
      },
      {
        id: nanoid(),
        feature: 'income',
        included: false,
      },
    ],
  },
  {
    id: nanoid(),
    plan: ' basic',
    price: '249.00',
    description:
      'Build and test using our core set of products with up to 100 API requests ',
    features: [
      {
        id: nanoid(),
        feature: 'transactions',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'auth',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'identity',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'investments',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'assets',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'liabilities',
        included: false,
      },
      {
        id: nanoid(),
        feature: 'income',
        included: false,
      },
    ],
  },
  {
    id: nanoid(),
    plan: 'premium',
    price: '499.00',
    description:
      'Get tailored solutions, volume pricing, and dedicated support for your team ',
    features: [
      {
        id: nanoid(),
        feature: 'transactions',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'auth',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'identity',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'investments',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'assets',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'liabilities',
        included: true,
      },
      {
        id: nanoid(),
        feature: 'income',
        included: true,
      },
    ],
  },
];
