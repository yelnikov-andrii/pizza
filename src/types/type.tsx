export type Pizza = {
  name: string;
  components: string;
  dough: string[];
  img: string;
  prices: string[];
  sizes: string[];
  souses: string[];
  type: string[];
  weight: string[];
  qty: number;
};

export type Blog = {
  data: string;
  name: string;
  preview: string;
  link: string;
  img: string;
};

export type Place = {
  name: string;
  img: string;
};

export type Vacancy = {
  name: string;
  img: string;
};

export type Item = {
  name: string;
  blank?: boolean;
  link?: string;
  mailto?: string;
}

export type Option = {
  value: string;
  name: string;
}