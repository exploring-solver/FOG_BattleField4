import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MatrixRain = () => {
  const [grid, setGrid] = useState([]);
  const [hue, setHue] = useState(120);
  const rows = 15;
  const cols = 20;

  // Initialize grid
  useEffect(() => {
    const initialGrid = Array(rows)
      .fill()
      .map(() =>
        Array(cols).fill().map(() => ({
          active: false,
          opacity: 0,
        }))
      );
    setGrid(initialGrid);
  }, []);

  // Color-changing effect
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setHue((h) => (h + 0.5) % 360);
    }, 50);
    return () => clearInterval(colorInterval);
  }, []);

  // Rain animation
  useEffect(() => {
    const rainInterval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = prevGrid.map((row) =>
          row.map((cell) => ({ ...cell }))
        );

        // Move existing drops down
        for (let i = rows - 1; i >= 0; i--) {
          for (let j = 0; j < cols; j++) {
            if (i === rows - 1) {
              // Fade out bottom row
              if (newGrid[i][j].active) {
                newGrid[i][j].opacity -= 0.1;
                if (newGrid[i][j].opacity <= 0) {
                  newGrid[i][j].active = false;
                }
              }
            } else if (newGrid[i][j].active) {
              // Move drop down
              newGrid[i + 1][j] = {
                active: true,
                opacity: newGrid[i][j].opacity * 0.9,
              };
              newGrid[i][j].active = false;
              newGrid[i][j].opacity = 0;
            }
          }
        }

        // Generate new drops at top
        for (let j = 0; j < cols; j++) {
          if (Math.random() < 0.1 && !newGrid[0][j].active) {
            newGrid[0][j] = {
              active: true,
              opacity: 1,
            };
          }
        }

        return newGrid;
      });
    }, 100); // Adjust speed here

    return () => clearInterval(rainInterval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-8">
      <Link to={'/'}>
      <button className="absolute left-2 top-2 border-2 text-white border-gray-500 p-2 rounded bg-transparent transition-all duration-300 ease-in-out hover:cursor-pointer  hover:bg-white hover:text-black font-semibold ">&lt;- Go Back to BattleField 4</button>
      </Link>

      <div
        className="grid gap-1 bg-black/90 p-4 rounded-lg"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
        }}
      >
        {grid.map((row, i) =>
          row.map((cell, j) => (
            <div
              key={`${i}-${j}`}
              className="w-4 h-4 transition-colors duration-100 rounded-sm"
              style={{
                backgroundColor: cell.active
                  ? `hsla(${hue}, 100%, 50%, ${cell.opacity})`
                  : 'transparent',
                boxShadow: cell.active
                  ? `0 0 8px hsla(${hue}, 100%, 50%, ${cell.opacity * 0.5})`
                  : 'none',
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MatrixRain;
