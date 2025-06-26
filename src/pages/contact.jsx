function Contact() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="text-center mb-5">
                        <h2 className="display-4 mb-3">Get In Touch</h2>
                        <p className="lead text-muted">Let's create something beautiful together</p>
                    </div>
                    
                    <div className="row">
                        {/* Contact Form */}
                        <div className="col-md-8">
                            <div className="card shadow-sm">
                                <div className="card-body p-4">
                                    <h4 className="card-title mb-4">Send Me a Message</h4>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="service" className="form-label">Service Type</label>
                                            <select className="form-select" id="service">
                                                <option>Select a service</option>
                                                <option>Wedding Photography</option>
                                                <option>Portrait Session</option>
                                                <option>Event Photography</option>
                                                <option>Product Photography</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea className="form-control" id="message" rows="4" placeholder="Tell me about your project..."></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        {/* Contact Info */}
                        <div className="col-md-4">
                            <div className="card shadow-sm h-100">
                                <div className="card-body p-4">
                                    <h4 className="card-title mb-4">Contact Info</h4>
                                    
                                    <div className="d-flex mb-3">
                                        <i className="fas fa-envelope text-primary me-3 mt-1"></i>
                                        <div>
                                            <h6 className="mb-1">Email</h6>
                                            <p className="text-muted mb-0">akshat@gmail.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex mb-3">
                                        <i className="fas fa-phone text-primary me-3 mt-1"></i>
                                        <div>
                                            <h6 className="mb-1">Phone</h6>
                                            <p className="text-muted mb-0">+91 98765 43210</p>
                                        </div>
                                    </div>
                                    
                                    <div className="d-flex mb-4">
                                        <i className="fas fa-map-marker-alt text-primary me-3 mt-1"></i>
                                        <div>
                                            <h6 className="mb-1">Location</h6>
                                            <p className="text-muted mb-0">Mumbai, India</p>
                                        </div>
                                    </div>
                                    
                                    <hr />
                                    
                                    <h6 className="mb-3">Follow Me</h6>
                                    <div className="d-flex gap-3">
                                        <a href="https://instagram.com/yourusername" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-instagram me-2"></i>Instagram
                                        </a>
                                        <a href="https://facebook.com/yourusername" className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-facebook me-2"></i>Facebook
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
