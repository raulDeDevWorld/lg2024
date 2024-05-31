'use client'

import Loader from '@/components/Loader'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/Context.js'
import { getSpecificData } from '@/firebase/utils'
import { onAuth } from '@/firebase/utils'








function Home({ children }) {

    const { user, userDB, setUserProfile, setUserData, cliente, setCliente } = useUser()
    const router = useRouter()
    console.log(user)
    useEffect(() => {
        if (user === undefined){ onAuth(setUserProfile, setUserData)}
          cliente === undefined &&  getSpecificData('/Cliente', setCliente)
    }, [user, cliente])
    return (
        <>
       
           <div>{children}</div>
        </>
    )
}

export default Home