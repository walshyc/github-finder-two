import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

const UserSearch = () => {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      // todo search users
      searchUsers(text);
      setText('');
    }
  };
  return (
    <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      <div className="">
        <form onSubmit={handleSubmit} action="">
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="input input-lg w-full bg-gray-200 pr-40 text-black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn btn-lg absolute top-0 right-0 w-24 rounded-l-none"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className="">
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
