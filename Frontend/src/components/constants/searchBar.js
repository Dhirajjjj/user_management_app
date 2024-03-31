
function SearchBar({ value, onChange }) {
    return (
        <input
            onChange={onChange}
            value={value}
            type="text"
            placeholder="Search"
            class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" 
        />
    );
}

export default SearchBar;