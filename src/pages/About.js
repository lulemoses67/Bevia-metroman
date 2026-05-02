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
                <Section title="T&Cs" info="Terms and Conditions">
                    <div>
                        <h3>1. Ordering Process</h3>
                        <p>By placing an order on Brevia-Metroman, you understand that our website acts as a catalog.</p>
                        <ul>
                            <li>Once you select your items, your order request is sent directly to us via WhatsApp.</li>
                            <li>An order is only considered confirmed after a member of our team contacts you via WhatsApp or phone call to verify availability and delivery details.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>2. Delivery Locations & Pricing</h3>
                        <p>We currently offer delivery services to the following locations:</p>
                        <ul>
                            <li>Kampala City</li>
                            <li>Mbarara City</li>
                            <li>Masaka City</li>
                        </ul>
                        <p>Delivery Fees:</p>
                        <ul>
                            <li>A flat rate of 5,000 UGX applies to all deliveries within the City Center of the locations listed above.</li>
                            <li>Deliveries outside the immediate city centers may attract an additional fee, which will be communicated and agreed upon during the confirmation call.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>3. Payment</h3>
                        <p>Payment terms (Mobile Money or Cash on Delivery) will be finalized during the order confirmation process on WhatsApp. Please do not make any payments until your order has been confirmed by our official representative.</p>
                    </div>
                    <div>
                        <h3>4.  Delivery Timelines</h3>
                        <p>While we strive for same-day or next-day delivery, specific delivery times depend on courier availability and will be communicated during your WhatsApp consultation.</p>
                    </div>
                </Section>
            </Page>
        </>
    );
}

export default About;
