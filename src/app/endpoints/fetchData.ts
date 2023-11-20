import axios from 'axios';

export const fetchData = async (setter: (arg0: any) => any) => {
  try {
    const res = await axios.get('http://localhost:3030/products');
    setter(res?.data);
  } catch (error) {
    console.log(error);
  }
};
