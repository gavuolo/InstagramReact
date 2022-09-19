import React from "react"
//posts: img / usuario


export default function Posts() {
    const infoPost = [
        {userImage:"assets/img/meowed.svg", userName:"meowed", content:"assets/img/gato-telefone.svg", lastLikeImage:"assets/img/respondeai.svg", lastLikeUser:"respondeai", like:"outras 101.523 pessoas"},
        {userImage:"assets/img/barked.svg", userName:"barked", content:"assets/img/dog.svg", lastLikeImage:"assets/img/adorable_animals.svg", lastLikeUser:"dorable_animals", like:"outras 99.159 pessoas"}
    ]
    return (
        <div class="posts">
            {infoPost.map((a) => <Post userImage={a.userImage} userName={a.userName} content={a.content} lastLikeImage={a.lastLikeImage} lastLikeUser={a.lastLikeUser} like={a.like} />)}
        </div>

    )
}

function Post(props){
    console.log(props)
    

    return(
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
                    <img src={props.content} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.lastLikeImage}/>
                        <div class="texto">
                            Curtido por <strong>{props.lastLikeUser}</strong> e <strong>{props.like}</strong>
                        </div>
                    </div>
                </div>
            </div>
    )
}