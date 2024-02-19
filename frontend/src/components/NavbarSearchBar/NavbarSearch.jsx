import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavbarSearch = () => {
  return (
    <div className="hidden md:block flex-1 ml-6">
      <div className="border-2 w-60 flex  rounded-sm border-slate-500 p-1">
        <form action="">
          <input
            autoComplete="false"
            name="search"
            id="search"
            className="outline-none flex-1 bg-inherit"
            type="search"
            placeholder="Search here"
          />
          <SearchOutlinedIcon className="text-slate-900" />
        </form>
      </div>
    </div>
  );
};

export default NavbarSearch;
