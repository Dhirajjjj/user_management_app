
function UserListHeader({ openAddUser }) {
    return (
        <div class="flex flex-row w-2/3 px-4 py-2 items-center justify-between border border-solid border-1 rounded-t-md border-gray-200">
            <div class="py-1 flex flex-col items-start">
                <span class="text-2xl font-bold text-gray-700">Users</span>
                <span class="text-xs font-medium text-gray-400">Add users, edit and more</span>
            </div>
            <button class="flex flex-cols gap-1 px-4 py-2 bg-indigo-500 rounded-md items-center" onClick={openAddUser}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12h12M12 18V6" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <span class="text-sm text-white font-medium">Add user</span>
            </button>
        </div>
    );
}

export default UserListHeader;