//story: img / usuario 

//Estrutura principal
export default function Stories() {
    const story = [
        {urlImage:"assets/img/9gag.svg", user:"9gag" },
        {urlImage:"assets/img/meowed.svg", user:"meowed"},
        {urlImage:"assets/img/barked.svg", user:"barked"},
        {urlImage:"assets/img/nathanwpylestrangeplanet.svg", user:"nathanwpylestrangeplanet"},
        {urlImage:"assets/img/wawawicomics.svg", user:"wawawicomics"},
        {urlImage:"assets/img/respondeai.svg", user:"respondeai"},
        {urlImage:"assets/img/filomoderna.svg", user:"filomoderna"},
        {urlImage:"assets/img/memeriagourmet.svg", user:"memeriagourmet"}

    ]

    return (
        <div class="stories">
            {story.map((a) => <Story urlImage={a.urlImage} user={a.user} />)}
            
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}

function Story(props) {
    console.log(props)
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.urlImage}/>
            </div>
            <div class="usuario">
                {props.user}
            </div>
        </div>
        )

}
