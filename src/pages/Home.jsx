import Photography from '../components/Photography';
import heroImg from '../assets/home.jpg';

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section text-white py-5 mb-5">
                <div className="container">
                    <div className="row align-items-center min-vh-75">
                        <div className="col-lg-6">
                            <h1 className="display-3 fw-bold mb-4 text-white">
                                Capturing Life's
                                <span className="d-block text-white">
                                    Beautiful Moments
                                </span>
                            </h1>
                            <p className="lead mb-4 text-white">
                                Professional photography services in Mumbai. From weddings to portraits, 
                                I create timeless memories that tell your unique story.
                            </p>
                            <div className="d-flex gap-3">
                                <a href="#portfolio" className="btn btn-light btn-lg">
                                    View Portfolio
                                </a>
                                <a href="/contact" className="btn btn-outline-light btn-lg">
                                    Book Session
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img 
                                src={heroImg} 
                                alt="Professional Photography Services" 
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Section */}
            <div id="portfolio" className="container mb-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 mb-3">My Portfolio</h2>
                    <p className="lead">A showcase of my recent work</p>
                </div>
                <Photography />
            </div>

            {/* Call to Action */}
            <div className="py-5" style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <div className="container text-center">
                    <h3 className="mb-3 text-white">Ready to Create Beautiful Memories?</h3>
                    <p className="mb-4" style={{color: 'var(--text-secondary)'}}>Let's discuss your photography needs and bring your vision to life.</p>
                    <a href="/contact" className="btn btn-primary btn-lg">
                        <i className="fas fa-phone me-2"></i>
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;
