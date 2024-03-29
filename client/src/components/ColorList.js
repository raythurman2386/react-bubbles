import React, { useState } from "react";
import { axiosWithAuth as axios } from "../utils/axios";
import AddColor from "./AddColor";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    let colorList = colors.filter(color => color.id !== colorToEdit.id);

    updateColors([...colorList, colorToEdit]);

    axios()
      .put(`/api/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const deleteColor = color => {
    updateColors(colors.filter(c => c !== color));
    // make a delete request to delete this color
    axios()
      .delete(`/api/colors/${color.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map((color, i) => (
          <li key={i} onClick={() => editColor(color)}>
            <span>
              <span
                className="delete"
                onClick={e => {
                  e.stopPropagation();
                  deleteColor(color);
                }}
              >
                x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer">
        <AddColor colors={colors} updateColors={updateColors} />
      </div>
    </div>
  );
};

export default ColorList;
