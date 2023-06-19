import React, { useState, useEffect} from 'react'
import {account} from '../appwrite/appwriteConfig'
import {useNavigate, Link} from 'react-router-dom'
import TodoForm from './TodoForm'
import Todos from './Todos'


function Profile() {
    const navigate = useNavigate()

    const [userDetails, setuserDetails] = useState()

    useEffect(() => {
      const getData = account.get()
      getData.then(
        function(response){
            setuserDetails(response)
        },
        function(error){
            console.log(error)
        }
      )
    }, [])


    const handleLogout = async () => {
        
    try {
        await account.deleteSession("current")
        navigate("/")
        
    } catch (error) {
        console.log(error)
    }

    }
    // Control + U for Uncommenting all the Code which in commented state
  return (
    <>
      {userDetails ? (
        <>
          <div className="min-h-min max-w-7xl mx-auto shadow-md flex justify-between text-right py-3 px-3 mt-2 rounded-md">
            <div>
              <p className="text-xl">Hello, {userDetails.name} !</p>
            </div>
            <div>
              <button
                className="bg-red-400 text-white p-1 rounded-md"
                onClick={handleLogout}
                
              >
                Logout
              </button>
            </div>
          </div>
          {/* TODO FORM */}
          <TodoForm />
          {/* TODOS BOX */}
          <Todos />
        </>
      ) : (
        <p className="mt-4 min-h-min max-w-7xl mx-auto shadow-md flex justify-center text-right py-3 px-6 rounded-md">
          Please Login To see Profile{" "}
          <Link to="/"> &nbsp;&nbsp;
            <span className="bg-blue-300 p-2 cursor-pointer text-white rounded-md ">
              Login
            </span>
          </Link>
        </p>
      )}
    </>
  )
}

export default Profile