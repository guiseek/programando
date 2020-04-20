export interface Packages {
  total:   number;
  results: Result[];
}

export interface Result {
  package:     Package;
  score:       Score;
  searchScore: number;
  flags?:      Flags;
}

export interface Flags {
  unstable: boolean;
}

export interface Package {
  name:        string;
  scope:       Scope;
  version:     string;
  description: string;
  keywords:    string[];
  date:        string;
  links:       Links;
  author:      Author;
  publisher:   Publisher;
  maintainers: Publisher[];
}

export interface Author {
  name:     Name;
  email:    Email;
  url?:     string;
  username: Scope;
}

export enum Email {
  GuiseekGmailCOM = "guiseek@gmail.com",
}

export enum Name {
  GUISeek = "Gui Seek",
  GuilhermeSiquinelli = "Guilherme Siquinelli",
}

export enum Scope {
  Guiseek = "guiseek",
  Unscoped = "unscoped",
}

export interface Links {
  npm:         string;
  homepage?:   string;
  repository?: string;
  bugs?:       string;
}

export interface Publisher {
  username: Scope;
  email:    Email;
}

export interface Score {
  final:  number;
  detail: Detail;
}

export interface Detail {
  quality:     number;
  popularity:  number;
  maintenance: number;
}
