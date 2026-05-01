import React from 'react';
import Page from '../componets/Page';
import Section from '../componets/Section';

const About = () => {
    return (
        <>
            <Page title={'About Us'} info="Learn more about us" >
                <Section title="Who we are" info="About Brevia-metroman store">
                    <p>Welcome to Brevia, where we believe a scent is more than just a fragrance—it is a signature of your identity.
                    Based in the heart of Masaka Town and reaching enthusiasts worldwide through our online boutique, we specialize in the creation, distribution, and retail of premium perfumes, colognes, and essential oils.</p>
                </Section>
                <Section title="Who we do" info="At Brevia">
                    <p>We blend the precision of fragrance chemistry with a deep understanding of modern consumer trends to craft scents that resonate. Our expertise spans across three distinct pillars.
                    <br />
                    At Brevia, we don't just sell bottles; we capture emotions. By mastering the delicate balance of art and science, we ensure that every product we distribute—from essential oils to designer colognes—leaves a lasting impression.
                    <br />
                    Whether you visit us in-store or browse our collection online, we are dedicated to helping you find the scent that truly defines you.
                    </p>
                </Section>
                <Section title="Our Products" info="What we sell">
                    <p>Brevia specializes in the intersection of fragrance chemistry and consumer trends, offering a range of scents that span both natural and designer categories</p>
                    <p><b>Designer Colognes</b> High-end, trend-driven scents inspired by modern luxury and consumer preferences</p>
                    <p><b>Essential Oils</b> Pure extracts used for their natural aromatic properties and as foundations for custom blends.</p>
                    <p><b>Artisanal & Custom Scents</b> Bespoke fragrances crafted through their "three distinct pillars" of expertise, blending art and science to create emotional resonance.</p>
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
