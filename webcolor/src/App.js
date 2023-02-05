import React, { useState } from "react";

const availableColors = ["red", "green", "blue", "yellow", "black", "orange", "purple", "orange", "pink", "brown"];
const initialColorGrid = Array(10).fill().map(() => Array(10).fill("red"));

const App = () => {
  const [colorGrid, setColorGrid] = useState(initialColorGrid);
  const [selectedColor, setSelectedColor] = useState("white");

  const handleCellClick = (row, col) => {
    const currentColor = colorGrid[row][col];
    const newGrid = colorGrid.map((rowArr, r) => {
      return rowArr.map((colValue, c) => {
        if (r === row && c === col) {
          return selectedColor;
        }
        if (colValue === currentColor) {
          return selectedColor;
        }
        return colValue;
      });
    });
    setColorGrid(newGrid);
  };

  return (
    <div>
      <div>
        Available Colors:
        {availableColors.map((color) => (
          <div
            key={color}
            style={{
              backgroundColor: color,
              width: "30px",
              height: "30px",
              display: "inline-block",
              marginRight: "10px",
            }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
      <table>
        <tbody>
          {colorGrid.map((rowArr, row) => (
            <tr key={row}>
              {rowArr.map((colValue, col) => (
                <td
                  key={col}
                  style={{
                    backgroundColor: colValue,
                    width: "30px",
                    height: "30px",
                  }}
                  onClick={() => handleCellClick(row, col)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
