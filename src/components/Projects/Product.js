import './Projects.css'

function Product({img,link}) {
    return(
        <div className='prod'>
            <div className='browser'>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="img1"></img>
            </a>
        </div>
    );
}

export default Product;