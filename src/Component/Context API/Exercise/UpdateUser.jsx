import React from 'react'
import { UserContext } from './UserContext'
import { useContext,useState } from 'react'

const UpdateUser = () => {
    const {updateUser} = useContext(UserContext);

    const [newName , setNewName] = useState('')

    const handleSubmit = (e) => 
        {
            e.preventDefault();

            updateUser(newName);

            setNewName('')
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} 
            onChange={(e)=> 
                {setNewName(e.target.value)}}
            placeholder='Enter a name'    
            />
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default UpdateUser