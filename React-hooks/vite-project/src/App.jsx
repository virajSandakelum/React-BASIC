import  Props,{userRoles}  from "./components/Props"

function App () {

  return (
    <>
      <Props />

      {
        userRoles.Admin
      }
    </>
  )
}



export default App
