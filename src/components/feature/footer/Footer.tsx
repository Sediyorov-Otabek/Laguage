const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Address */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Funiro.</h2>
            <p className="text-gray-500">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Column */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="font-semibold text-gray-600 mb-4">Newsletter</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                className="border border-gray-300 rounded px-4 py-2 w-full"
                placeholder="Enter Your Email Address"
              />
              <button
                type="submit"
                className="bg-black text-white rounded px-4 py-2 hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
          <p>© 2023 Funiro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
