import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const fashionImages = [
    "https://cdn.pixabay.com/photo/2014/10/13/18/09/girl-487053_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/06/17/09/54/woman-1462985_1280.jpg",
    "https://images.pexels.com/photos/30931841/pexels-photo-30931841/free-photo-of-fashionable-woman-posing-in-stylish-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14284275/pexels-photo-14284275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
    "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80"
  ];

  // Combine left and right carousel images into one array
  const mergedImages = [...fashionImages, ...fashionImages.slice(0, 4)];

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const nextImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % mergedImages.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevImage = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? mergedImages.length - 1 : prevIndex - 1
        );
        setIsAnimating(false);
      }, 500);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header with dark green background */}
      <header className="bg-[#0a4d2e] text-white p-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Hamburger Menu */}
          <div className="flex justify-between w-full md:w-auto items-center">
            <div className="logo-container">
              <img src="/assests/logo-image.jpg" alt="Style Logo" className="logo-image w-16 h-16" />
            </div>
            <button onClick={toggleMenu} className="md:hidden cursor-pointer">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Search Bar - Centered */}
          <div className="flex-grow mx-0 md:mx-8 my-4 md:my-0 w-full md:w-auto  search-input">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Navigation */}
          <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 nav-style `}>
            <a href="#" className="block transition-transform duration-300 hover:scale-110">Shop</a>
            <a href="#" className="block transition-transform duration-300 hover:scale-110">Trending</a>
            <a href="#" className="block transition-transform duration-300 hover:scale-110">Categories</a>
            <a href="#" className="block transition-transform duration-300 hover:scale-110">About Us</a>
            <button className="bg-white rounded-full cursor-pointer p-2">
              <ShoppingBag className="h-5 w-5 text-[#0a4d2e]" />
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0a4d2e] text-white">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left Carousel - Visible on larger screens */}
          <div className="hidden md:block w-full md:w-1/3 relative overflow-hidden h-screen md:h-auto">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 transform ${
                isAnimating ? '-translate-x-full' : 'translate-x-0'
              }`}
            >
              <img
                src={fashionImages[currentImageIndex % fashionImages.length]}
                alt={`Fashion model ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Navigation button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
          </div>

          {/* Middle Content */}
          <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-4 md:p-10 relative">
            <h2 className="text-7xl md:text-8xl font-serif leading-tight text-center">
              Best <span className="text-[#ff6b35]">Style</span><br />
              For <span className="text-[#ff6b35]">You</span>
            </h2>

            {/* Arrow */}
            <div className="absolute bottom-32 left-32 hidden md:block">
              <svg width="100" height="80" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C20 20 60 60 99 79" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            {/* Star/Burst */}
            <div className="absolute bottom-20 right-10 hidden md:block">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40 0L48 32L80 40L48 48L40 80L32 48L0 40L32 32L40 0Z" fill="#ff6b35" />
              </svg>
            </div>

            {/* Reviews */}
            <div className="absolute cursor-pointer bottom-12 left-10 flex items-center  md:flex  ">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" alt="Reviewer" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&h=64&q=80" alt="Reviewer" className="w-10 h-10 rounded-full border-2 sm:flex hidden  border-white object-cover" />
                <div className="w-10 h-10 rounded-full bg-[#ff6b35] flex items-center justify-center text-xs font-bold border-2 border-white">4k+</div>
              </div>
              <span className="ml-2 text-sm uppercase tracking-wider md:flex hidden">Check Reviews</span>
            </div>

            {/* Wavy Line */}
            <div className="absolute bottom-24 left-10 hidden md:block">
              <svg width="180" height="20" viewBox="0 0 180 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10C30 0 60 20 90 10C120 0 150 20 180 10" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            {/* Description Text */}
            <p className="text-sm mt-4 md:mt-20 mb-4 md:mb-10 text-center">
              It Is A Long Established Fact That A Reader Will Be Distracted By The
              Readable Content Of A Page When Looking At Its Layout. The Point Of
              Using Lorem Ipsum Is That It Has A More
            </p>

            {/* Shop Now Button */}
            <button className="bg-[#ff6b35] text-white px-8 py-3 font-bold uppercase tracking-wider">
              Shop Now
            </button>

            {/* Image indicators */}
            <div className="flex space-x-2 mt-4 md:mt-8">
              {mergedImages.map((_, index) => (
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

          {/* Right Carousel - Visible on larger screens */}
          <div className="hidden md:block w-full md:w-1/3 relative overflow-hidden h-screen md:h-auto">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 transform ${
                isAnimating ? 'translate-x-full' : 'translate-x-0'
              }`}
            >
              <img
                src={fashionImages[(currentImageIndex + 4) % fashionImages.length]}
                alt={`Fashion model ${(currentImageIndex + 4) % fashionImages.length + 1}`}
                className="w-full h-full object-cover rounded-lg"
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

          {/* Merged Carousel - Visible only on small screens */}
          <div className="md:hidden w-full relative overflow-hidden h-screen">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-transform duration-500 transform ${
                isAnimating ? '-translate-x-full' : 'translate-x-0'
              }`}
            >
              <img
                src={mergedImages[currentImageIndex]}
                alt={`Fashion model ${currentImageIndex + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
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
  );
}

export default App;