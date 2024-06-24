import Link from "next/link";
import React from "react";
import {
    Drawer,
    IconButton
} from "../../component/TailwindMaterial/TailwindMaterial";
const MobileNav = ({open,closeDrawer}) => {
  return (
    <React.Fragment> 
      <Drawer open={open} onClose={closeDrawer} className="p-4 ">
        <div className="mb-6 flex items-center justify-between">
           <div></div>
          <IconButton variant="text" color="blue-gray" 
          onClick={closeDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        
        <div className="absolute top-12 w-72 rounded-md p-5 right-0 lg:hidden flex flex-col items-center navigation text-slate-900 text-lg">
               
                
                <Link 
                  className="py-2 px-2 hover:text-pClr"
                  href={'/'}
                >
                  Home
                </Link>
                <Link       
                  className="py-2 px-2 hover:text-pClr"
                  href={'/service'}
                >
                  Service
                </Link>
                <Link  
                  className="py-2 px-2 hover:text-pClr"
                  href={'/guides'}
                >
                  Guides
                </Link>
                <Link 
                  className="py-2 px-2 hover:text-pClr"
                  href={'/provider'}
                >
                  Become a service provider
                </Link>
  
                <div className="flex flex-col gap-2 w-full text-center">
                  <Link
                    href={'/login'}
                    className="py-2 px-4 w-full xl:px-6  duration-200 bg-purple-50 hover:bg-purple-100 text-slate-900 rounded-full font-semibold"
                  >
                    Log in
                  </Link>
                  <Link
                    href={'/signup'}
                    className="py-2 px-4 w-full xl:px-6  duration-200 bg-blue-500 hover:bg-blue-600 rounded-full text-white font-semibold"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
      </Drawer>
    </React.Fragment>
  );
};

export default MobileNav;
