import { UrlNamed } from './proyectsData.js';

export interface Job {
  position: string;
  company: string;
  picture?: string;
  description: string | string[];
  urls?: Array<UrlNamed>;
  fromDate: Date;
  toDate?: Date;
}

const jobs: Array<Job> = [
  {
    company: 'StarAppX',
    position: 'Frontend Web & App Developer',
    description: [
      'I work on web and mobile App projects fulfilling the role of Frontend-dev with full-time modality',
      'I make projects with react and react-native. layout and integration of websites and mobile applications.',
    ],
    picture: 'https://i.postimg.cc/xTtf3SPZ/Logo-Star-App-X-1.png',
    urls: [
      { name: 'Web Site', url: 'https://starappx.com/' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/company/starappx/' },
    ],
    fromDate: new Date(2023, 5, 15),
  },
];

const jobData = {
  jobs,
};
export default jobData;
