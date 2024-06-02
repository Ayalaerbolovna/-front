import React from 'react';
import { NavLink } from 'react-router-dom';

const AppNav = () => {
    return (
        <div className="relative">
            <ul className="font-poppins text-base flex flex-col gap-y-2.5 pr-32 before:absolute before:right-0 before:top-0 before:h-full before:border-r-2 before:border-gray-200 before:content-['']">
                {/* Uncomment and add more links as needed */}
                {/* <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Woman's Fashion
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Men's Fashion
          </NavLink>
        </li> */}
                <li>
                    <NavLink to="/all" className="hover:border-b-2 hover:border-gray-600">
                        Каталог
                    </NavLink>
                </li>
                {/* <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Home & Lifestyle
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Medicine
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Sports & Outdoor
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Baby's & Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Groceries & Pets
          </NavLink>
        </li>
        <li>
          <NavLink to="" className="hover:border-b-2 hover:border-gray-600">
            Health & Beauty
          </NavLink>
        </li> */}
            </ul>
        </div>
    );
};

export default AppNav;
