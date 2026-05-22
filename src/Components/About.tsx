import measure from '../assets/measure.jpg'
import founder from '../assets/founder.jpeg'

const About = () => {
    return ( 
        <section className="py-16 md:py-24 px-4 bg-white" id='about'>
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Our Story
                    </h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Crafting elegance, one stitch at a time
                    </p>
                    <div className="w-20 h-1 bg-black mx-auto mt-4"></div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <img 
                                src={measure}
                                alt="Fashion Designer at work"
                                className="w-full h-auto object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = "https://placehold.co/600x800?text=Designer+Profile";
                                }}
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-100 rounded-lg -z-10"></div>
                    </div>

                    {/* Text Side */}
                    <div className="space-y-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                            From Passion to Profession
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Founded in 2020, Ojufin emerged from a simple belief: clothing should be more than just fabric stitched together. 
                            It should tell a story, express personality, and fit perfectly - not just in size, but in spirit.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            What started as a small atelier has grown into a recognized name in bespoke fashion, serving clients who refuse 
                            to compromise on quality, fit, or originality. Each piece that leaves our studio carries the mark of dedication, 
                            artistry, and an uncompromising eye for detail.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Today, we continue to push boundaries while honoring traditional craftsmanship - blending contemporary design 
                            with timeless techniques.
                        </p>
                        
                        {/* Signature */}
                        <div className="pt-4">
                            <p className="text-sm text-gray-400 italic">— [Your Name], Creative Director</p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                        What We Stand For
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                            <p className="text-gray-600">
                                We source only the finest materials and spare no effort in construction
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                            <p className="text-gray-600">
                                Every piece is crafted with passion and personal attention to detail
                            </p>
                        </div>

                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Sustainable Practices</h3>
                            <p className="text-gray-600">
                                Committed to ethical sourcing and reducing our environmental footprint
                            </p>
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">
                        Meet the Creative Director
                    </h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Behind every creation is a visionary dedicated to bringing your fashion dreams to life
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1 space-y-4">
                            <h3 className="text-2xl font-semibold text-gray-900">[Your Name]</h3>
                            <p className="text-gray-500">Founder & Creative Director</p>
                            <p className="text-gray-600 leading-relaxed">
                                With [X] years of experience in the fashion industry, [Your Name] brings a unique perspective 
                                that blends classic tailoring techniques with modern aesthetics. Trained at [School Name] and 
                                having worked with [Notable Brands/Designers], [Your Name] founded Ojufin to create a space 
                                where true customization meets artistic expression.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                "I believe that clothing is the most intimate form of self-expression. When someone wears a 
                                piece I've created, I want them to feel confident, beautiful, and truly themselves."
                            </p>
                            
                            {/* Social Links */}
                            <div className="flex space-x-4 pt-4">
                                <a href="#" className="text-gray-500 hover:text-black transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-black transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.9 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-500 hover:text-black transition">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        
                        <div className="order-1 md:order-2">
                            <div className="rounded-lg overflow-hidden shadow-xl">
                                <img 
                                    src={founder}
                                    alt="Designer portrait"
                                    className="w-full h-auto object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/500x600?text=Designer+Portrait";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-black mb-2">200+</div>
                            <p className="text-gray-600">Happy Clients</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-black mb-2">500+</div>
                            <p className="text-gray-600">Pieces Created</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-black mb-2">50+</div>
                            <p className="text-gray-600">Collections</p>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-black mb-2">100%</div>
                            <p className="text-gray-600">Custom Designs</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <h3 className="text-xl md:text-2xl font-semibold mb-4">Ready to Create Something Beautiful?</h3>
                    <p className="text-gray-600 mb-6">Let's bring your vision to life with a custom piece designed just for you</p>
                    <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                        Book a Consultation
                    </button>
                </div>
            </div>
        </section>
    );
}
 
export default About;