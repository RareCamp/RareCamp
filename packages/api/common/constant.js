import { generateId } from '../utils/id'

export const projectStatuses = {
  ONGOING: 'Ongoing',
}
export const taskStatuses = {
  NOT_STARTED: 'Not Started',
  IN_PROGRESS: 'Not Started',
}
export const defaultProject = {
  name: 'Create a Knock-in mouse',
  description: 'Understand Knock-in mouse models and steps involved in generating it.',
  status: projectStatuses.ONGOING,
}

export const defaultTasks = [{
  name: 'Understand knock-in mouse model',
  description: 'This task is to gain an understanding of what knock-in mouse model is, the high level process to design and build and the cost/time it takes to develop a model.'
    + 'Please work with an expert to determine if this is the right model for you.',
  status: taskStatuses.IN_PROGRESS,
  assignee: [],
  budget: {
    currency: '$',
    amount: 100,
  },
  duration: '9-12 months',
  estimatedStartDate: '2021-04-01T00:00:00.000Z',
  estimatedEndDate: '2022-06-01T00:00:00.000Z',
  actualStartDate: '2021-04-05T00:00:00.000Z',
  actualEndDate: '2021-04-05T00:00:00.000Z',
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
