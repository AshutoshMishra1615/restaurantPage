
import { useState } from "react"
import { PhoneIcon, MailIcon, LocationMarkerIcon, PlayIcon } from "@heroicons/react/outline";
function Content({active}){

    const homeSetting= ()=>{
        return (
            <>
<div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">

  <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
  <div className="absolute inset-0 bg-white bg-opacity-60"></div>

  <div className="relative z-10 text-center max-w-2xl p-8">
    <h1 className="text-5xl font-bold text-gray-800 mb-6">Best food for your taste</h1>
    <p className="text-gray-600 text-lg mb-8">
      Discover delectable cuisine and unforgettable moments in our welcoming culinary haven.
    </p>
    <div className="flex justify-center space-x-4">
      <button className="px-6 py-3 text-gray-800 bg-white border border-gray-300 rounded-full shadow-md hover:border-gray-400 hover:bg-gray-100">
        Explore Menu
      </button>
    </div>
  </div>
</div>

            </>
        )
    }
    const aboutSetting=()=> {
        return (
            <>
    <div className="max-w-7xl mx-auto px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        {/* Left Side (Image + Contact Info) */}
        <div className="relative w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80"
            alt="Delicious dish"
            className="w-full rounded-lg object-cover"
          />

          <div className="absolute bottom-4 left-4 right-4 bg-gray-800 text-white p-6 rounded-lg">
            <h3 className="text-xl mb-4 font-bold">Come and visit us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5" />
                <span>(414) 857 - 0107</span>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon className="w-5 h-5" />
                <span>happytummy@restaurant.com</span>
              </div>
              <div className="flex items-center gap-3">
                <LocationMarkerIcon className="w-5 h-5" />
                <span>
                  857 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side (Text Content) */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-serif mb-6">
            We provide healthy food for your family.
          </h2>
          <p className="text-gray-600 mb-6">
            Our story began with a vision to create a unique dining experience
            that merges fine dining, exceptional service, and a vibrant
            ambiance. Rooted in the city's rich culinary culture, we aim to
            honor our local roots while infusing a global palate.
          </p>
          <p className="text-gray-600">
            At our place, we believe that dining is not just about food, but
            also about the overall experience. Our staff, renowned for their
            warmth and dedication, strives to make every visit an unforgettable
            event.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative h-96 w-full mb-16">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80"
          alt="Restaurant interior"
          className="w-full h-full object-cover brightness-50 rounded-lg"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <button className="bg-white rounded-full p-4 mb-6">
            <PlayIcon className="w-6 h-6 text-gray-800" />
          </button>
          <h2 className="text-4xl font-serif text-center max-w-2xl">
            Feel the authentic & original taste from us
          </h2>
        </div>
      </div>
    </div>
  
            </>
        )
    }

        
const menuItems = [
    { id: 1, category: "Breakfast", name: "Fried Eggs", price: 9.99, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 2, category: "Main Dishes", name: "Hawaiian Pizza", price: 15.99, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 3, category: "Drinks", name: "Martinez Cocktail", price: 7.25, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 4, category: "Desserts", name: "Butterscotch Cake", price: 20.99, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 5, category: "Drinks", name: "Mint Lemonade", price: 5.89, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 6, category: "Desserts", name: "Chocolate Icecream", price: 18.05, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 7, category: "Main Dishes", name: "Cheese Burger", price: 12.55, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
    { id: 8, category: "Desserts", name: "Classic Waffles", price: 12.99, img: "https://via.placeholder.com/150", description: "Made with eggs, lettuce, salt, oil and other ingredients." },
  ];
  const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];





const menuSetting = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2">Our Menu</h2>
          <p className="text-gray-600">
            We consider all the drivers of change to create a truly delightful experience.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium ${
                activeCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-red-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-red-500">
                  ${item.price.toFixed(2)}
                </h3>
                <h4 className="text-xl font-semibold mt-2">{item.name}</h4>
                <p className="text-gray-600 text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const contactSetting =()=> {
        return(
<section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
          <p className="text-gray-600">
            We consider all the drivers of change to create a truly delightful experience.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <form>
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Write a subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-medium py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between text-center sm:text-left space-y-6 sm:space-y-0">
          {/* Call Us */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Call Us:</h3>
            <p className="text-red-500 text-lg font-semibold">+1-234-567-8900</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Hours:</h3>
            <p className="text-gray-600">Mon-Fri: 11am - 8pm</p>
            <p className="text-gray-600">Sat, Sun: 9am - 10pm</p>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-bold text-gray-700 mb-2">Our Location:</h3>
            <p className="text-gray-600">123 Bridge Street</p>
            <p className="text-gray-600">Nowhere Land, LA 12345</p>
            <p className="text-gray-600">United States</p>
          </div>
        </div>
      </div>
    </section>
  );


        
    }
    return (
        <>
        {active==="home" && homeSetting() }
        {active==="about" && aboutSetting()}
        {active==="menu" && menuSetting()}
        {active==="contact" && contactSetting()}
        
        </>
    )
}
export default Content