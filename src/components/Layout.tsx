import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, Github } from 'lucide-react';
import { categories } from '../data/games';
import * as Icons from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const iconComponents: { [key: string]: React.ComponentType } = Icons;

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-white">YourGame</span>
            </Link>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2">
            <nav className="space-y-2">
              {categories.map((category) => {
                const IconComponent = iconComponents[category.icon];
                return (
                  <Link
                    key={category.id}
                    to={category.id === 'all' ? '/' : `/category/${category.id}`}
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === (category.id === 'all' ? '/' : `/category/${category.id}`)
                        ? 'bg-purple-500 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{category.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          <main className="col-span-10">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}