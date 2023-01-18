import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Completed NSPs',
    title: 'Network Strategic Planners',
    totalDownloads: '59'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Contracts and Proposals',
    title: 'Negotiation Contracts',
    totalDownloads: '62'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Total Cost of Care Documents',
    title: 'TCOC',
    totalDownloads: '7'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Best In Class Benchmarks',
    title: 'BIC Benchmarks',
    totalDownloads: '46'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Division of Financial Responsibilities Documents',
    title: 'DOFR',
    totalDownloads: '8'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Additional Resources',
    title: 'Additional Resources',
    totalDownloads: '15'
  }
];
