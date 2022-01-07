export default function Card(props) {
    console.log(props)
    return (

        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
            </div>
            <ul className="list-group list-group-flush">

                <li className="list-group-item">{props.startDate}- {props.endDate}</li>
            </ul>
            <div className="card-body">

                <h6><span class="badge bg-secondary">{props.location}</span></h6>
                <a href="/" className="card-link">{props.googleMapsUrl}</a>
            </div>
        </div>




    )
}