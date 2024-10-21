import './Product.css'
function Ajay(props){
    console.log(props);
    return(
        <div className="jk">
            <p>{props.title}</p>
            <p>price:{props.price}</p>
        </div>
    )
}
export default Ajay;