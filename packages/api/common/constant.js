import { generateId } from '../utils/id'

export const PROJECT_STATUSES = {
  ONGOING: 'Ongoing',
}
export const TASK_STATUSES = {
  NOT_STARTED: 'Not Started',
  IN_PROGRESS: 'In-Progress',
}
export const DEFAULT_PROJECT = {
  name: 'Create a Knock-in mouse',
  description: 'Understand Knock-in mouse models and steps involved in generating it.',
  status: PROJECT_STATUSES.ONGOING,
}

export const DEFAULT_TASKS = [{
  name: 'Understand knock-in mouse model',
  description: 'This task is to gain an understanding of what knock-in mouse model is, the high level process to design and build and the cost/time it takes to develop a model.'
    + 'Please work with an expert to determine if this is the right model for you.',
  status: TASK_STATUSES.IN_PROGRESS,
  // TODO: assignee to be defaulted to the current user
  assignee: [],
  budget: {
    currency: '$',
    amount: 100,
  },
  duration: '9-12 months',
  notes: ['<div>Understand if a knock in mouse model is necessary for your disease. It '
    + 'typically takes 9-12 months to develop a new knock-in model. You will need an expert'
    + ' to design the mouse model and then work with a lab to generate the model.Use this space to'
    + ' document your conversations, thoughts and bookmark links you can later refer back to.ContactsTo do</div>'],
  guide: {
    id: generateId(),
    detailsUrl: 'https://en.wikipedia.org/wiki/Gene_knock-in>',
    title: 'About Knock-in mouse models',
    imageUrl: 'https://proserve-bucket.s3-us-west-2.amazonaws.com/Screen+Shot+2021-03-19+at+4.38.39+AM.png',
    about: 'A knock-in mouse defines an animal model in which a gene sequence of interest is altered by one-for-one '
      + 'substitution with a transgene, or by adding gene sequences that are not found within the locus.',
  },
  // TODO: to be fill by @sanathkr
  serviceProviders: [
    {
      id: '<uuid>',
      name: '<string>',
      type: '<string>',
      shortDescription: '<string>',
      websiteUrl: '<string>',
      email: '<string>',
    },
  ],
}]
