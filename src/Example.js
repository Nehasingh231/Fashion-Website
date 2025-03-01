import React from 'react'

function Example() {
  return (
    <div>
    
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const fashionImages = [
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
    "https://media.istockphoto.com/id/540863016/photo/ready-to-go.jpg?s=2048x2048&w=is&k=20&c=yJQlDZJosQn6tpAOy4vV74b9VPg02PscT-8TYYrdc0o=",
    "https://media.istockphoto.com/id/908231976/photo/bearded-young-man-with-hat.jpg?s=2048x2048&w=is&k=20&c=wmi6raZUTtEQkxKHN_CzlxvN4ScisIuQbWtfjaIp_HM=",
    "",
    ""
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);  
    
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fashionImages.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === 0 ? fashionImages.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with dark green background */}
      <header className="bg-[#0a4d2e] text-white p-5">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif">Style</h1>
            <div className="h-[1px] bg-white w-96 ml-4"></div>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-8">
            <a href="#" className="hover:underline">Shop</a>
            <a href="#" className="hover:underline">Trending</a>
            <a href="#" className="hover:underline">Categories</a>
            <a href="#" className="hover:underline">About Us</a>
            <button className="bg-white rounded-full p-2">
              <ShoppingBag className="h-5 w-5 text-[#0a4d2e]" />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0a4d2e] text-white">
        <div className="container mx-auto flex">
          {/* Left Image Carousel */}
          <div className="w-1/3 relative overflow-hidden">
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src={fashionImages[currentImageIndex]} 
                alt={`Fashion model ${currentImageIndex + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>
          
          {/* Middle Content */}
          <div className="w-1/3 flex flex-col justify-center items-center p-10 relative">
            <h2 className="text-8xl font-serif leading-tight">
              Best <span className="text-[#ff6b35]">Style</span><br />
              For <span className="text-[#ff6b35]">You</span>
            </h2>
            
            {/* Arrow */}
            <div className="absolute bottom-32 left-32">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C20 20 60 60 99 79" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Star/Burst */}
            <div className="absolute bottom-20 right-10">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0L48 32L80 40L48 48L40 80L32 48L0 40L32 32L40 0Z" fill="#ff6b35"/>
              </svg>
            </div>
            
            {/* Reviews */}
            <div className="absolute bottom-10 left-10 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <div className="w-10 h-10 rounded-full bg-[#ff6b35] flex items-center justify-center text-xs font-bold border-2 border-white">4k+</div>
              </div>
              <span className="ml-2 text-sm uppercase tracking-wider">Check Reviews</span>
            </div>
            
            {/* Wavy Line */}
            <div className="absolute bottom-24 left-10">
              <svg width="180" height="20" viewBox="0 0 180 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C30 0 60 20 90 10C120 0 150 20 180 10" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            
            {/* Description Text */}
            <p className="text-sm mt-20 mb-10">
              It Is A Long Established Fact That A Reader Will Be Distracted By The 
              Readable Content Of A Page When Looking At Its Layout. The Point Of 
              Using Lorem Ipsum Is That It Has A More
            </p>
            
            {/* Shop Now Button */}
            <button className="bg-[#ff6b35] text-white px-8 py-3 font-bold uppercase tracking-wider">
              Shop Now
            </button>
            
            {/* Image indicators */}
            <div className="flex space-x-2 mt-8">
              {fashionImages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setCurrentImageIndex(index);
                        setIsAnimating(false);
                      }, 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-[#ff6b35]' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right Image Carousel */}
          <div className="w-1/3 relative overflow-hidden">
            <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <img 
                src={fashionImages[(currentImageIndex + 4) % fashionImages.length]} 
                alt={`Fashion model ${(currentImageIndex + 4) % fashionImages.length + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Navigation button */}
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );</div>
  )
}

export default Example