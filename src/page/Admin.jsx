import AuthProvider from "../componente/hoc/auth-provider";
import Main from "./back/main/index";

const Admin =() => {
    return(
    <AuthProvider>
        <Main />
    </AuthProvider>
    )
}

export default Admin;