
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
        <div className="flex flex-col w-2/3">    
            <div className="px-4 py-2 gap-2 grid grid-cols-8 items-center border-b border-x border-gray-200 text-sm">
                <div className="col-span-3 py-1 flex flex-col items-start">
                    <span className="font-medium text-gray-600">{user.firstName} {user.lastName}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                </div>
                <span className="col-span-2 font-normal text-gray-500 text-center">{formatDOB(user.dateOfBirth)}</span>
                <span className="col-span-2 font-normal text-gray-500 text-center">{formatCreatedDate(user.createdAt)}</span>
                <button className="col-span-1 text-sm font-medium text-indigo-500" 
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