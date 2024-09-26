import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

export const ListUser = () => {

    const user = useSelector((state: RootState) => state.user)


    return (
        <header>
            {
                user &&
                <>
                    <p>Usuario</p>
                    <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                </>
            }

        </header>
    )
}
