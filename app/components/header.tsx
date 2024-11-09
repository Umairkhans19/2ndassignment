import Link from "next/link";


const Header = () => {
    return (
      <header className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-4xl font-extrabold tracking-tight"> AL-FALAH EVENTS </h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="hover:text-yellow-400 transition duration-300 ease-in-out text-lg">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-yellow-400 transition duration-300 ease-in-out text-lg">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yellow-400 transition duration-300 ease-in-out text-lg">Contact</Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-yellow-400 transition duration-300 ease-in-out text-lg">Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  