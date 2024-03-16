import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const DurationFilter = ({ durationValue, onDurationClick }) => {
  const [durationOpen, setDurationOpen] = useState(true);

  const handleDurationClick = () => {
    setDurationOpen(!durationOpen);
  };
  return (
    <div className="pb-3">
      <div
        onClick={handleDurationClick}
        className="py-4 flex justify-between items-center cursor-pointer"
      >
        <div className="font-bold text-xl opacity-80">Video Duration</div>
        <div className="text-center">
          {durationOpen ? (
            <KeyboardArrowUpIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          )}
        </div>
      </div>
      <div className={`${durationOpen ? 'block' : 'hidden'}`}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="0-1 Hour"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="1-3 Hours"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="3-6 Hours"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="3-17 Hours"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="17-25 Hours"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="25+ Hours"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default DurationFilter;
