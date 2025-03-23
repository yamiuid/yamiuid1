import React, { useState, useEffect } from 'react';
import { Gamepad } from 'lucide-react';

interface GameIframeLoaderProps {
  src: string;
}

export function GameIframeLoader({ src }: GameIframeLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [src]);

  return (
    <div className="relative w-full h-full">
      <iframe
        src={src}
        className={`w-full h-full border-0 transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        referrerPolicy="no-referrer"
        loading="eager"
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="text-center space-y-4">
            <Gamepad className="w-12 h-12 text-purple-500 animate-bounce mx-auto" />
            <div className="space-y-2">
              <div className="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-purple-500 animate-pulse" />
              </div>
              <p className="text-gray-400 text-sm">Loading game...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}