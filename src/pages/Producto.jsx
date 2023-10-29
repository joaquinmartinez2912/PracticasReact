import { useParams } from "react-router-dom";
import LMain from "../layouts/Lmain";


export default function Producto(props) {
    let { productId } = useParams();
    
    return (
        <LMain>
            <h1> Producto: {productId}</h1>
            <p> Descrpcion {productId}</p>
        </LMain>
    )
}
