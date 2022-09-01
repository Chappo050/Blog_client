import { Link } from "react-router-dom";
/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { link } from "fs";

type Props = {
  options: string[];
  links: string[];

}

const Nav = () => {
  return (
    <nav className="w-screen bg-custom-black text-white">
      <div className=" grid grid-flow-col-dense space-x-32 text-xl text-custom-blue  font-semibold">
        <i className="logoplaceholder" />
        
        <DropdownMenu options={["User", "Login", "Register", "Settings", "Sign Out"]} links={['/user/login', '/user/register', '/user']}/>
        <DropdownMenu options={["Blog", "Post", "Post History", "Settings", ""]} links={['/blog', 'blog/post']}/>
        <DropdownMenu options={["About", "Github", "Contact", "", ""]} links={['/about']}/>
        <i />
      </div>
    </nav>
  );
};

const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

const DropdownMenu:React.FC<Props> = ({options, links}) => {
  return (
    <Menu as="div" className="relative inline-block text-left py-4 text-white">
      <div>
       
        <Menu.Button className="inline-flex w-2/3 justify-center rounded-md  bg-custom-black px-4 py-2  hover:bg-custom-dark-blue focus:outline-none focus:ring-1 focus:ring-custom-silver">
         
          {options[0]}
          
          <ChevronDownIcon className="-mr-1 ml-2 h-8 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        
        <Menu.Items className="absolute z-10 mt-2 w-56 right-20 origin-top-right rounded-md bg-custom-dark-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

          <div className="py-1 ">
            <Menu.Item>
              {({ active }) => (
                <a
                  href={links[0]}
                  className={classNames(
                    active ? "bg-gray-900 text-white" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                    {options[1]}
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                href={links[1]}
                  className={classNames(
                    active ? "bg-gray-900 text-white" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                    {options[2]}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                href={links[2]}
                  className={classNames(
                    active ? "bg-gray-900 text-white" : "text-white",
                    "block px-4 py-2 text-sm"
                  )}
                >
                    {options[3]}
                </a>
              )}
            </Menu.Item>
            <form method="POST" action={links[3]}>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-900 text-white" : "text-white",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    {options[4]}
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Nav;
