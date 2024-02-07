import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { Link } from 'react-router-dom';

const ListItems = ({ items, onClick, isLink }) => {
  let content;

  if (isLink) {
    content = items.map((item) => (
      <li
        onClick={onClick}
        key={item.id}
        className="pl-5 py-3 pr-1  hover:bg-slate-200  cursor-pointer"
      >
        <span className="font-medium">{item.text}</span>
      </li>
    ));
  } else {
    content = items.map((item) => (
      <li
        onClick={onClick}
        key={item.id}
        className="pl-5 py-3 pr-1 hover:bg-slate-200 flex justify-between cursor-pointer"
      >
        <span className="font-medium" href="#">
          {item.text}
        </span>
        <ChevronRightIcon />
      </li>
    ));
  }

  return <ul>{content}</ul>;
};

export default ListItems;
