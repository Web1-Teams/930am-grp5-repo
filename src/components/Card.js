
const Card=(props)=>{
    return(
       <div className="card" style={{width: 300}}>
        <div className="card-body">
          <img src={props.image} alt="pictier" width="300 px"/>{props.ph}
          <h5 className="card-title">{props.titel}</h5>
          <p className="card-text">{props.paragraph}</p>
          <a href={props.link} class="btnbtn-primary">{props.Bo}</a>
        </div>
        </div>
    )
}
export default Card ;