'use client'

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function BlocksRendererClient({ content, ...props }) {
  return <BlocksRenderer content={content} {...props} />;
}