export interface ContentBlock {
  type:
    | "paragraph"
    | "hr"
    | "bullet-list"
    | "image"
    | "image-grid"
    | "h3-section"
    | "h4-section"
    | "link-list"
    | "section"
    | "interview";
  text?: string | any;
  items?: (string | any)[];
  src?: string;
  images?: string[];
  title?: string;
  link?: string;
  blocks?: ContentBlock[];
  links?: {
    title: string;
    link: string;
    writer?: string;
    office?: string;
    writeDate?: string;
    searchDate?: string;
  }[];
  questions?: string[];
  answers?: { text: string; italic?: boolean }[][];
  summary?: string[];
  videoUrl?: string;
  [key: string]: any;
}

export interface PageConfig {
  header: string;
  writer?: string;
  blocks: ContentBlock[];
}

export interface PageConfigs {
  [key: string]: PageConfig;
}

export interface Member {
  id: string;
  src: string;
  name: string;
  major: string;
  role: string;
  univ: string;
  insId?: string;
}

export interface NavItem {
  id: string;
  koName: string;
  enName: string;
  url?: string;
  thumbnail?: string;
  subItems?: { id: string; koName: string; enName: string }[];
}

export interface Category {
  id: string;
  tag: string;
  name: string;
}
