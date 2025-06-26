function Photography() {
    const photos = [
        { id: 1, src: 'public/photo1.jpg', alt: 'Photo 1' },
        { id: 2, src: 'public/photo2.jpg', alt: 'Photo 2' },
        { id: 3, src: 'public/photo3.jpg', alt: 'Photo 3' },
        { id: 4, src: 'public/photo4.jpg', alt: 'Photo 4' }
    ];
    
    return (
        <div className="photo-gallery">
            {photos.map(photo => (
                <div key={photo.id} className="photo-item">
                    <img src={photo.src} alt={photo.alt} />
                </div>
            ))}
        </div>
    );
}
export default Photography;