import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { ListUser } from "../components/ListUser"
import { CreateUser } from "../components/CreateUser"

export const Home = () => {

  const user = useSelector((state: RootState) => state.user)  

  console.log(user)


  return (
    <div>
      <ListUser />
      <CreateUser />
    </div>
  )
}

