import profile from '../assets/profile.jpg';
function About() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="text-center mb-5">
                        <h2 className="display-4 mb-3" style={{ color: 'white' }}>About Me</h2>
                        <p className="lead" style={{ color: 'white' }}>Capturing life's beautiful moments </p>
                    </div>
                    
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body text-center p-5">
                                    <div className="mb-4">
                                        <img 
                                            src={profile}
                                            alt="Photographer" 
                                            className="rounded-circle img-fluid"
                                            style={{width: '200px', height: '200px', objectFit: 'cover'}}
                                        />
                                    </div>
                                    <h4 className="mb-3">Akshat</h4>
                                    <p className="text-muted mb-0">Professional Photographer</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="p-4">
                                <h3 className="mb-4">My Story</h3>
                                <p className="mb-3">
                                    Welcome to my world of photography! I'm Akshat, a passionate photographer 
                                    based in Mumbai with over 5 years of experience capturing life's most 
                                    precious moments.
                                </p>
                                <p className="mb-3">
                                    My journey began with a simple camera and a dream to freeze time in 
                                    beautiful frames. Today, I specialize in wedding photography, portraits, 
                                    and lifestyle shoots that tell your unique story.
                                </p>
                                <p className="mb-4">
                                    Every click of my camera is driven by the desire to create memories 
                                    that will last a lifetime. Let's create something beautiful together!
                                </p>
                                
                                <div className="row text-center">
                                    <div className="col-4">
                                        <h4 className="text-primary">500+</h4>
                                        <small className="lead" style={{ color: 'white' }}>Happy Clients</small>
                                    </div>
                                    <div className="col-4">
                                        <h4 className="text-primary">50+</h4>
                                        <small className="lead" style={{ color: 'white' }}>Weddings</small>
                                    </div>
                                    <div className="col-4">
                                        <h4 className="text-primary">5+</h4>
                                        <small className="lead" style={{ color: 'white' }}>Years Experience</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className="card shadow-sm">
                                <div className="card-body p-5">
                                    <h3 className="text-center mb-4">My Specialties</h3>
                                    <div className="row">
                                        <div className="col-md-3 text-center mb-4">
                                            <i className="fas fa-heart fa-3x text-primary mb-3"></i>
                                            <h5>Wedding Photography</h5>
                                            <p className="text-muted small">Capturing your special day with artistic flair</p>
                                        </div>
                                        <div className="col-md-3 text-center mb-4">
                                            <i className="fas fa-user fa-3x text-primary mb-3"></i>
                                            <h5>Portrait Sessions</h5>
                                            <p className="text-muted small">Professional headshots and personal portraits</p>
                                        </div>
                                        <div className="col-md-3 text-center mb-4">
                                            <i className="fas fa-camera fa-3x text-primary mb-3"></i>
                                            <h5>Event Photography</h5>
                                            <p className="text-muted small">Corporate events and special occasions</p>
                                        </div>
                                        <div className="col-md-3 text-center mb-4">
                                            <i className="fas fa-box fa-3x text-primary mb-3"></i>
                                            <h5>Product Photography</h5>
                                            <p className="text-muted small">High-quality product shots for businesses</p>
                                        </div>
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

export default About;
