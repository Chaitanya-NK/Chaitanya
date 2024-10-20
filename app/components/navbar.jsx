// @flow strict
import Link from "next/link";
import './navbar.css'

function Navbar() {
  
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Chaitanya N K
          </Link>
        </div>
        <div className="sliding-txt-container">
          <p className="sliding-txt">
            .NET Full Stack Developer | MERN/MEAN Stack Developer | Android App Developer | C and Python Programmer | Data Science Enthusiast
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;