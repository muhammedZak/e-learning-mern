import React from 'react';
import ProfileEdit from './ProfileEdit';

const Dashboard = () => {
  return (
    <div className="px-32 py-10">
      <div className="flex shadow-md">
        <div className="w-1/4 border">
          <div className="p-6 flex flex-col items-center gap-1">
            <img
              className="w-28 rounded-full object-contain "
              src="https://img-b.udemycdn.com/user/200_H/223429164_335e.jpg"
              alt="photo"
            />
            <span className="font-medium text-lg">Muhammed Zakariya</span>
          </div>
        </div>
        <div className="flex-1 border">
          <div className="py-10 text-center border-b">
            <h2 className=" text-4xl font-medium">Public profile</h2>
            <span className="text-black font-medium opacity-70">
              Add information about yourself
            </span>
          </div>
          <div>
            <ProfileEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
