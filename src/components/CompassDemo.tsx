'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CompassDemo() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for loading
    const timeout = setTimeout(() => {
      if (!isIframeLoaded) {
        setIframeError(true);
      }
    }, 20000); // 20 seconds timeout

    return () => clearTimeout(timeout);
  }, []);

  const handleIframeLoad = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
    // Check if we can actually access the iframe content
    const iframe = e.target as HTMLIFrameElement;
    try {
      // This will throw if we can't access the iframe due to CORS
      const iframeWindow = iframe.contentWindow;
      if (!iframeWindow) {
        throw new Error('No content window');
      }
      
      setIsIframeLoaded(true);
      setIsLoading(false);
      setIframeError(false);
    } catch (error) {
      console.log('Iframe access error:', error);
      setIframeError(true);
      setIsLoading(false);
    }
  };

  const handleIframeError = () => {
    console.log('Iframe error event triggered');
    setIframeError(true);
    setIsLoading(false);
  };

  return (
    <div className="bg-muted/50 border border-border rounded-lg p-8">
      <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent-hover/10 rounded-lg relative overflow-hidden">
        {/* Fallback Image - shown during loading or on error */}
        {(isLoading || iframeError) && (
          <Image
            src="/projects/compass_screenshot.png"
            alt="Compass Project Demo"
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 1200px) 100vw, 75vw"
          />
        )}
        
        {/* Loading Indicator */}
        {isLoading && !iframeError && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-accent"></div>
              <p className="text-sm text-foreground/70">Loading live demo...</p>
            </div>
          </div>
        )}

        {/* Live Demo iframe */}
        {!iframeError && (
          <iframe
            src="https://compass.buildwithduke.com"
            className={`w-full h-full rounded-lg transition-opacity duration-300 ${
              isIframeLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ border: 'none' }}
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
            referrerPolicy="origin"
          />
        )}

        {/* Error Message Overlay */}
        {iframeError && (
          <div className="absolute bottom-4 left-4 right-4 bg-background/90 text-foreground p-4 rounded-lg backdrop-blur-sm">
            <p className="text-sm">
              Live demo currently unavailable. Showing screenshot instead.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
