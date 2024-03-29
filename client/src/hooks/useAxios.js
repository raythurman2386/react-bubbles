import { useState, useEffect } from 'react';
import { axiosWithAuth as axios } from '../utils/axios';

export const useAxios = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    axios()
      .get('/api/colors')
      .then(res => setColorList(res.data))
      .catch(err => console.log(err));
  }, []);

  return [colorList, setColorList];
};
