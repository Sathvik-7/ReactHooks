import { useContext } from "react"
import { UserContext } from "./UserContext"
import UpdateUser from "./UpdateUser";

const UserProfile = () => {
    const {name} = useContext(UserContext);
  return (
    <div>
       <h1> UserProfile </h1>
       <p>Name : {name.name}</p>
       <UpdateUser/>
    </div>
  )
}

export default UserProfile