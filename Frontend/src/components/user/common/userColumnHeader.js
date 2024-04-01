
function UserColumnHeader() {
    return (
        <div className="w-2/3 px-4 py-2 grid grid-cols-8 border-x border-b border-gray-200 bg-gray-100">
            <span className="text-xs font-medium text-gray-500 col-span-3">NAME</span>
            <span className="text-xs font-medium text-gray-500 col-span-2 text-center">DOB</span>
            <span className="text-xs font-medium text-gray-500 col-span-2 text-center">CREATED</span>
        </div>
    );
}

export default UserColumnHeader;