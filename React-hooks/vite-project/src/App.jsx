import { useEffect, useState } from "react"
import  Props,{userRoles}  from "./components/Props"

function App () {

  const [title, setTitle] = useState('default state');


  useEffect(()=>{
    setTimeout(()=>{
        setTitle('Set Time Out')
    },2000)
  },[])

  return (
    <>
      <Props title={title}/>

      {
        userRoles.Admin
      }
    </>
  )
}



export default App
