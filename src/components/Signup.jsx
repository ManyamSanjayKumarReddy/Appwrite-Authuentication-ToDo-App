import React, { useState} from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'


function Signup() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
      name: "",
      email: "",
      password: ""
    })

    // Signup

    const signupUser = async (e) => {
      e.preventDefault()

      const promise = account.create(
        uuidv4(),
        user.email,
        user.password,
        user.name
      );

      promise.then(
        function(response){
          console.log(response);
          navigate('/') // success
        },
        function(error){
          console.log(error); // failure
        }
      )

    }
   

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-18 lg:px-8">
        <div className="text-center text-4xl font-bold">Sign up</div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-100 py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        name: e.target.value
                      })
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        email: e.target.value
                      })
                    }}
                    />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    onChange={(e) => {
                      setUser({
                        ...user,
                        password: e.target.value
                      })
                    }}
                    
                  />
                </div>
              </div>


              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Alreay have Account, Login
                  </a>
                </div>
              </div>


              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={signupUser}
                  
                >
                  Sign up
                </button>
              </div>
            </form>

            

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                
              </div>
              <div className="text-center font-bold text-1xl">Dear Users, After Testing and fixing the Minor Updates We are now able to authenticate in Mobile Aswell. Thankyou</div>
             
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Signup