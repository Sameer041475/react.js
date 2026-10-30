import './index.css'
const components = prop =>{
    const{name,greeting} = props
    return(
        <h1 className = "message">{greeting},{name}</h1>
    )
}
export default components;