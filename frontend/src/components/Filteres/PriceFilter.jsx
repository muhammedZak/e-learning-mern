import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const PriceFilter = ({ priceValue, onPriceClick }) => {
  const [showPrices, setShowPrices] = useState(false);

  const handlePriceClick = () => {
    setShowPrices(!showPrices);
  };
  return (
    <div className="pb-3">
      <div
        onClick={handlePriceClick}
        className="py-4 flex justify-between items-center cursor-pointer"
      >
        <div className="font-bold text-xl opacity-80">Price</div>
        <div className="text-center">
          {showPrices ? (
            <KeyboardArrowUpIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          )}
        </div>
      </div>
      <div className={`${showPrices ? 'block' : 'hidden'}`}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="&#8377;500 - &#8377;999"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="&#8377;1000 - &#8377;1499"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="&#8377;1500 - &#8377;1999"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="&#8377;2000 - &#8377;2499"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="&#8377;2500 - &#8377;2999"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="&#8377;3000 &up"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default PriceFilter;
