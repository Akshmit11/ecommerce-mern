import React from 'react';
import Layout from '@/components/Layout';
import { getSession, signOut } from 'next-auth/react';


const Login = ({ data }) => {

  return (
    <Layout>
      <div className={`text-blue-900 flex justify-between`}>
        <h2>
          Welcome, <span className={`font-bold`}>{data?.user?.name}</span>
        </h2>
        <div>
          <img src={data?.user?.image} alt="user-profile" className={`w-12 h-12 rounded-full cursor-pointer`} onClick={() => signOut()}  />
        </div>
      </div>
    </Layout>
  );
}

export default Login;


export async function getServerSideProps(context){

  const session = await getSession(context);


  return {
    props:{
      data: session,
    }
  }
}