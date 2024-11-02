export interface IOurServiceFAQ {
  id: number;
  question: string;
  answer: string;
  service?: string;
}
export interface IOurServiceImage {
  id: number;
  image: string;
}
export interface IOurService {
  id?: number;
  title: string;
  subtitle: string;
  slug: string;
  icon: string;
  images?: IOurServiceImage[];
}

export interface IOurServiceDetail {
  id?: number;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  icon: string;
  keyPoints: string[];
  images: IOurServiceImage[];
  faqs: IOurServiceFAQ[];
}
