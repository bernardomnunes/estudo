import { useState } from "react";
import "./App.css";

interface TCell {
  row: number;
  column: number;
}

function App() {
  const [grid, setGrid] = useState([
    [0, 1, 3, 3],
    [0, 1, 4, 4],
    [2, 2, 5, 5],
  ]);

  const [firstItem, setFirstItem] = useState<TCell>();

  const [isReveled, setIsReveled] = useState(
    new Array(grid.length)
      .fill("")
      .map(() => new Array(grid[0].length).fill(false))
  );

  const handleSelectedCard = (row: number, column: number) => {
    const clickedNumber = grid[row][column];
    const newIsReveled = [...isReveled];

    newIsReveled[row][column] = true;
    setIsReveled(newIsReveled);

    if (firstItem) {
      if (isReveled[row][column]) return;
      const firstNumberChoosed = grid[firstItem.row][firstItem.column];
      if (firstNumberChoosed !== clickedNumber) {
        setTimeout(() => {
          newIsReveled[firstItem.row][firstItem.column] = false;
          newIsReveled[row][column] = false;
          setIsReveled([...newIsReveled]);
        }, 1000);
      } else {
        const youWon = isReveled.flat().every((state) => state === true);
        if (youWon) {
          setTimeout(() => {
            alert("vc ganhou");
          }, 500);
        }
      }

      setFirstItem(undefined);
    } else {
      setFirstItem({ row: row, column: column });
    }
  };

  return (
    <>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((number, columnIndex) => (
              <div
                className="card"
                key={columnIndex}
                onClick={() => handleSelectedCard(rowIndex, columnIndex)}
              >
                {isReveled[rowIndex][columnIndex] ? number : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
