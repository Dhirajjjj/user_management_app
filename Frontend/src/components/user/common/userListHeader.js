import SearchBar from "../../constants/searchBar";

function UserListHeader({ openAddUser, searchQuery, searchChange }) {

    return (
        <div className="flex flex-row w-2/3 px-4 py-2 items-center justify-between border border-solid border-1 rounded-t-md border-gray-200">
            <div className="py-1 flex flex-col items-start">
                <span className="text-2xl font-bold text-gray-700">Users</span>
                <span className="text-xs font-medium text-gray-400">Add users, edit and more</span>
            </div>
            <div className="flex flex-row items-center gap-2">
                <SearchBar value={searchQuery} onChange={searchChange}/>
                <button className="flex flex-cols gap-1 px-4 py-2 bg-indigo-500 rounded-md items-center" onClick={openAddUser}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M6 12h12M12 18V6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <span className="text-sm text-white font-medium">Add user</span>
                </button>
            </div>
        </div>
    );
}

export default UserListHeader;