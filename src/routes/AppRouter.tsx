import { Outlet, Route, Routes } from "react-router-dom"
import { routes } from "./routes"

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<div>
                <p>Layout</p>
                <Outlet />
            </div>}>

                {
                    routes.map(({ id, path, Element }) => (
                        <Route key={id} path={path} element={<Element />} />
                    ))
                }

            </Route>
        </Routes>
    )
}

export default AppRouter
