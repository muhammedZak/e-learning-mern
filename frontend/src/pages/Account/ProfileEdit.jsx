import React, { useState } from 'react';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import './profileEdit.css';

const ProfileEdit = () => {
  const [name, setName] = useState('Muhammed zakariya');
  const [headline, setHeadline] = useState('Web Developer');
  const [bio, setBio] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(bio);
  };

  var modules = {
    toolbar: [['bold', 'italic']],
  };

  var formats = ['bold', 'italic'];

  return (
    <div>
      <div className="px-24 py-10 ">
        <form
          className="flex flex-col gap-8 flex-wrap"
          onSubmit={handleFormSubmit}
        >
          <label htmlFor="name" className="name-label ">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-3 ps-5 outline-0"
            />
          </label>
          <label htmlFor="headline" className="headline-label">
            <input
              type="text"
              id="headline"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
              className="w-full py-3 ps-5 outline-0"
            />
          </label>

          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            value={bio}
            onChange={setBio}
            className="break-all"
          />

          <button
            type="submit"
            className="py-3 px-2 w-20 font-medium tracking-wider text-white bg-slate-950 bg-opacity-90"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileEdit;
