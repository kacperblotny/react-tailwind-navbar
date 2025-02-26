import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    footer.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <nav
      className='p-4 bg-gray-900 text-white w-full fixed top-0 z-50'
      ref={navRef}
    >
      <div className='container mx-auto'>
        {/* Desktop and Mobile Navigation Container */}
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Link to='/'>
              <h1 className='text-2xl font-bold'>Main page</h1>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden focus:outline-none relative w-6 h-6 transition-all duration-300'
            aria-label='Menu'
          >
            <div
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            ></div>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex lg:items-center lg:gap-4'>
            <Link to='/'>
              <button className='hover:text-gray-300 transition-colors'>
                Main page
              </button>
            </Link>
            <Link to='/pageone'>
              <button className='hover:text-gray-300 transition-colors'>
                Page one
              </button>
            </Link>
            <Link to='/pagetwo'>
              <button className='hover:text-gray-300 transition-colors'>
                Page Two
              </button>
            </Link>
            <button
              onClick={scrollToFooter}
              className='hover:text-gray-300 transition-colors'
            >
              Contact
            </button>
            <Link to='/pagethree'>
              <button className='ml-4 bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
                Page three
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            transform transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? 'max-h-[400px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
            lg:hidden space-y-2
          `}
        >
          <Link to='/' className='block'>
            <button className='w-full text-left py-2 hover:text-gray-300 transition-colors'>
              Main page
            </button>
          </Link>
          <Link to='/pageone' className='block'>
            <button className='w-full text-left py-2 hover:text-gray-300 transition-colors'>
              Page one
            </button>
          </Link>
          <Link to='/pagetwo' className='block'>
            <button className='w-full text-left py-2 hover:text-gray-300 transition-colors'>
              Page one
            </button>
          </Link>
          <button
            onClick={scrollToFooter}
            className='w-full text-left py-2 hover:text-gray-300 transition-colors'
          >
            Contact
          </button>
          <Link to='/pagethree' className='block'>
            <button className='w-full bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'>
              Page one
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
