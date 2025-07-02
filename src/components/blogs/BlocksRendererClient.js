'use client';

import NotFound from '@/app/[locale]/not-found';
import React from 'react';

let BlocksRenderer = null;

try {
  BlocksRenderer = require('@strapi/blocks-react-renderer').BlocksRenderer;
} catch (error) {
  console.error('BlocksRenderer module not found:', error);
  BlocksRenderer = null;
  <NotFound />
}

export default function BlocksRendererClient({ content, ...props }) {
  if (!BlocksRenderer) {
    return <div>Content cannot be displayed at this time.</div>;
  }

  return <BlocksRenderer content={content} {...props} />;
}
