import { Outlet, NavLink } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="px-10 md:px-14 md:py-10 md:h-screen lg:h-auto ">
      <div className="md:flex md:shadow-md">
        <div className="md:w-1/4 md:border">
          <div className="p-6 flex flex-col items-center gap-1">
            <img
              className="w-28 rounded-full object-contain "
              src="https://img-b.udemycdn.com/user/200_H/223429164_335e.jpg"
              alt="photo"
            />
            <span className=" font-medium text-lg">Muhammed Zakariya</span>
          </div>
          <div className="">
            <ul className="">
              <NavLink
                to="/account"
                end
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
                exact="true"
              >
                <span className="px-5">Profile</span>
              </NavLink>
              <NavLink
                to="/account/photo"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
              >
                <span className="px-5">Photo</span>
              </NavLink>
              <NavLink
                to="/account/account-security"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
              >
                <span className="px-5">Account Security</span>
              </NavLink>
              <NavLink
                to="/account/payment-methods"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
              >
                <span className="px-5">Payment Methods</span>
              </NavLink>
              <NavLink
                to="/account/notifications"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
              >
                <span className="px-5">Notifications</span>
              </NavLink>
              <NavLink
                to="/account/messages"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
              >
                <span className="px-5">Messages</span>
              </NavLink>
              <NavLink
                to="/account/close-account"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 text-white bg-slate-950'
                    : 'block py-2 hover:text-white hover:bg-slate-950'
                }
              >
                <span className="px-5">Close Account</span>
              </NavLink>
            </ul>
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
            {/* <ProfileEdit /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
