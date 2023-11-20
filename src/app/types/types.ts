interface image {
  sm: { src: string };
  lg: { src: string };
  md: { src: string };
}

export type Products = {
  id: number;
  imgSet: image;
  title: string;
  price: string;
  runtime: number;
  productType: string;
  contentType: any[];
  ageRange: number[];
};
