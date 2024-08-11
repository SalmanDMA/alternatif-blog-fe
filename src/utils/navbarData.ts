import { ILanguage, INavbarData } from '@/types/common';

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
          name: 'dropdown_subtitle_article',
          path: '/article',
          des: 'dropwdown_description_article',
          icon: 'fi-rr-newspaper',
        },
        {
          id: 2,
          name: 'dropdown_subtitle_tutorial',
          path: '/tutorial',
          des: 'dropwdown_description_tutorial',
          icon: 'fi-sr-rectangle-list',
        },
        {
          id: 3,
          name: 'dropdown_subtitle_open_source',
          path: '/open-source',
          des: 'dropwdown_description_open_source',
          icon: 'fi-ss-book-open-reader',
        },
        {
          id: 4,
          name: 'dropdown_subtitle_course',
          path: '/course',
          des: 'dropwdown_description_course',
          icon: 'fi-ss-e-learning',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'category',
    dropdownContent: {
      id: 1,
      title: 'dropdown_title_category',
      content: [
        {
          id: 1,
          name: 'dropdown_subtitle_react',
          path: '/category/react',
          des: 'dropwdown_description_react',
          icon: 'fi-ss-react',
        },
        {
          id: 2,
          name: 'dropdown_subtitle_vue',
          path: '/category/vue',
          des: 'dropwdown_description_vue',
          icon: 'fi-sr-rectangle-list',
        },
        {
          id: 3,
          name: 'dropdown_subtitle_next_js',
          path: '/category/next-js',
          des: 'dropwdown_description_next_js',
          icon: 'fi-ss-book-open-reader',
        },
        {
          id: 4,
          name: 'dropdown_subtitle_nuxt_js',
          path: '/category/nuxt-js',
          des: 'dropwdown_description_nuxt_js',
          icon: 'fi-ss-e-learning',
        },
      ],
    },
  },
  {
    id: 3,
    name: 'explore',
    dropdownContent: {
      id: 1,
      title: 'dropdown_title_explore',
      content: [
        {
          id: 1,
          name: 'dropdown_subtitle_discussion',
          path: '/discussion',
          des: 'dropwdown_description_discussion',
          icon: 'fi-ss-react',
        },
        {
          id: 2,
          name: 'dropdown_subtitle_showcase',
          path: '/showcase',
          des: 'dropwdown_description_showcase',
          icon: 'fi-sr-rectangle-list',
        },
      ],
    },
  },
];

const languages: ILanguage[] = [
  { name: 'English', code: 'en', image: '/images/uk.png', key: 'en' },
  { name: 'Bahasa Indonesia', code: 'id', image: '/images/id.png', key: 'id' },
];

export { navbarData, languages };
