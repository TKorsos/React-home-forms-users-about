const About = (props) => {

    const TextColor = () => {
  
      return (
        <>
          { props.color === "green" ? "zöld" : "piros" }
        </>
      )
  
    }
  
    return (
      <>
        <h1 style={ { color: props.color } }>Ez a About oldal, ennek a szövegnek a színe: { TextColor() }</h1>
        <button onClick={ ()=> props.changecolor("red") }>Módosítás</button>
      </>
    )
  
}

export default About;