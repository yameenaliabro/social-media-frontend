import { AuthContext } from "@src/context/AuthContext"
import { useContext } from "react"

const useAuth = () => {
    const value = useContext(AuthContext);
    if (!value) {
        throw new Error("useAuth can only be used in AuthProvider!")
    }
    return value
}

export default useAuth