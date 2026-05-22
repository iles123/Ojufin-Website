import { useState } from 'react';
import bg from '../assets/ojufin cloth.jpg';
import logo from '../assets/ojufin.png';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen" id='home'>
            {/* Hero Section */}
            <div 
                className="bg-cover bg-center h-screen relative"
                style={{ backgroundImage: `url(${bg})` }}
            >
                {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
                
                <nav className="relative z-20 flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 md:py-6">
                    <div className="flex items-center">
                        <img 
                            src={logo} 
                            alt="Ojufin Logo" 
                            className="w-30 h-30 md:w-32 md:h-32 object-contain" 
                            sizes='30px'
                        />
                        <span className="ml-2 text-white text-xl md:text-2xl font-bold">
                            OJUFIN
                        </span>
                    </div>
                    
                    <div className="hidden md:flex space-x-6 lg:space-x-8">
                        <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-white hover:text-gray-300 transition">Home</a>
                        <a href="#section" onClick={(e) => handleLinkClick(e, 'section')} className="text-white hover:text-gray-300 transition">Collection</a>
                        <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-white hover:text-gray-300 transition">Services</a>
                        <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-white hover:text-gray-300 transition">About</a>
                        <a href="#footer" onClick={(e) => handleLinkClick(e, 'footer')} className="text-white hover:text-gray-300 transition">Contact</a>
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white focus:outline-none z-50 relative"
                    >
                        {!isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        )}
                    </button>
                </nav>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-md z-10 animate-slideDown">
                        <div className="flex flex-col space-y-4 px-6 py-6">
                            <a 
                                href="#home" 
                                onClick={(e) => handleLinkClick(e, 'home')} 
                                className="text-white hover:text-gray-300 transition text-lg py-2 border-b border-gray-700"
                            >
                                Home
                            </a>
                            <a 
                                href="#section" 
                                onClick={(e) => handleLinkClick(e, 'section')} 
                                className="text-white hover:text-gray-300 transition text-lg py-2 border-b border-gray-700"
                            >
                                Collection
                            </a>
                            <a 
                                href="#services" 
                                onClick={(e) => handleLinkClick(e, 'services')} 
                                className="text-white hover:text-gray-300 transition text-lg py-2 border-b border-gray-700"
                            >
                                Services
                            </a>
                            <a 
                                href="#about" 
                                onClick={(e) => handleLinkClick(e, 'about')} 
                                className="text-white hover:text-gray-300 transition text-lg py-2 border-b border-gray-700"
                            >
                                About
                            </a>
                            <a 
                                href="#footer" 
                                onClick={(e) => handleLinkClick(e, 'footer')} 
                                className="text-white hover:text-gray-300 transition text-lg py-2"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
                
                <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-80px)] text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
                        BESPOKE FASHION
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl">
                        Where elegance meets individuality. Custom designs crafted just for you.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                            Explore Collection
                        </button>
                        <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition">
                            Book Consultation
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-16 md:py-24 px-4 bg-gray-50" id='services'>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Ojufin</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Custom Designs</h3>
                            <p className="text-gray-600">Every piece tailored to your unique style and measurements</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Premium Fabrics</h3>
                            <p className="text-gray-600">Only the finest materials from around the world</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Perfect Fit</h3>
                            <p className="text-gray-600">Multiple fittings to ensure your garment fits perfectly</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 md:py-24 px-4 bg-black text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Something Beautiful?</h2>
                    <p className="text-lg md:text-xl mb-8 opacity-90">
                        Let's bring your vision to life with a custom piece designed just for you
                    </p>
                    <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition">
                        Start Your Journey
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;