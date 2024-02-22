function Ola ({foto,title}){
    //const frase = "Olá "+{nome.props}+"!!!";

    return(
        <div>
            <img src={foto} alt="logo_react"/>
            <p> logo: {title}</p>
        </div>
    )
}
export default Ola;