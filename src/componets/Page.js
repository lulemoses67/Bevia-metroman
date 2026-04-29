import React from 'react';

const Page = ({title, info, children}) => {
    return (
        <>
            <section className="section-container">
                <div className="container">
                    <div className="text-center">
                        <h2>{title}</h2>
                        <p>{info}</p>
                    </div>
                </div>
            </section>
            {children}
        </>
    );
}

export default Page;
