import React from 'react';
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import Nav from './Nav';

const Layout = ({ children }) => {
  // console.log(data2);
  const { data: session } = useSession();
  if(!session) {
    return (
        <div className={`bg-blue-900 h-screen w-screen flex justify-center items-center`}>
          <div className='text-center w-full'>
              <button className='bg-white py-2 px-4 rounded-md shadow-lg' onClick={() => signIn("google")}>Login with Google</button>
          </div>
      </div>
    ) 
  } else {
    return (
      <div className={`flex bg-blue-900 min-h-screen`}>
        <Nav />
        <div className={`bg-white flex-grow mt-2 mr-2 rounded-lg p-4 mb-2 `}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout;

export async function getServerSideProps(context){

  const session = await getSession(context);

  return {
    props: {
      data2: 'hello',
    }
  }
}