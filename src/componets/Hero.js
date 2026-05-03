import { Link } from "react-router-dom";


const Hero = (props) => {
    return (
        <>
            <section className="reveal active fade-in hero row align-center" style={{'backgroundImage': `url("${props.bgimg}")`}} >
            <div className="container">
                <div className="row-content text-white">
                    <h1 className='x4'>{props.title}</h1>
                    <p>{props.body}</p>
                    <div className="btn-group-rt">
                    <Link href={'./about'} className='btn-primary'>About us</Link>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Hero;