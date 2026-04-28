

const Hero = (props) => {
    return (
        <>
            <section className="reveal active fade-in hero row align-center" style={{'backgroundImage': `url("${props.bgimg}")`}} >
            <div className="container">
                <div className="row-content text-white">
                    <h2 className='x4'>{props.title}</h2>
                    <p>{props.body}</p>
                    <div className="btn-group-rt">
                    <a href={'./about'} className='btn-primary'>About us</a>
                    </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Hero;