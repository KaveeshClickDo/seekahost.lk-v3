'use client';

import { notFound } from 'next/navigation';
import React, { lazy, Suspense, useState, useEffect } from 'react';

export default function BlocksRendererClient({ content, ...props }) {
  const [BlocksRenderer, setBlocksRenderer] = useState(null);

  useEffect(() => {
    let isMounted = true;

    import('@strapi/blocks-react-renderer')
      .then((module) => {
        if (isMounted) {
          setBlocksRenderer(() => module.BlocksRenderer);
        }
      })
      .catch((error) => {
        console.error('Failed to load BlocksRenderer:', error);
        <notFound />
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (!BlocksRenderer) {
    return <div>Content cannot be displayed at this time.</div>;
  }

  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <BlocksRenderer content={content} {...props} />
    </Suspense>
  );
}
