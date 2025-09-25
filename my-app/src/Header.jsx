

function Header () {
  return (
    <>
      <header className="bg-black h-16 w-full flex items-center justify-between px-10">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <img src="../public/vite.svg" alt="Logo" className="h-10 w-10" />
        </div>

        {/* Center: Menu */}
        <ul className="flex space-x-6">
          <li className="text-xl text-white"><a href="#">Home</a></li>
          <li className="text-xl text-white"><a href="#">About</a></li>
          <li className="text-xl text-white"><a href="#">Product</a></li>
          <li className="text-xl text-white"><a href="#">Portfolio</a></li>
          <li className="text-xl text-white"><a href="#">Contact</a></li>
        </ul>

        {/* Right: Sign In */}
        <div>
          <a href="#" className="border px-4 py-2 text-white rounded-lg hover:bg-white hover:text-black">
            Sign In
          </a>
        </div>

      </header>
    </>
  );
}

export default Header;
