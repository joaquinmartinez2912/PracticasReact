import LMain from "../layouts/Lmain";

export default function Home(user, setUSer) {
    // const habdleLogout = () => {
    //     setUSer([])
    // }
    
    return (
        <LMain>
            <h1> Bienvenido a la pagina de inicio </h1>
            {/* <h2>{user}</h2> */}
            {/* <button onClick={habdleLogout}> Cerrar Sesion </button> */}
        </LMain>
    )
}
