const articles = [
  {
    id: 1,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/aa18ef18c93e4a3aab93a94d4c519163',
    title: 'Technologies I Plan to Learn in 2022',
    date: new Date(2021, 11, 22),
    readTime: '3 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/bbce90dfb0247ed516f85291949bfc91',
    vote: 21,
    comment: 1
  },
  {
    id: 2,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/be8d9d38650943c8a1718ba79f23e9ac',
    title: 'React Architecture Patterns for Your Projects',
    date: new Date(2021, 11, 22),
    readTime: '12 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/6e1f3d1984d5e672f9a83ff0640b1073',
    vote: 39,
    comment: 2
  },
  {
    id: 3,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/106cf162b88840808484d4b5429b59b1',
    title: '5 Automations Every Developer Should be Running',
    date: new Date(2021, 11, 17),
    readTime: '5 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0e3ba92c04cae6705484b399c3a0c2f4',
    vote: 44,
    comment: 1
  },
  {
    id: 4,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/dz',
    title: 'Software Development Trends for 2022',
    date: new Date(2021, 11, 23),
    readTime: '7 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/379f50ba0a65dc67d3b274d4b2da49ce',
    vote: 3,
    comment: 1
  },
  {
    id: 5,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/65d4168582f14e0cb2b46693356e66f1',
    title: '3 Lines of Code Shouldn\'t Take All Day',
    date: new Date(2021, 11, 22),
    readTime: '5 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/eda1b296c34c37970fe15d54758eed79',
    vote: 24,
    comment: 2
  },
  {
    id: 6,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/jsk',
    title: 'Programming Language to Learn in 2022 (for Job & Future)',
    date: new Date(2021, 11, 21),
    readTime: '4 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/f85601d85eb69487ee8b00e35ef0585c',
    vote: 24,
    comment: 1
  },
  {
    id: 7,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/logrocket',
    title: 'The Best Typescript IDEs',
    date: new Date(2021, 11, 21),
    readTime: '10 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/9a4a493320ac33377ad603d2267fc950',
    vote: 17,
    comment: 0
  },
  {
    id: 8,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/hn',
    title: 'Web3 is Going just Great',
    date: new Date(2021, 11, 17),
    readTime: '3 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/dd817199058878d1318405070403570a',
    vote: 58,
    comment: 4
  },
  {
    id: 9,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/7a0bfa3e7a224df08bb3b041baf852ca',
    title: '28 Free Ebooks and Courses for Web Developers',
    date: new Date(2021, 11, 16),
    readTime: '2 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/5dc66524a53a3bb42c03247b678177a6',
    vote: 135,
    comment: 6
  },
  {
    id: 10,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/1cc3a75b98b74698a40f57162b30b841',
    title: 'The 6 Best Hacker Movies to Watch This Year',
    date: new Date(2021, 11, 20),
    readTime: '5 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/ecff9da5b296f828a860cb7849ec6318',
    vote: 66,
    comment: 11
  },
  {
    id: 11,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/1cc3a75b98b74698a40f57162b30b841',
    title: 'The Ugly Truth about Coding Bootcamps',
    date: new Date(2021, 11, 17),
    readTime: '4 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/809c78728fa895e6b78f110228490acf',
    vote: 59,
    comment: 13
  },
  {
    id: 12,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/aa18ef18c93e4a3aab93a94d4c519163',
    title: 'Node.js: in Go We Trust',
    date: new Date(2021, 11, 21),
    readTime: '4 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/1f6148ada0dbe5a2f40a20f419f566d8',
    vote: 48,
    comment: 4
  },
  {
    id: 13,
    logo: 'https://daily-now-res.cloudinary.com/image/upload/t_logo,f_auto/v1628412854/logos/freecodecamp',
    title: '23 Free Website to Learn JavaScript in 2022',
    date: new Date(2021, 11, 21),
    readTime: '7 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/5be843decec315a92231d07d91c656a9',
    vote: 45,
    comment: 6
  },
  {
    id: 14,
    logo: 'https://daily-now-res.cloudinary.com/image/upload/t_logo,f_auto/v1628412854/logos/freecodecamp',
    title: 'How to Build a Custom CRM',
    date: new Date(2021, 11, 21),
    readTime: '1 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/61d607c6835d8775cf28cebaf8375c43',
    vote: 44,
    comment: 2
  },
  {
    id: 15,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/177a1962a8a945468271068795ff0134',
    title: 'State of CSS 2021',
    date: new Date(2021, 11, 17),
    readTime: '2 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/5d3b0cd98196d5396ad0b1dc01df9eb9',
    vote: 36,
    comment: 0
  },
  {
    id: 16,
    logo: 'https://res.cloudinary.com/daily-now/image/upload/t_logo,f_auto/v1/logos/71243dc2fd54430491336f7f7d4d83b1',
    title: 'Best Practices for Better RESTful API',
    date: new Date(2021, 12, 17),
    readTime: '23 minutes',
    img: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/030881cc03ad6536187dd0a1ce909ecc',
    vote: 30,
    comment: 1
  },
];

export default articles;