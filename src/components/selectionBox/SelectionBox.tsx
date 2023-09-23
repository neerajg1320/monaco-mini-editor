import React from 'react';
import { useTheme } from '../../contexts/Theme.context';
import { ThemeType } from '../../contexts/Theme.model';

const SelectionBox = () => {
    const {setCurrentTheme, themeType} = useTheme();

    const handleThemeChange:React.ChangeEventHandler<HTMLSelectElement> = (e)=>{
        // const theme = e.target.value;
      setCurrentTheme(e.target.value as ThemeType);
    }

    console.log(`selectionBox`);
  return (
    <div>
      <select value={themeType} onChange={handleThemeChange} className='border-2 border-slate-600 rounded-md px-3'>
        <option value="normal">Normal</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  )
}

export default SelectionBox
