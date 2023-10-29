import { Link } from "react-router-dom"
import LMain from "../layouts/Lmain";

const list = [{
    name: 'Mouse',
    slug: 'mouse',
    description: ' Mouse and Keyboard'
},
{
    name: 'Keyboard',
    slug: 'keyboard',
    description: 'Descripcion Keyboard'
}
]

export default function Productos() {
    return (
        <LMain>
            <h1>Product list</h1>
            <ul>
                {list.map(p => (
                    <li key={p.slug}>
                        <Link to={p.slug}  >
                            {p.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </LMain>
    )
}