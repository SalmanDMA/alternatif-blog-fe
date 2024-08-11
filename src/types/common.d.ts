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

export interface INavbarData {
  id: number;
  name: string;
  dropdownContent: IDropdownContent | null;
}

export interface ILanguage {
  name: string;
  code: string;
  image: string;
  key: 'en' | 'id';
}
