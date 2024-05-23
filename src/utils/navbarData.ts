interface IDropDownContentData {
  id: number;
  name: string;
  path: string;
  des: string;
  icon: string;
}

interface IDropdownContent {
  id: number;
  title: string;
  content: IDropDownContentData[];
}

interface INavbarData {
  id: number;
  name: string;
  dropdownContent: IDropdownContent | null;
}

interface ILanguage {
  name: string;
  code: string;
  image: string;
  key: 'en' | 'id';
}

const navbarData: INavbarData[] = [
  {
    id: 1,
    name: 'learn',
    dropdownContent: {
      id: 1,
      title: 'dropdown_title_learn',
      content: [
        {
          id: 1,
          name: 'dropdown_content_article',
          path: '/article',
          des: 'des_article',
          icon: 'fi-rr-newspaper',
        },
        {
          id: 2,
          name: 'dropdown_content_tutorial',
          path: '/tutorial',
          des: 'des_tutorial',
          icon: 'fi-sr-rectangle-list',
        },
        {
          id: 3,
          name: 'dropdown_content_open_source',
          path: '/open-source',
          des: 'des_open_source',
          icon: 'fi-ss-book-open-reader',
        },
        {
          id: 4,
          name: 'dropdown_content_course',
          path: '/course',
          des: 'des_course',
          icon: 'fi-ss-e-learning',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'category',
    dropdownContent: null,
  },
  {
    id: 3,
    name: 'explore',
    dropdownContent: null,
  },
];

const languages: ILanguage[] = [
  { name: 'English', code: 'en', image: '/images/uk.png', key: 'en' },
  { name: 'Bahasa Indonesia', code: 'id', image: '/images/id.png', key: 'id' },
];

export { navbarData, languages };
