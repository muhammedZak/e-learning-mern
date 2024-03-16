import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Rating from '@mui/material/Rating';

const RatingsFilter = ({ ratingsValue, onRadioClick }) => {
  const [ratingsOpen, setRatingsOpen] = useState(true);

  const handleRatingsClick = () => {
    setRatingsOpen(!ratingsOpen);
  };

  const onRadioChange = (e) => {
    onRadioClick(e.target.value);
  };
  return (
    <div className="pb-3">
      <div
        onClick={handleRatingsClick}
        className="py-4 flex justify-between items-center cursor-pointer"
      >
        <div className="font-bold text-xl opacity-80">Ratings</div>
        <div className="text-center">
          {ratingsOpen ? (
            <KeyboardArrowUpIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          )}
        </div>
      </div>
      <div className={`${ratingsOpen ? 'block' : 'hidden'}`}>
        <RadioGroup
          value={ratingsValue}
          onChange={onRadioChange}
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="4.5"
            control={<Radio size="small" />}
            label={
              <div className="flex items-center text-sm gap-2">
                <Rating
                  name="read-only"
                  value="4.5"
                  precision={0.5}
                  readOnly
                  size="small"
                />
                4.5 &up
              </div>
            }
          />
          <FormControlLabel
            value="4.0"
            control={<Radio size="small" />}
            label={
              <div className="flex items-center text-sm gap-2">
                <Rating
                  name="read-only"
                  value="4.0"
                  precision={0.5}
                  readOnly
                  size="small"
                />
                4.0 &up
              </div>
            }
          />
          <FormControlLabel
            value="3.5"
            control={<Radio size="small" />}
            label={
              <div className="flex items-center text-sm gap-2">
                <Rating
                  name="read-only"
                  value="3.5"
                  precision={0.5}
                  readOnly
                  size="small"
                />
                3.5 &up
              </div>
            }
          />
          <FormControlLabel
            value="3.0"
            control={<Radio size="small" />}
            label={
              <div className="flex items-center text-sm gap-2">
                <Rating
                  name="read-only"
                  value="3.0"
                  precision={0.5}
                  readOnly
                  size="small"
                />
                3.0 &up
              </div>
            }
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export default RatingsFilter;
