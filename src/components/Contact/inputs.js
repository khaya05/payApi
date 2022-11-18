import { nanoid } from 'nanoid';

export const inputs = [
  {
    id: nanoid(),
    name: 'name',
    type: 'text',
    placeholder: 'name',
    errorMessage: "This field can't be empty",
    pattern: '(.|s)*S(.|s)*',
    required: true,
  },
  {
    id: nanoid(),
    name: 'email',
    type: 'email',
    placeholder: 'email address',
    errorMessage: "This field can't be empty",
    pattern: '(.|s)*S(.|s)*',
    required: true,
  },
  {
    id: nanoid(),
    name: 'company name',
    type: 'text',
    placeholder: 'company name',
    errorMessage: "This field can't be empty",
    pattern: '(.|s)*S(.|s)*',
    required: true,
  },
  {
    id: nanoid(),
    name: 'title',
    type: 'text',
    placeholder: 'title',
    errorMessage: "This field can't be empty",
    pattern: '(.|s)*S(.|s)*',
    required: true,
  },
  {
    id: nanoid(),
    name: 'name',
    type: 'textarea',
    placeholder: 'message',
    errorMessage: "This field can't be empty",
    pattern: '(.|s)*S(.|s)*',
    required: true,
  },
];
