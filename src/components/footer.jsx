function Footer() {
    return (
        <footer className="bg-dark text-white py-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">
                            <i className="fas fa-camera text-primary me-2"></i>
                            Frame Theory by Akshat
                        </h5>
                        <p className="text-light opacity-75">
                            Capturing life's beautiful moments with creativity and passion. 
                            Based in Mumbai, serving clients worldwide.
                        </p>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Contact Info</h5>
                        <p className="mb-2">
                            <i className="fas fa-envelope me-2"></i>
                            <a href="mailto:akshat@gmail.com" className="text-light text-decoration-none">
                                akshat@gmail.com
                            </a>
                        </p>
                        <p className="mb-2">
                            <i className="fas fa-phone me-2"></i>
                            <a href="tel:+919876543210" className="text-light text-decoration-none">
                                +91 98765 43210
                            </a>
                        </p>
                        <p className="mb-0">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            Mumbai, India
                        </p>
                    </div>
                    
                    <div className="col-md-4 mb-4">
                        <h5 className="mb-3">Follow Me</h5>
                        <div className="d-flex gap-3 mb-3">
                            <a 
                                href="https://instagram.com/akshat_m13" 
                                className="btn btn-outline-light btn-sm"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram me-1"></i>
                                Instagram
                            </a>
                            <a 
                                href="https://facebook.com/akshatphotography" 
                                className="btn btn-outline-light btn-sm"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook me-1"></i>
                                Facebook
                            </a>
                        </div>
                        <div className="d-flex gap-2">
                            <a 
                                href="https://wa.me/916307815581" 
                                className="btn btn-success btn-sm"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-whatsapp me-1"></i>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
                
                <hr className="my-4 opacity-25" />
                
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p className="mb-0 text-light opacity-75">
                            © 2025 Akshat Photography. All rights reserved.
                        </p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-0 text-light opacity-75">
                            Made with <i className="fas fa-heart text-danger"></i> for photography lovers
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;