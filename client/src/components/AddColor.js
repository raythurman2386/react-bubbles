import React, { useState } from 'react';
import { axiosWithAuth as axios } from '../utils/axios';

const AddColor = ({ colors, updateColors }) => {
  const [newColor, setNewColor] = useState({
    color: '',
    code: {
      hex: '#'
    }
  });

  const handleChange = e => {
    setNewColor({
      ...newColor,
      [e.target.name]: e.taget.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newColor);
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
            value={newColor.color}
            onChange={e => handleChange(e)}
            placeholder='Color Name'
          />
        </label>
        <label htmlFor='Hex Code'>
          Hex Code:
          <input
            name='hex'
            value={newColor.code.hex}
            onChange={e => handleChange(e)}
            placeholder='Hex Code'
          />
        </label>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default AddColor;
