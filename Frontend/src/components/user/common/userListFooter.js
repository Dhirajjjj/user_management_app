
function UserListFooter({ userListSize }) {
    return (
        <div class="flex flex-row items-center justify-between w-2/3 px-4 py-2 border-b border-x border-gray-200 rounded-b-md">
            <div class="text-sm font-medium text-gray-600">{userListSize} results</div>
        </div>
    );
}

export default UserListFooter;