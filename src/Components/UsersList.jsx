const UsersList = ({ userList, selectUser, setIsVisible, setIsOpen, 
  setIsDeleted, setFirstName, setLastName, setSelectedUser }) => {

    return (
      <section className="section-list">
        <div className="registered-button">
        <h2></h2>
        <button onClick={() => {setSelectedUser(null), setIsVisible(true)}}><span></span><p> New user</p></button>
        </div>
        <ul className="users">
          {userList?.map((user) => (
            <li className="" key={user.id}>
              <div className="email-birth">
              <h4>{user.first_name} {user.last_name}</h4>
              </div>
                <div className="email-birth">
                  <span>Email</span>
                  <p>{user.email}</p>
                  <span> Birthday</span> 
                  <p> 
                    {user.birthday}</p>
                </div>
             
              <div className="button-delete-edit">

              <button onClick={() => {selectUser(user); setFirstName(user.first_name); setLastName(user.last_name);
                 setIsVisible(true)}}>Update</button>
              <button className="delete" onClick={() => {setIsOpen(true);setIsDeleted(user.id); setFirstName(user.first_name); setLastName(user.last_name)}}>Delete</button>
  
              
                 </div>
            </li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default UsersList;