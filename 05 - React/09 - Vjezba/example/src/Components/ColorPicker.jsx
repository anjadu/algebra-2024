import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#000000');

  return (
    <div style={styles.colorPickerContainer}>
      <h2 style={styles.title}>Color Picker</h2>
      <div style={{ ...styles.colorDisplay, backgroundColor: color }}></div>
      <p>Select a color:</p>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={styles.colorInput}
      />
      <p>Selected color: {color}</p>
    </div>
  );
};

const styles = {
  colorPickerContainer: {
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    border: '1px solid #ccc',
    width: '250px',
    textAlign: 'center',
    marginTop: '20px', // Added margin for spacing from the previous component
  },
  title: {
    margin: 0,
    fontSize: '18px',
    color: '#333',
  },
  colorDisplay: {
    width: '100%',
    height: '100px',
    margin: '10px auto',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  colorInput: {
    margin: '10px 0',
  },
};

export default ColorPicker;