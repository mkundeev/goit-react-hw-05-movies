import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchForm({ onSubmit }) {
  const [search, setSearch] = useState('');

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (search.trim() === '') {
      toast.error('Please enter search request', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    onSubmit(search);
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
