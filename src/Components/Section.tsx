import fashion from '../assets/fashion.jpg'
import part from '../assets/part.jpg'
import tailor from '../assets/tailor.jpg'
import design from '../assets/ojufin cloth.jpg'
import collection from '../assets/Zaynab Portrait.jpg'
import couture from '../assets/Fashion Designer.jpg'



const Section = () => {
    const images = [
        { id: 1, src: fashion, alt: "Evening Gown", category: "Evening Wear" },
        { id: 2, src: part, alt: "Wedding Dress", category: "Wedding" },
        { id: 3, src: tailor, alt: "Casual Wear", category: "Ready-to-Wear" },
        { id: 4, src: design, alt: "Men's Suit", category: "Menswear" },
        { id: 5, src: couture, alt: "Couture Piece", category: "Haute Couture" },
        { id: 6, src: collection, alt: "Capsule Collection", category: "Collection" },
    ];

    return (
        <section className="py-16 md:py-24 px-4" id='section'>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Portfolio</h2>
                <p className="text-gray-600 text-center mb-12">A glimpse of our finest creations</p>
                
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((image) => (
                        <div key={image.id} className="break-inside-avoid mb-6">
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-auto object-cover hover:scale-105 transition duration-300"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://via.placeholder.com/400x500?text=Image+Coming+Soon";
                                    }}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                    <p className="text-white text-sm font-semibold">{image.alt}</p>
                                    <p className="text-gray-300 text-xs">{image.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section