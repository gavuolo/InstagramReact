import React from "react"
//posts: img / usuario


export default function Posts() {
    const infoPost = [
        { userImage: "assets/img/meowed.svg", userName: "meowed", content: "assets/img/gato-telefone.svg", lastLikeImage: "assets/img/respondeai.svg", lastLikeUser: "respondeai", like: "101.523" },
        { userImage: "assets/img/barked.svg", userName: "barked", content: "assets/img/dog.svg", lastLikeImage: "assets/img/adorable_animals.svg", lastLikeUser: "dorable_animals", like: "99.159" }
    ]
    return (
        <div class="posts">
            {infoPost.map((a) => <Post userImage={a.userImage} userName={a.userName} content={a.content} lastLikeImage={a.lastLikeImage} lastLikeUser={a.lastLikeUser} like={a.like} />)}
        </div>

    )
}

//condição onde ser curtida for true adiciona a classe 

//numero de curtidas = se isLike for true props.like +1

function Post(props) {
    console.log(props)
    
    const [isLike, setLike] = React.useState(false)
    const [isSave, setSave] = React.useState(false)
    const [number, setNumber] = React.useState(props.like)
    

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.userImage} />
                    {props.userName}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.content} onClick={(() => setLike(!isLike))} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div >  
                        
                        {isLike ? <ion-icon name="heart" onClick={(() => setLike(!isLike))} class="like"></ion-icon> : <ion-icon name="heart-outline" onClick={(() => setLike(!isLike))}></ion-icon>}
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        {isSave ? <ion-icon name="bookmark" class="save" onClick={(() => setSave(!isSave))}></ion-icon> : <ion-icon name="bookmark-outline" onClick={(() => setSave(!isSave))}></ion-icon> }
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.lastLikeImage} onClick={numeroCurtida}/>
                    <div class="texto">
                        Curtido por <strong>{props.lastLikeUser}</strong> e  outras <strong>{number}</strong> pessoas
                    </div>
                </div>
            </div>
        </div>
    )
}


