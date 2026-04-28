import React from 'react';

const Section = ({title,  info, children }) => {
    return (
        <section className="section-container">
            <div className="container">
                <div className="text-center">
                    <h3 className='section-title'>{title}</h3>
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
