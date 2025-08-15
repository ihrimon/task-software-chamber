export const stats = [
  {
    number: '20+',
    label: 'Tech Partners',
  },
  {
    number: '150+',
    label: 'Project Completed',
  },
  {
    number: '1K+',
    label: 'Satisfied Customers',
  },
];

export const processSteps = [
  { step: 1, name: 'Code', position: 'bottom-90 left-5' },
  { step: 2, name: 'Build', position: 'bottom-140 left-15' },
  { step: 3, name: 'Test', position: 'bottom-170 left-[20%]' },
  {
    step: 4,
    name: 'Release',
    position: 'bottom-190 left-1/2 -translate-x-1/2',
  },
  { step: 5, name: 'Deploy', position: 'bottom-180 right-[20%]' },
  { step: 6, name: 'Monitor', position: 'bottom-140 right-10' },
  { step: 7, name: 'Maintain', position: 'bottom-100 right-1' },
];

export const socialLinks = [
  { name: 'Instagram', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Tiktok', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Linkedin', href: '#' },
  { name: 'Youtube', href: '#' },
];

export const categories = [
  { title: 'Tech', image: '/assets/images/service-1.png' },
  { title: 'Health Care', image: '/assets/images/service-2.png' },
  { title: 'Developers', image: '/assets/images/service-3.png' },
  { title: 'Software', image: '/assets/images/service-4.png' },
  { title: 'Entertainment', image: '/assets/images/service-5.png' },
  { title: 'Hospitality', image: '/assets/images/service-6.png' },
  { title: 'Manufacturing', image: '/assets/images/service-7.png' },
  { title: 'Energy', image: '/assets/images/service-8.png' },
  { title: 'Auto Motive', image: '/assets/images/service-9.png' },
];

export const companies = [
  {
    name: 'Spotify',
    icon: '/assets/icons/company-1.svg',
  },
  { name: 'TalentQl', icon: '/assets/icons/company-2.svg' },
  { name: 'DropBox', icon: '/assets/icons/company-3.svg' },
  { name: 'Fliqpqy', icon: '/assets/icons/company-4.svg' },
  {
    name: 'Slack',
    icon: '/assets/icons/company-5.svg',
  },
];

export const initialNodes = [
  {
    id: 'left-1',
    type: 'sideCheckbox',
    position: { x: 20, y: 140 },
    data: { label: 'Website Development' },
    draggable: false,
  },
  {
    id: 'left-2',
    type: 'sideCheckbox',
    position: { x: 20, y: 300 },
    data: { label: 'Mobile App Development' },
    draggable: false,
  },
  {
    id: 'center',
    type: 'centerTimeline',
    position: { x: 260, y: 80 },
    data: {},
    draggable: false,
  },
  {
    id: 'right-1',
    type: 'sideCheckbox',
    position: { x: 1020, y: 140 },
    data: { label: 'UI/UX Engineering' },
    draggable: false,
  },
  {
    id: 'right-2',
    type: 'sideCheckbox',
    position: { x: 1020, y: 300 },
    data: { label: 'Software Services' },
    draggable: false,
  },
];
