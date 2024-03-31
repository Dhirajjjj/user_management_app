import UserList from "./components/user/userList";
import ListUserController from "./controllers/listUserController";


function App() {
  return (
    <div className="App">
      <ListUserController>
        <UserList />
      </ListUserController>
    </div>
  );
}

export default App;
