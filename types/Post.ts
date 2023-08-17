import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  title: string;
  tags: string[];
  image: string;
  alt: string;
  content: PortableTextBlock[];
};

export interface PricingProps {
  yearly: boolean;
  popular?: boolean;
  planName: string;
  price: {
    monthly: number;
    yearly: number;
  };
  planDescription: string;
  features: string[];
}
