import { GoChevronDown } from "react-icons/go";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
  
      <header className="absolute top-0 left-0 w-full text-black body-font z-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-center">
            <img 
              src="/src/assets/logo.svg" 
              alt="Techor Logo" 
              className="h-12 w-48 ml-0 lg:ml-12 "  
            />
          </a>

          {/* Navigation */}
          <nav className="w-full md:w-auto flex flex-wrap items-center text-base justify-center gap-4 lg:mr-44">
             <NavLink to='/'><a href="#home" className="hover:font-bold ">Home</a></NavLink>
              <GoChevronDown />
              <a href="#" className="hover:font-bold">Electronics</a>
              <GoChevronDown />
              <NavLink to='/contact'><a href="#contact" className="hover:font-bold">Contacts</a></NavLink>
              <GoChevronDown />
              <NavLink to='/about'><a href="#about" className="hover:font-bold">About</a></NavLink>
              <GoChevronDown />
              <NavLink to='/login'><a href="#login" className="hover:font-bold">Login</a></NavLink>
          </nav>
        </div>
      </header>
  );
};

export default Header;





// import { GoChevronDown } from "react-icons/go";
// import { NavLink } from 'react-router-dom';
// const Header = () => {
//   return (
  
//       <header className="absolute top-0 left-0 w-full text-black body-font z-20">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
//           {/* Logo */}
//           <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 justify-center">
//             <img 
//               src="/src/assets/logo.svg" 
//               alt="Techor Logo" 
//               className="h-12 w-48 ml-0 md:ml-8"  
//             />
//           </a>

//           {/* Navigation */}
//           <nav className="w-full md:w-auto flex flex-wrap items-center text-base justify-center gap-4 sm:mr-52">
//              <NavLink to='/'><a href="#home" className="hover:font-bold ">Home</a></NavLink>
//               <GoChevronDown />
//               <a href="#" className="hover:font-bold">Electronics</a>
//               <GoChevronDown />
//               <NavLink to='/contact'><a href="#contact" className="hover:font-bold">Contacts</a></NavLink>
//               <GoChevronDown />
//               <NavLink to='/about'><a href="#about" className="hover:font-bold">About</a></NavLink>
//               <GoChevronDown />
//               <NavLink to='/login'><a href="#login" className="hover:font-bold">Login</a></NavLink>
//           </nav>
//         </div>
//       </header>
//   );
// };

// export default Header;


