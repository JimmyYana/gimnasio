import Icon from "../atoms/Icon";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import "./searchBar.css";

interface Props {
  search: string;
  onSearch: (value: string) => void;
}

export default function SearchBar({ search, onSearch }: Props) {
  return (
    <div className="search-bar">
      <label>
        <Icon name="search" />
        <Input type="search" aria-label="Search by name or mobile" placeholder="Name/ Mobile"
          value={search} onChange={(event) => onSearch(event.target.value)} />
      </label>
      <Button disabled>SMS</Button>
    </div>
  );
}
