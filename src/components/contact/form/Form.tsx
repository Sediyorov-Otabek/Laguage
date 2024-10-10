// components/ContactForm.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Grid layout that switches between one and two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Contact Information Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
            <p className="text-gray-600 mb-8">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us An Email. Our Staff Always Be There To Help You
              Out. Do Not Hesitate!
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="text-2xl text-gray-700 max-w-6"
                />
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-600">
                    236 5th SE Avenue, New York NY10000, United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-2xl text-gray-700 max-w-6"
                />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-600">Hotline: +(84) 456-6789</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-2xl text-gray-700 max-w-6"
                />
                <div>
                  <h4 className="font-bold">Working Time</h4>
                  <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
                  <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Abc"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="This is optional"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to ask about"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
