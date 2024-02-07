import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ListItems = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          onClick={onClick}
          key={item.id}
          className="pl-5 py-2 pr-1 hover:bg-slate-200 flex justify-between cursor-pointer"
        >
          <a className="font-medium" href="#">
            {item.text}
          </a>
          <ChevronRightIcon />
        </li>
      ))}
    </ul>
  );
};

export default ListItems;
