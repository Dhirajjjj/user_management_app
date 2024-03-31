
function UserColumnHeader() {
    return (
        <div class="w-2/3 px-4 py-2 grid grid-cols-8 border-x border-b border-gray-200 bg-gray-100">
            <text class="text-xs font-medium text-gray-500 col-span-3">NAME</text>
            <text class="text-xs font-medium text-gray-500 col-span-2 text-center">DOB</text>
            <text class="text-xs font-medium text-gray-500 col-span-2 text-center">CREATED</text>
        </div>
    );
}

export default UserColumnHeader;