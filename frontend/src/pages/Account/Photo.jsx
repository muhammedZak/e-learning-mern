import React, { useState, useRef } from 'react';
import ReactCropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

const Photo = () => {
  const [image, setImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const cropperRef = useRef(null);

  const handleFileChange = (event) => {
    setCroppedImage(null);
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => setImage(e.target.result);
  };

  const handleCrop = async () => {
    if (
      typeof cropperRef.current !== 'undefined' &&
      cropperRef.current !== null
    ) {
      const cropper = cropperRef.current.cropper;
      if (cropper) {
        const croppedCanvas = cropper.getCroppedCanvas();
        if (croppedCanvas) {
          const croppedImage = croppedCanvas.toDataURL('image/jpeg');
          setCroppedImage(croppedImage);
          setImage(null);
        } else {
          console.error('Could not get cropped canvas.');
        }
      } else {
        console.error('Cropper instance not found.');
      }
    } else {
      console.error('Cropper ref is not defined.');
    }
  };
  return (
    <>
      <div className="py-3 text-center border-b">
        <h2 className="text-2xl font-bold">Photo</h2>
        <span className="text-black font-medium opacity-70">
          Add a nice photo of yourself for your profile.
        </span>
      </div>
      <div>
        <div className="lg:px-3 md:px-40 py-5">
          <h3 className="mb-1 font-bold">Image preview</h3>
          <div className="p-5 border border-black">
            {croppedImage ? (
              <div className="w-full flex justify-center bg-slate-200 h-56">
                <img
                  src={croppedImage}
                  alt="profile"
                  className="object-cover"
                />
              </div>
            ) : (
              <ReactCropper
                ref={cropperRef}
                src={image}
                className={`w-full bg-slate-200 ${image ? 'h-auto' : 'h-52'}`}
                alt="profile-image"
                background={false}
                aspectRatio={1}
                movable={true}
                zoomable={true}
                initialAspectRatio={16 / 9}
                guides={true}
                onInitialized={(instance) => {
                  instance.setCropBoxData({
                    width: 200,
                    height: 200,
                    x: 50,
                    y: 50,
                  });
                }}
              />
            )}
          </div>
          {image ? (
            <button
              onClick={handleCrop}
              className="mt-3 px-5 py-3 font-semibold text-white bg-black bg-opacity-90"
            >
              Crop
            </button>
          ) : (
            <div className="mt-4 flex border border-black">
              <div className="w-9/12 flex items-center">
                <span className="ps-2">
                  {image ? 'File selected' : 'No file selected'}
                </span>
              </div>
              <label
                htmlFor="myFile"
                className="block flex-1 py-2 border-s border-black cursor-pointer text-center text-black font-bold text-opacity-80  hover:bg-slate-300"
              >
                Uplaod image
                <input
                  id="myFile"
                  accept="image/*"
                  type="file"
                  hidden
                  onChange={handleFileChange}
                />
              </label>
            </div>
          )}
          <button
            disabled={!croppedImage}
            className={`block px-6 py-3 mt-3 font-semibold tracking-widest text-white bg-slate-950 ${
              croppedImage ? 'bg-opacity-90' : 'bg-opacity-75'
            }  `}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Photo;
