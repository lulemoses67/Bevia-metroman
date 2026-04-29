import React from 'react';
import Page from '../componets/Page';
import Section from '../componets/Section';

const About = () => {
    return (
        <>
            <Page title={'About Us'} info="Learn more about us" >
                <Section title="Who we are" info="About Brevia-metroman store">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis ea suscipit nisi eius voluptatibus dolor dolores? Quas debitis eum quisquam distinctio dolorem non quaerat iste, nesciunt, fuga a minima.</p>
                </Section>
                <Section title="Who we do" info="At Brevia">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis ea suscipit nisi eius voluptatibus dolor dolores? Quas debitis eum quisquam distinctio dolorem non quaerat iste, nesciunt, fuga a minima.</p>
                </Section>
                <Section title="Our Products" info="What we sell">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis ea suscipit nisi eius voluptatibus dolor dolores? Quas debitis eum quisquam distinctio dolorem non quaerat iste, nesciunt, fuga a minima.</p>
                </Section>
                <Section title="Our Team" info="Check out Team">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis ea suscipit nisi eius voluptatibus dolor dolores? Quas debitis eum quisquam distinctio dolorem non quaerat iste, nesciunt, fuga a minima.</p>
                </Section>
                <Section title="T&Cs" info="Terms and Conditions">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis ea suscipit nisi eius voluptatibus dolor dolores? Quas debitis eum quisquam distinctio dolorem non quaerat iste, nesciunt, fuga a minima.</p>
                </Section>
            </Page>
        </>
    );
}

export default About;
