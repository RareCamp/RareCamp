import { generateId } from '../utils/id'

export const PROJECT_STATUSES = {
  ONGOING: 'Ongoing',
}
export const TASK_STATUSES = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
  NOT_STARTED: 'not-started',
}

const sps = {
  vigene: {
    serviceProviderId: generateId(),
    name: 'Vigene Biosciences',
    type: 'Biomedical research',
    logoURL: 'https://ww1.prweb.com/prfiles/2020/01/29/16870278/gI_101804_NewsImage_vcsPRAsset_2387631_101804_02b4051b-7b29-4733-80dd-d2baea447b67_0.png',
    shortDescription: 'Vigene offers High Quality Viral Vectors & Plasmids. Trusted Resource For AAV Lentivirus Production, cGMP & Cloning Services. Request A Quote Today!',
    websiteUrl: 'https://www.vigenebio.com/',
    email: 'sanath@gpx4.org',
  },
  criver: {
    serviceProviderId: generateId(),
    name: 'Charles River',
    type: 'Biotech services',
    logoURL: 'https://mms.businesswire.com/media/20201029005122/en/834441/23/charles_river_logo.jpg',
    shortDescription: 'Charles River provides products and services to help expedite the discovery, early-stage development and safe manufacture of novel drugs and therapeutics.',
    websiteUrl: 'https://www.criver.com',
    email: 'sanath@gpx4.org',
  },
  cyagen: {
    serviceProviderId: generateId(),
    name: 'Cyagen',
    type: 'Biotech services',
    logoURL: 'https://web.cdn.cyagen.com/static/img/web/us/public/logo-3.jpg',
    shortDescription: 'Cyagen is the world\'s largest provider of custom-engineered mouse and rat models. Cyagen\'s services have become well known for their top quality,',
    websiteUrl: 'https://www.cyagen.com/us/en/',
    email: 'sanath@gpx4.org',
  },
  jax: {
    serviceProviderId: generateId(),
    name: 'Jacksons Lab',
    type: 'Biomedical research',
    logoURL: 'https://www.jax.org/_res/img/logo.png',
    shortDescription: 'The Jackson Laboratory is an independent, nonprofit biomedical research institution.',
    websiteUrl: 'https://www.jax.org/',
    email: 'sanath@gpx4.org',
  },
  ibx: {
    serviceProviderId: generateId(),
    name: 'Independence Blue Cross',
    type: 'Biomedical research',
    logoURL: 'https://news.ibx.com/wp-content/uploads/2020/06/logo1200x790.jpg',
    shortDescription: 'Independence Blue Cross (IBX) offers affordable health care, dental, vision and Medicare plans in Philadelphia and southeastern Pennsylvania.',
    websiteUrl: 'https://www.ibx.com',
    email: 'sanath@gpx4.org',
  },
}

export const DEFAULT_PROJECTS = {
  Planning: {
    name: 'Create a Knock-in mouse',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [],
  },
  'Create a Knock-in mouse': {
    name: 'Create a Knock-in mouse',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.jax],
  },
  'Create a Knock-out mouse': {
    name: 'Create a Knock-out mouse',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.jax],
  },
  'Create Patient-Derived Fibroblasts': {
    name: 'Create Patient-Derived Fibroblasts',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.ibx],
  },
  'Create Patient-Derived iPSCs': {
    name: 'Create Patient-Derived iPSCs',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.ibx],
  },
  'Construct Design': {
    name: 'Create Patient-Derived iPSCs',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [],
  },
  'Plasmid Construction': {
    name: 'Plasmid Construction',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.vigene],
  },
  'In-Vitro Verification Study (optional)': {
    name: 'In-Vitro Verification Study (optional)',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.jax],
  },
  'Filing a patent': {
    name: 'Filing a patent',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [],
  },
  'Non-GMP AAV Production': {
    name: 'Non-GMP AAV Production',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.vigene],
  },
  'Proof-of-concept study': {
    name: 'Proof-of-concept study',
    description: '',
    status: PROJECT_STATUSES.ONGOING,
    serviceProviders: [sps.criver, sps.jax],
  },
}

export const DEFAULT_PROJECTS_TASKS = {
  Planning: [{
    name: 'Expert consultation to identify gaps and create a plan',
    description: 'Connect with an expert, go through the gap analysis checklist and determine next steps',
  }, {
    name: 'Create a team',
    description: `- Clinician KOL for the disease (advocate) for observation & follow up, keep them along in your journey
- Disease molecular biology expert (gene/protein function)
- Project Manager (must-have, to save time/effort)`,
  }, {
    name: 'Create a budget & fundraising plan',
    description: '- Milestone for fundraising',
  }],
  'Create a Knock-in mouse': [{
    name: 'Understand if a knock-in mouse model is required to model the disease',
    description: '',
  }, {
    name: 'Connect with an expert/advisor to design construct',
    description: '',
  }, {
    name: 'Identify & contact a service provider to generate the mouse model',
    description: '',
  }, {
    name: 'Identify & contact a service provider to characterize / phenotype the mouse model',
    description: '',
  }, {
    name: 'Identify service provider to bank / cryopreserve the mouse line',
    description: '',
  }, {
    name: 'Phenotype the developed model relevant to gene therapy',
    description: '',
  }],
  'Create a Knock-out mouse': [{
    name: 'Understand if a knock-out mouse model is required to model the disease; identify region of the gene that need to be removed',
    description: '',
  }, {
    name: 'Connect with an expert/advisor to design targeting construct',
    description: '',
  }, {
    name: 'Identify & contact a service provider to generate the mouse model',
    description: '',
  }, {
    name: 'Identify & contact a service provider to characterize / phenotype the mouse model',
    description: '',
  }, {
    name: 'Identify service provider to bank / cryopreserve the mouse line',
    description: '',
  }, {
    name: 'Phenotype the developed model relevant to gene therapy',
    description: '',
  }],
  'Create Patient-Derived Fibroblasts': [{
    name: 'Identify a facility to grow your fibroblast',
    description: '',
  }, {
    name: 'Identify a biorepository to store your fibroblasts',
    description: '',
  }, {
    name: 'Decide on number of cell lines',
    description: 'At the minimum, you will need one patient-derived cell lines and one control cell line. The control line might come from the parent, '
      + 'or a healthy sibling, or an age-matched healthy individual. Work with your expert to determine the right strategy',
  }, {
    name: 'Identify whether you need an IRB',
    description: 'Processing human samples will need IRB approval. If you are working with academic researchers, you should ask them '
      + 'whether they have their IRB and reuse them. If not, you can setup your own IRB application',
  }, {
    name: 'Create and submit an IRB Application',
    description: '',
  }, {
    name: 'Get a biopsy and ship to the facility',
    description: '1. Schedule an appointment with your local dermatologist. Make sure it\'s not a Friday because you want the facility to be available to receive your samples.\n'
      + '1. Ask your researcher if there are specific location in the skin to get a biopsy from\n'
      + '2. Get a kit from the institution to ship the biopsy to them\n'
      + '3. Usually institutions recommend getting a 3 - 5mm punch biopsy\n'
      + '4. Get a biopsy done and ship to the facility',
  }],
  'Create Patient-Derived iPSCs': [{
    name: 'Understand if modeling the disease in vitro requires the generation of an iPSC line (e.g. if gene is not expressed in fibroblasts)',
    description: '',
  }, {
    name: 'Identify & contact a service provider to convert fibroblasts (or blood cells) into iPSC and run QC',
    description: '',
  }, {
    name: 'Identify a biorepository to store your iPSCs',
    description: '',
  }],
  'Construct Design': [{
    name: 'Connect with an expert/advisor to design construct',
    description: '- When there is a choice in the decision,  patient foundations weigh in on the ""business"" side of the questions.\n'
      + '- ~10hrs minimum (lots of information available) to ~40hours max (consensus between advisors)',
  }, {
    name: 'Identify the target cell types where you need to express the transgene',
    description: 'Review published literature and public databases to identify the tissue or organ that the protein is normally expressed '
      + 'in and identify the tissue/organ that is most relevant to the disease or the organ to be treated',
  }, {
    name: 'Decide on transgene sequence. Consider isoforms and identify the canonical sequence.',
    description: 'Review published literature and public databases to identify the isoform most relevant to the organ to be treated and disaese in that organ. ',
  }, {
    name: 'Decide on the vector serotype and promoter (usually based on target tissue)',
    description: 'When there is a choice in the decision,  patient foundations weigh in on the "business" side of the questions',
  }, {
    name: 'Work with advisors to decide on ancilary sequences to add (i.e. enhancers, polyA, etc.)',
    description: '',
  }, {
    name: 'Decide on route of administration (not needed for plasmid design but should consider early)',
    description: '',
  }, {
    name: 'Send design for review to KOL team/board',
    description: 'This is a strategic decision determining the fate of your program. It\'s important to get sufficient feedback and possibly consensus',
  }],
  'Plasmid Construction': [{
    name: 'Design the in-vitro verification study (see the next project)',
    description: 'The plasmids will need to be tested in cell lines to determine if they properly express the transgene. Check that the promoter will work in the cell line you choose. '
      + 'Expression of the protein should be verified by detection with an antibody. \n'
      + '\n'
      + 'This design is important to determine the quantity of plasmids you need. You need to know the quantity necessary for Non-GMP AAV production and in-vitro study design',
  }, {
    name: 'Create a plan for the plasmids',
    description: '',
  }, {
    name: 'Identify & contact a service provider',
    description: 'Identify companies that can produce plasmids. Consider price and quality. ',
  }, {
    name: 'Negotiate and sign contract with service provider',
    description: 'Determine what extra quality controls measures you want to pay for, i.e. extra sequencing, etc',
  }],
  'In-Vitro Verification Study (optional)': [{
    name: 'Decide if the in-vitro verification study is necessary',
    description: 'Optional step that some groups decide to skip',
  }, {
    name: 'Design the in-vitro verification study',
    description: '',
  }, {
    name: 'Produce Plasmids (see previous project)',
    description: '',
  }, {
    name: 'Identify a service provider to execute the study',
    description: '',
  }, {
    name: 'Negotiate and sign contract with service provider',
    description: '',
  }, {
    name: 'Transfer plasmids to service provider',
    description: '',
  }, {
    name: 'Execute study',
    description: '',
  }, {
    name: 'Review results',
    description: '',
  }, {
    name: 'Troubleshoot',
    description: '',
  }],
  'Filing a patent': [{
    name: 'Identify a patent attorney with gene therapy experience',
    description: '',
  }, {
    name: 'Contact the attorney to prepare a provisional patent',
    description: '',
  }, {
    name: 'After Proof-of-concept data is available, amend the patent to finalize',
    description: '',
  }],
  'Non-GMP AAV Production': [{
    name: 'Identify & contact a service provider',
    description: '',
  }, {
    name: 'Understand the Certificate of Assurance (CoA) process and propose changes, if necessary',
    description: '',
  }, {
    name: 'Negotiate and sign contract with service provider',
    description: '',
  }, {
    name: 'Prepare to send the plasmids to service provider',
    description: '',
  }],
  'Proof-of-concept study': [{
    name: 'Identify study design',
    description: 'Patient groups decide on the priority for the study design \n'
      + '- what exactly do you want to treat in this patient population?\n'
      + '- Decide on time of delivery',
  }, {
    name: 'Order sufficient quantity of AAV vector',
    description: 'Ensure you have sufficient AAV vector (main and control) to cover AAV quality testing, animal study and tox study',
  }, {
    name: 'Identify vendor to run the experiment',
    description: '',
  }, {
    name: 'Consult with KOL (or research primary literature) to identify clinically-relevant phenotypes that need to be rescued',
    description: '',
  }, {
    name: 'Identify the time points (animal age) of: 1) AAV injection, 2) phenotyping',
    description: '',
  }, {
    name: 'Negotiate/co-write SOW for pilot test to measure AAV-FP vector biodistribution',
    description: '',
  }, {
    name: 'Do pilot test for tolerance of the mouse model to AAV injection at the target age',
    description: '',
  }, {
    name: 'Do pilot phenotyping test on the mutant mice to measure/confirm the phenotype experessivity, penetrance, test parameters',
    description: '',
  }, {
    name: 'Negotiate/co-write SOW for main POC mouse study',
    description: '',
  }, {
    name: 'Conduct the main POC study, collect data, analyze data',
    description: '',
  }, {
    name: 'Troubleshoot results if other than what was expected',
    description: '',
  }, {
    name: 'Collect organs for pathology and vector distribution/expression analysis',
    description: '',
  }],

}
