// components/Features.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faShieldAlt,
  faShippingFast,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

export default function Advantages() {
  return (
    <div className="my-4 bg-[#FAF3EA] py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faTrophy}
            className="text-3xl text-gray-700 max-w-12"
          />
          <div>
            <h4 className="font-bold text-lg">High Quality</h4>
            <p className="text-sm text-gray-500">crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faShieldAlt}
            className="text-3xl text-gray-700 max-w-12"
          />
          <div>
            <h4 className="font-bold text-lg">Warranty Protection</h4>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faShippingFast}
            className="text-3xl text-gray-700 max-w-12"
          />
          <div>
            <h4 className="font-bold text-lg">Free Shipping</h4>
            <p className="text-sm text-gray-500">Order over 150 $</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <FontAwesomeIcon
            icon={faHeadset}
            className="text-3xl text-gray-700 max-w-12"
          />
          <div>
            <h4 className="font-bold text-lg">24/7 Support</h4>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
