import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { Link } from 'react-router-dom';

const ListItems = ({ items, onClick, isLink, onMouseEnter }) => {
  let content;

  if (isLink === 1) {
    content = items.map((item) => (
      <li
        onClick={onClick}
        key={item._id}
        className="pl-5 py-3 pr-1  hover:bg-slate-200  cursor-pointer"
      >
        <span className="font-medium">{item.name}</span>
      </li>
    ));
  } else {
    content = items.map((item) => (
      <li
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        key={item._id}
        className="pl-5 py-3 pr-1 hover:bg-slate-200 flex justify-between cursor-pointer"
      >
        <span className="font-medium" href="#">
          {item.name}
        </span>
        <ChevronRightIcon />
      </li>
    ));
  }

  return <ul>{content}</ul>;
};

export default ListItems;
