import weddingImg from '../assets/wedding.jpg';
import portraitImg from '../assets/potrait.jpg';
import eventImg from '../assets/event.jpg';
import productImg from '../assets/product.jpg';

function Services() {
    const services = [
        {
            id: 1,
            title: "Wedding Photography",
            icon: "fas fa-heart",
            description: "Capture your special day with artistic flair and timeless elegance",
            features: ["Full day coverage", "Engagement shoot", "High-res digital gallery", "Custom photo album"],
            price: "Starting at ₹50,000",
            image: weddingImg
        },
        {
            id: 2,
            title: "Portrait Photography",
            icon: "fas fa-user",
            description: "Professional headshots and personal portraits that showcase your personality",
            features: ["1-2 hour session", "Multiple outfit changes", "Professional editing", "Online gallery"],
            price: "Starting at ₹8,000",
            image: portraitImg
        },
        {
            id: 3,
            title: "Event Photography",
            icon: "fas fa-camera",
            description: "Corporate events, parties, and special occasions documented beautifully",
            features: ["Event coverage", "Candid moments", "Group photos", "Quick turnaround"],
            price: "Starting at ₹15,000",
            image: eventImg
        },
        {
            id: 4,
            title: "Product Photography",
            icon: "fas fa-box",
            description: "High-quality product shots for e-commerce and marketing",
            features: ["Studio lighting", "Multiple angles", "Lifestyle shots", "E-commerce ready"],
            price: "Starting at ₹5,000",
            image: productImg
        }
    ];

    return (
        <div className="container my-5">
            <div className="text-center mb-5">
                <h2 className="display-4 mb-3">My Services</h2>
                <p className="lead">Professional photography services tailored to your needs</p>
            </div>
            
            <div className="row">
                {services.map(service => (
                    <div key={service.id} className="col-lg-6 mb-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="row g-0 h-100">
                                <div className="col-md-5">
                                    <img 
                                        src={service.image} 
                                        alt={service.title}
                                        className="img-fluid rounded-start h-100 w-100"
                                        style={{objectFit: 'cover'}}
                                    />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body p-4 d-flex flex-column h-100">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className={`${service.icon} fa-2x text-primary me-3`}></i>
                                            <h4 className="card-title mb-0">{service.title}</h4>
                                        </div>
                                        
                                        <p className="card-text text-muted mb-3">
                                            {service.description}
                                        </p>
                                        
                                        <ul className="list-unstyled mb-3 flex-grow-1">
                                            {service.features.map((feature, index) => (
                                                <li key={index} className="mb-1">
                                                    <i className="fas fa-check text-success me-2"></i>
                                                    <small>{feature}</small>
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        <div className="mt-auto">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className="h5 text-primary mb-0">{service.price}</span>
                                                <a href="/contact" className="btn btn-primary btn-sm">
                                                    Book Now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="row mt-5">
                <div className="col-12">
                    <div className="card bg-primary text-white">
                        <div className="card-body text-center p-5">
                            <h3 className="mb-3">Need a Custom Package?</h3>
                            <p className="mb-4">
                                Every project is unique. Let's discuss your specific requirements 
                                and create a custom photography package that fits your needs and budget.
                            </p>
                            <a href="/contact" className="btn btn-light btn-lg">
                                <i className="fas fa-phone me-2"></i>
                                Get Custom Quote
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;