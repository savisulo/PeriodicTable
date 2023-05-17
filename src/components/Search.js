const Search = ({ text, search, handleSearch, option1, option2, option3 }) =>
    <div>
        <label htmlFor="search-options">{text}</label>
        <select id="search-options">
            <option>{option1}</option>
            <option>{option2}</option>
            <option>{option3}</option>
        </select>
        <input value={search} onChange={handleSearch} />
    </div>

export default Search