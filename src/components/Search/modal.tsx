import { useState } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch } from "../../redux/hooks";
import { searchUser } from "../../store/slice/userSlice";
import { User } from "../../store/slice/userSlice";
import './Search.module.scss'

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [foundUser, setFoundUser] = useState<User | null>(null); // Состояние для хранения найденного пользователя
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    // Выполнить поиск пользователя и установить найденного пользователя в состояние
    const user = dispatch(searchUser(searchQuery));
    if (user) {
      setFoundUser(users); // Установить найденного пользователя только если он найден
    }
  };
  

  return isOpen ? (
    ReactDOM.createPortal(
      <div className="modal">
        <div className="modal-content">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter user name"
          />
          <button onClick={handleSearch}>Search</button>
          <button onClick={onClose}>Close</button>
        </div>
        {/* Отображение найденного пользователя */}
        {foundUser && (
          <div>
            <p>Name: {foundUser.name}</p>
            <p>Vacancy: {foundUser.vacancy}</p>
            <p>Phone: {foundUser.phone}</p>
          </div>
        )}
      </div>,
      document.getElementById("modal-root")!
    )
  ) : null;
};

export default SearchModal;


