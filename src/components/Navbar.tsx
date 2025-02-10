import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-start items-center h-20 sm:h-28">
            {/* Left-aligned Logo section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                    src="/logos/tteamdunkel.png"
                    alt="Technologie Team Logo"
                    className="h-16 sm:h-24 w-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
  );
}