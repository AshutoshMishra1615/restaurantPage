
 const buttonClass="text-sm font-medium hover:text-gray-900"
 function Navbar({active,handleClick}){

    return (
        <>
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <div className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18c-1.293 0-2.526-.312-3.595-.857l4.593-7.731a.75.75 0 00-1.3-.756l-4.7 7.916A7.96 7.96 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z"/>
        </svg>
            <span className="text-2xl font-semibold text-gray-700">FOODIE WE</span>
        </div>
        <div className="flex items-center space-x-6 text-gray-600 justify-between">
        {["home", "menu", "about", "contact"].map((page) => (
          <button
            key={page}
            className={`${buttonClass} ${
              active === page ? "text-gray-700 bg-gray-200 rounded-full px-4 py-2" : ""
            }`}
            onClick={() => handleClick(page)}
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}      </div>
        </div>
      
        </>
    )
 }
 export default Navbar