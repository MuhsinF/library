import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuthToken } from '../../../../hooks/auth.hooks';
import React from 'react';

const Navbar: React.FC = () => {
  const router = useRouter();
  const { removeAuthToken, removeUserData } = useAuthToken();

  const onLogoutButtonClick = () => {
    removeAuthToken();
    removeUserData();
    router.push('/auth/login');
  };

 return (<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap items-center justify-between mx-auto">
   <Link href="/read" className="flex items-center">
      <h1>BookManager</h1>
   </Link>
   <div className="flex items-center md:order-2">
    <button type="button" onClick={onLogoutButtonClick}
            className="invisible px-4 py-2 mr-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:visible hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout
    </button>
    <button data-collapse-toggle="navbar-sticky" type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
     <span className="sr-only">Open main menu</span>
     <img src="/icons/menu-bar.icon.svg" className="w-6 h-6" alt="Menu bar"/>
    </button>
   </div>
   <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="mobile-menu-language-select">
    <ul
     className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
     <li>
      <Link href="/read"
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page">Home</Link>
     </li>
    </ul>
   </div>
  </div>
 </nav>)
}

export default Navbar
