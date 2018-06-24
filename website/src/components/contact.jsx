import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <section id="contact" className="contact">
                <div className="container">
                    <div className="col-xs-12">
                        <h1>Get In Touch</h1>
                    </div>
                    <div className="col-md-8 col-md-offset-2 col-xs-12 logos-container">
                        <div className="outerContact">
                            <a target="_blank" href="https://www.facebook.com/cyrus.cowley"><svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                            </svg></a>
                        </div>
                        <div className="outerContact">
                            <a target="_blank" href="https://github.com/cyficowley"><svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg></a>
                        </div>
                        <div className="outerContact">
                            <a target="_blank" href="https://www.instagram.com/cyficowley/"><svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                            </svg></a>
                        </div>
                        <div className="outerContact">
                            <a target="_blank" href="https://www.linkedin.com/in/cyrus-cowley-3babb1118"><svg className="contact-icon" viewBox="0 0 24 24">
                                <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                            </svg></a>
                        </div>
                    </div>
                    <div className="col-md-8 col-md-offset-2 col-xs-12">
                        <form action="https://formspree.io/cyficowley@gmail.com" id="contact-form" method="post">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" id="name" name="name" required placeholder="Cyrus Cowley" maxLength="50" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" id="email" name="_replyto" type="email" required placeholder="email@domain.com" maxLength="50" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea className="form-control" id="message" name="message" rows="3" required placeholder="Texty texty text" maxLength="750"></textarea>
                            </div>
                            <div className="col-md-8 col-md-offset-2 col-xs-12">
                                <div id="button">
                                    <h3 className="unselectable">SUBMIT</h3>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }


}