//conteúdo
import Stories from "./Stories"
import Posts from "./Posts"
import Sidebar from "./Sidebar"

export default function Body() {

    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />
            </div>
            <Sidebar />
        </div>
    )
}

//separação dentro de body:
//stories
//posts
//sidebar (usuário/sugestões)