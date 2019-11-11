import React from 'react';
import { axiosWithAuth as axios } from '../utils/axios';
import { useInput } from '../hooks/useInput';

const AddColor = ({ colors, updateColors }) => {
  const [color, handleColor] = useInput('');
  const [hex, handleHex] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    let newColor = {
      color: color,
      code: {
        hex: hex
      }
    };

    updateColors([...colors, newColor]);

    axios()
      .post(`/api/colors`, newColor)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <>
      <h3>Add a Color!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Color Name'>
          Color Name:
          <input
            name='color'
            value={color}
            onChange={e => handleColor(e.target.value)}
            placeholder='Color Name'
          />
        </label>
        <label htmlFor='Hex Code'>
          Hex Code:
          <input
            name='hex'
            value={hex}
            onChange={e => handleHex(e.target.value)}
            placeholder='Hex Code'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default AddColor;
