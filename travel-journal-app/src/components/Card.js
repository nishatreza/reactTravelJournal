export default function Card(props) {
    console.log(props)
    return (


        <div className="container">
            <div className="row">
                <div className="col-4">
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
                            <a href="/" className="card-link">{props.location}</a>
                            <a href="/" className="card-link">{props.googleMapsUrl}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}