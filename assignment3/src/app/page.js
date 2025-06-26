'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AuthContextProvider from "@/components/context/AuthContext";
import AuthContextChild from "@/components/AuthContextChild";
import AuthPrefCombinedContextProvider from "@/components/context/AuthPrefCombinedContextProvider";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter()
  return (
    <div className={styles.page}>
     <AuthPrefCombinedContextProvider>
     <AuthContextChild/>
     </AuthPrefCombinedContextProvider> 


      
      <button onClick={()=>router.push('/dashboard')}>go to dashboard</button>
      <button onClick={()=>router.push('/login')}>go to login page</button>
      <button onClick={()=>router.push('/about')}>go to about page</button>
      <button onClick={()=>router.push('/home')}>go to home page</button>
      <button onClick={()=>router.push('/products')}>go to products</button>

    </div>
  );
}
