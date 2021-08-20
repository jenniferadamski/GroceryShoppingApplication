import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDown() {
    const categories = useSelector((state) => state.categories);
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
  