import { useState } from "react"

function ListComponent() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState('');

  const addUser = () => {
    const userToAdd = {
      name: name,
      id: Math.random()
    }

    const updatedUsersList = [userToAdd, ...userList, ];
    setUserList(updatedUsersList);
  }

  const onRemove = (user) => {
    const updatedList = [...userList];
    let itemToRemove = updatedList.findIndex((item) => item.id === user.id)
    updatedList.splice(itemToRemove, 1);
    setUserList(updatedList)
    
  }

  return (
    <div>
      <div>List Component</div>
      <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
      <button onClick={addUser}>Add User</button>
      <ul>
        {
          userList.map((user, index) => {
            return (
              <div key={user.id}>
                {`Index: ${index} : ${user.name}`}
                <button onClick={() => onRemove(user)}>Remove</button>
              </div>
            )
          })
        }
      </ul>
    </div>
  )
}

export default ListComponent;