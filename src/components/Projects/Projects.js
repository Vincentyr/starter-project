import './Projects.css'
import Product from "./Product";
import {products} from "./data"

function Projects() {
    return (
        <section className = "pl">
            <div className = "overlay" id="Projects">        
                <h1 className = "p-title">Projects</h1>
                <p className = "p-para"> This is the list of Projects that I have done</p>
            </div>
            <div className = "Projectlist">
                <div className="p-list">
                    {products.map(item=>(
                        <Product key={item.id} img={item.img} link={item.link}/>
                    ))}
                </div> 
            </div>
        </section>
    );
}

export default Projects;

