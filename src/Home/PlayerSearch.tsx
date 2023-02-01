import { useState, FormEvent } from 'react';

interface SubmitSearch {
  submitSearch: (input: string) => void;
}

const PlayerSearch = ({ submitSearch }: SubmitSearch) => {

  const [input, setInput] = useState('');

  const handleChange = (e: FormEvent): void => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
  }

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    submitSearch(input);
  }

  return (
    <div id="player-search">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default PlayerSearch;