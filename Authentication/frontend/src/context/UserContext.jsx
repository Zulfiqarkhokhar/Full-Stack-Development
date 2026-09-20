import { dataContext } from "./dataContext"

const UserContext = ({children}) => {

    const value = {
        serverUrl:"http://localhost:8000"
    }

  return (
    <dataContext.Provider value={value}>
        {children}
    </dataContext.Provider>
  )
}

export default UserContext