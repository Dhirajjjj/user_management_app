
function UserListCard({ openEditUser, user, setUser }) {

    const formatDOB = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', options);
    };

    const formatCreatedDate = (dateTimeString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateTimeString);
        return date.toLocaleDateString('en-GB', options);
      };

    return (
        <div class="flex flex-col w-2/3">    
            <div class="px-4 py-2 gap-2 grid grid-cols-8 items-center border-b border-x border-gray-200 text-sm">
                <div class="col-span-3 py-1 flex flex-col items-start">
                    <text class="font-medium text-gray-600">{user.firstName} {user.lastName}</text>
                    <text class="text-sm text-gray-500">{user.email}</text>
                </div>
                <text class="col-span-2 font-normal text-gray-500 text-center">{formatDOB(user.dateOfBirth)}</text>
                <text class="col-span-2 font-normal text-gray-500 text-center">{formatCreatedDate(user.createdAt)}</text>
                <button class="col-span-1 text-sm font-medium text-indigo-500" 
                onClick={() =>{
                    setUser(user);
                    openEditUser();
                }} >
                    Edit
                </button>
            </div>
        </div>
    );
}

export default UserListCard;