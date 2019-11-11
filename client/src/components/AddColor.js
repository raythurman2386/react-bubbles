import React from 'react';
import { useForm } from '../hooks/useForm';

const AddColor = ({ colors, updateColors }) => {
  const { color, hex, handleColor, handleHex, handleSubmit } = useForm(
    colors,
    updateColors
  );

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
