//principal -> usuario 
//fazer mudar o nome e foto de usuário

import React from "react"

//sugestoes
export default function Sidebar() {
    const sugest = [
        { image: "assets/img/chibirdart.svg", user: "chibirdart", reason: "Segue você" },
        { image: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", reason: "Novo no Instagram" },
        { image: "assets/img/adorable_animals.svg", user: "adorable_animals", reason: "Segue você" },
        { image: "assets/img/smallcutecats.svg", user: "smallcutecats", reason: "Segue você" }
    ]
    const mainUser = [
        { mainImage: "assets/img/catanacomics.svg", mainName: "Cortana"}
    ]
    return (
        <div class="sidebar">
            {mainUser.map((a) => <UsuarioLogado mainImage={a.mainImage} mainName={a.mainName} />)}

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugest.map((a) => <Sugestoes image={a.image} user={a.user} reason={a.reason} />)}

            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    )
}

function Sugestoes(props) {
    console.log(props)
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} />
                <div class="texto">
                    <div class="nome">{props.user}</div>
                    <div class="razao">{props.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}

function UsuarioLogado(props) {
    const [editimage, setEditimage] = React.useState(props.mainImage)
    const [usermain, setUsermain] = React.useState(props.mainName)
    

    function mudarUsuario() {
        let userPrompt = prompt("Insira o nome de Usuário")
        setUsermain(userPrompt)
       
    }

    function mudarImagem(){
        let imagePrompt = prompt("Insira a URL de uma imagem")
        setEditimage(imagePrompt)
    }

    return (
        <div class="usuario">
            <img src={editimage} onClick={mudarImagem} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {usermain}
                    <ion-icon name="pencil" onClick={mudarUsuario}></ion-icon>
                </span>
            </div>
        </div>
    )
}

