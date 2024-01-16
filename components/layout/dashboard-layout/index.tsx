import React, { ReactNode } from 'react';
import Link from 'next/link';
import Tabs from '../../common/core/tabs/index';
import Navbar from '../../common/core/navbar';

const initTabs = [
  { label: 'Read', value: 'read', path: '/read' }
];

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
  <div className="flex flex-col">
   <div className="border-b-2 shadow">
    <header>
     <Navbar/>
    </header>
   </div>
   <div className="flex h-full overflow-hidden">
    <main className="z-0 w-full overflow-y-auto bg-gray-100 focus:outline-none">
     <div className="relative bg-gray-100">
      <div className="py-6 bg-white">
       <div className="px-3 mx-auto xl:container sm:px-4 xl:px-2">
        <div className="flex flex-row flex-wrap">
         <div className="flex-shrink w-full max-w-full overflow-hidden">
          <div className="w-full py-5 mb-5">
           <Link href="/book/new"
                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 float-right ">
            Add new book
           </Link>
           <Tabs items={initTabs} matchUrl={""}/>
          </div>
          {children}
         </div>
        </div>
       </div>
      </div>
     </div>
    </main>
   </div>
  </div>
 )
}

export default DashboardLayout;