function Photography() {
    const photos = [
        { id: 1, src: 'photo1.jpg', alt: 'Photo 1' },
        { id: 2, src: 'photo2.jpg', alt: 'Photo 2' },
        { id: 3, src: 'photo3.jpg', alt: 'Photo 3' },
        { id: 4, src: 'photo4.jpg', alt: 'Photo 4' }
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