import { Products } from '../types/types';

export const sortBy: Record<string, any> = {
  duration: (prod: Products[]) => prod.sort((a, b) => a.runtime - b.runtime),
  price_ascending: (prod: Products[]) =>
    prod.sort((a, b) => parseInt(a.price) - parseInt(b.price)),
  price_descending: (prod: Products[]) =>
    prod.sort((a, b) => parseInt(b.price) - parseInt(a.price)),
  zero_to_five: (prod: Products[]) =>
    prod.filter((age) => age.ageRange[0] >= 0 && age.ageRange[1] <= 5),
  six_to_nine: (prod: Products[]) =>
    prod.filter((age) => age.ageRange[0] >= 6 && age.ageRange[1] >= 9),
};

export const sortSelectOptions = [
  {
    label: 'Price ascending',
    value: 'price_ascending',
  },
  {
    label: 'Price descending',
    value: 'price_descending',
  },
  {
    label: 'Duration',
    value: 'duration',
  },
  {
    label: ' 0-5',
    value: 'zero_to_five',
  },
  {
    label: ' 6-9+',
    value: 'six_to_nine',
  },
];

// export const sortBy: Record<string, any> = {
//     duration: (prod: Products[]) => prod.sort((a, b) => a.runtime - b.runtime),
//     price_ascending: (prod: Products[]) =>
//       prod.sort((a, b) => parseInt(a.price) - parseInt(b.price)),
//     price_descending: (prod: Products[]) =>
//       prod.sort((a, b) => parseInt(b.price) - parseInt(a.price)),
//     zero_to_five: (prod: Products[]) =>
//       prod.filter((age) => age.ageRange.some((range) => range <= 5)),

//   };
