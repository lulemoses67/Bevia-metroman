import React from 'react';
import Page from '../componets/Page';
import Section from '../componets/Section';

const Contact = () => {
    return (
        <>
          <Page title={'GEt in touch'} info={'Contact us for any inqury or help'} >
            <Section info={'Drop your message'}>
              <div className="row justify-center">
                <div className="col-12 col-lg-6">
                    <form>
                        <div className="form-element">
                            <label htmlFor="fullname">Full name</label>
                            <input type="text" name="fullname" id="fullname" placeholder="Full name" required />
                        </div>
                        <div className="form-element">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                        <div className="form-element">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message" required></textarea>
                        </div>
                        <div className="btn-group">
                            <button type="submit" className="btn-primary"><i className="fa fa-angles-right"></i> Send</button>
                        </div>
                    </form>
                </div>
              </div>
            </Section>
          </Page>   
        </>
    );
}

export default Contact;
