import React, { useEffect, useState } from 'react';
import 'quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import './profileEdit.css';
import { useGetMyProfileQuery, useUpdateprofileMutation } from '../../store';

const ProfileEdit = () => {
  const [name, setName] = useState('');
  const [headline, setHeadline] = useState('');
  const [bio, setBio] = useState('');

  const { data, isLoading } = useGetMyProfileQuery();
  const [updateProfile, results] = useUpdateprofileMutation();

  useEffect(() => {
    if (data) {
      setName(data.name || '');
      setHeadline(data.headline || '');
      setBio(data.bio || '');
    }
  }, [data]);

  const handleBioChange = (value) => {
    const strippedBio = value.replace(/(<([^>]+)>)/gi, '');
    setBio(strippedBio);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, headline, bio });
  };

  const modules = {
    toolbar: [['bold', 'italic']],
  };

  const formats = ['bold', 'italic'];

  return (
    <>
      <div className="py-10 text-center border-b">
        <h2 className=" text-4xl font-medium">Public profile</h2>
        <span className="text-black font-medium opacity-70">
          Add information about yourself
        </span>
      </div>
      <div>
        <div className="px-3 md:px-24 py-10 ">
          <form
            className="flex flex-col gap-8 flex-wrap"
            onSubmit={handleFormSubmit}
          >
            {isLoading ? (
              Array.from(new Array(3)).map((_, index) => (
                <Skeleton
                  key={index}
                  sx={{ width: '100%', paddingY: '2rem' }}
                  animation="wave"
                />
              ))
            ) : (
              <>
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
                  onChange={handleBioChange}
                  className="break-all"
                  sanitize={true}
                />
              </>
            )}

            <button
              disabled={results.isLoading}
              type="submit"
              className="py-3 px-2 w-20 font-medium tracking-wider text-white bg-slate-950 bg-opacity-90"
            >
              {results.isLoading ? (
                <CircularProgress size={15} thickness={10} color="inherit" />
              ) : (
                'Save'
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;
