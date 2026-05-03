import React from 'react';

const Section = ({title,  info, children, class_name }) => {
    return (
        <section className={"section-container reveal active fade-in " + class_name}>
            <div className="container">
                <div className="text-center">
                    <h2 className='section-title'>{title}</h2>
                    <p className='section-info text-primary'>[{info}]</p>
                </div>
                <div className="row-content">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default Section;
