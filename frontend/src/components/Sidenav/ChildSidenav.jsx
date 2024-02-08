import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItems from '../ListItems/ListItems';

const content = [
  { id: 0, text: 'Web Development' },
  { id: 1, text: 'Mobile Development' },
  { id: 2, text: 'Data Science' },
  { id: 3, text: 'Database Design & Development' },
  { id: 4, text: 'Game Development' },
  { id: 5, text: 'Software Testing' },
  { id: 6, text: 'Programming Languages' },
  { id: 7, text: 'No-Code Development' },
];

const ChildSidenav = ({ open, nestedClose, onClose }) => {
  return (
    <>
      <div
        className={`transition-spacing duration-300 ease-in-out ${
          open ? 'ml-0' : '-ml-72'
        } w-72 h-full fixed z-20 top-0 left-0 bg-slate-100  overflow-x-hidden overflow-y-scroll`}
      >
        <div
          onClick={nestedClose}
          className="pl-5 py-4 pr-1 font-medium bg-amber-100 hover:bg-slate-200 cursor-pointer"
        >
          <ChevronLeftIcon className="mr-5" />
          Menu
        </div>

        <hr />

        <div className="">
          <ListItems items={content} onClick={onClose} isLink={1} />
        </div>
      </div>
    </>
  );
};

export default ChildSidenav;
