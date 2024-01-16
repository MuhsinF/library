import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface TabItem {
  value: string;
  path: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  matchUrl: string;
}

const Tabs: React.FC<TabsProps> = ({ items = [], matchUrl = '' }) => {
  const router = useRouter();
  const classLink = 'whitespace-no-wrap mx-8 py-4 px-1 border-b-2 border-transparent font-medium text-md leading-5 text-black hover:text-gray-400 hover:border-gray-400';
  const classLinkActive = 'whitespace-no-wrap mx-8 py-4 px-1 border-b-2 border-white font-medium text-md leading-5 text-black';

  const isHighlight = (menu: string) => {
    return router.pathname?.indexOf(menu) >= 0;
  };

  return (
    <div className="block pb-4 overflow-x-auto bg-white">
      <div className="w-full">
        <nav className="flex justify-center -mb-px">
          {items.map((item, index) => (
            <Link key={index} href={matchUrl + item.path} passHref>
              <span className={isHighlight(item.value) ? classLinkActive : classLink}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
