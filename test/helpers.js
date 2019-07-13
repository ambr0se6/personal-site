const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Ambrose Ryan Burgett',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Ryan',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Ryan',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Ryan',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Ryan',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
