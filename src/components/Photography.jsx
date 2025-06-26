function Photography() {
    const photos = [
        { id: 1, src: 'src/assets/photo1.jpg', alt: 'Photo 1' },
        { id: 2, src: 'src/assets/photo2.jpg', alt: 'Photo 2' },
        { id: 3, src: 'src/assets/photo3.jpg', alt: 'Photo 3' },
        { id: 4, src: 'src/assets/photo4.jpg', alt: 'Photo 4' }
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