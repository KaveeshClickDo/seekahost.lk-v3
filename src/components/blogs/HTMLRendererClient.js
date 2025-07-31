'use client';

export default function HTMLRendererClient({ content, ...props }) {
    // Check if content exists and is a string
    if (!content || typeof content !== 'string') {
        return <div>No content available.</div>;
    }

    return (
        <div
            className="ck-content"
            dangerouslySetInnerHTML={{ __html: content }}
            {...props}
        />
    );
}