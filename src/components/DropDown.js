import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { categories } from '../../data';

function DropDown() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState(categories);
  
    return (
      <DropDownPicker
        placeholder="Choisir une catégorie"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    );
  }

  export default DropDown;
  