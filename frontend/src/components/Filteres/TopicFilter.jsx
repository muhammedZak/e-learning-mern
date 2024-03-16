import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const TopicFilter = ({ topicValue, onTopicClick }) => {
  const [showTopics, setShowTopics] = useState(false);

  const handleTopicClick = () => {
    setShowTopics(!showTopics);
  };
  return (
    <div className="pb-3">
      <div
        onClick={handleTopicClick}
        className="py-4 flex justify-between items-center cursor-pointer"
      >
        <div className="font-bold text-xl opacity-80">Topic</div>
        <div className="text-center">
          {showTopics ? (
            <KeyboardArrowUpIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ fontSize: '22px', opacity: '.8' }} />
          )}
        </div>
      </div>
      <div className={`${showTopics ? 'block' : 'hidden'}`}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Python"
          />
          <FormControlLabel control={<Checkbox size="small" />} label="React" />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="javascript"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Node.js"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Flutter"
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Data Science"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default TopicFilter;
