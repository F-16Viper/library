import './header.css'

function Header(props) {
    return (
        <div className='header center'>
            <div className='livre1 '>
                    <h2>{props.title}</h2>
                    <h2>{props.name}</h2>
                    <h2>{props.date}</h2>
                    <h2>{props.note}</h2>
            </div>
            <div>
                <img src={props.image} className='img' ></img> 
                <div className='middle'>
                    <div className='text'>
                        <a>ajouter</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;