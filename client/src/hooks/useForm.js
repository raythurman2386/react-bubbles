import { useInput } from '../hooks/useInput';
import { axiosWithAuth as axios } from '../utils/axios';

export const useForm = (colors, updateColors) => {
  const [color, handleColor] = useInput('');
  const [hex, handleHex] = useInput('');

  let newColor = {
    color: color,
    code: {
      hex: hex
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    updateColors([...colors, newColor]);

    axios()
      .post(`/api/colors`, newColor)
      .then(res => {
        handleColor('');
        handleHex('');
      })
      .catch(err => console.log(err));
  };

  return {
    color,
    hex,
    handleColor,
    handleHex,
    handleSubmit
  };
};
