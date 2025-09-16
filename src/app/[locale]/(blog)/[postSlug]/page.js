import Image from "next/image";
import Link from "next/link";
import config from "@/config";
import fetchPosts from "@/data/fetchPosts";
import HTMLRendererClient from "@/components/blogs/HTMLRendererClient";
import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import ShareButtons from "@/components/blogs/ShareButtons";
import { notFound } from "next/navigation";
import Header from "@/components/shared/Header";

const createCategoryUrl = (category) => {
    return `/category/${category ? category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '#'}`;
};

export async function generateMetadata({ params }) {
    try {
        const resolvedParams = await params;
        const blog = await fetchPosts(`filters[postSlug][$eq]=${resolvedParams.postSlug}`);

        if (!blog.data || blog.data.length === 0) {
            return {
                title: 'Blog Post Not Found',
                description: 'The requested blog post could not be found. Browse our latest articles on web hosting, domains, and technology.',
                robots: {
                    index: false,
                    follow: false,
                }
            };
        }

        const post = blog.data[0];
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://dev.seekahost.co.uk';

        const siteName = 'SeekaHost UK';
        const fullTitle = post.postMetadata?.postTitle || post.title || 'Blog Post';

        const description = post.postMetadata?.metaDescription || post.postPrimary?.excerpt || post.title || 'Read our latest blog post about web hosting, domains, and technology solutions.';

        const openGraphImageUrl = post.postMetadata?.thumbnail?.url
            ? `${config.externalApi}${post.postMetadata?.thumbnail?.url}`
            : `${baseUrl}/images/blog/default-blog-image.jpg`;

        const keywords = [
            ...(post.postPrimary?.categories || []),
            ...(post.postPrimary?.tags || []),
            'blogs',
            'domains',
            'web hosting',
            'technology'
        ].filter(Boolean).join(', ');

        return {
            title: fullTitle,
            description,
            keywords,
            authors: post.authorDetails?.authorName ? [
                {
                    name: post.authorDetails.authorName,
                    url: post.authorDetails.authorImage?.url
                        ? `${config.externalApi}${post.authorDetails.authorImage.url}`
                        : undefined
                }
            ] : [{ name: siteName }],
            publisher: siteName,
            category: post.postPrimary?.categories?.[0],
            robots: {
                index: true,
                follow: true,
                googleBot: {
                    index: true,
                    follow: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
            openGraph: {
                title: fullTitle,
                description,
                type: 'article',
                ...(openGraphImageUrl && { images: [openGraphImageUrl] }),
                publishedTime: post.createdAt,
                modifiedTime: post.updatedAt,
                authors: post.authorDetails?.authorName ? [post.authorDetails.authorName] : undefined,
                section: post.postPrimary?.categories?.[0] || undefined,
                tags: post.postPrimary?.tags || undefined,
            },
            twitter: {
                card: 'summary_large_image',
                title: fullTitle,
                description,
                ...(openGraphImageUrl && { images: [openGraphImageUrl] }),
            },
            alternates: {
                canonical: `/${resolvedParams.postSlug}`,
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Blog Post | SeekaHost UK',
            description: 'Read our latest blog post about web hosting, domains, and technology solutions.',
            robots: {
                index: false,
                follow: true,
            }
        };
    }
}

const BlogPost = async (props) => {
    try {
        const params = await props.params;

        const blog = await fetchPosts(`filters[postSlug][$eq]=${params.postSlug}`);

        if (!blog.data || blog.data.length === 0) {
            notFound();
        }

        let recentPosts = [];
        try {
            const recentBlogsResponse = await fetchPosts(`sort[0]=createdAt:desc&pagination[limit]=6`);

            if (recentBlogsResponse.data && recentBlogsResponse.data.length > 0) {
                recentPosts = recentBlogsResponse.data
                    .filter(post => post.postSlug !== `${params.postSlug}`)
                    .slice(0, 5);
            }
        } catch (recentPostsError) {
            console.error('Error fetching recent posts:', recentPostsError);
        }

        const getAuthorInitials = (name) => {
            if (!name) return '';
            return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
        };

        const renderAuthorAvatar = (authorImage, authorName, size = 40) => {
            if (authorImage?.url) {
                return (
                    <Image
                        src={`${config.api}${authorImage.url}`}
                        alt={authorName || 'Author'}
                        width={size}
                        height={size}
                        className="rounded-full object-cover"
                    />
                );
            } else if (authorName) {
                return (
                    <div
                        className={`rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold`}
                        style={{ width: size, height: size, fontSize: size * 0.4 }}
                    >
                        {getAuthorInitials(authorName)}
                    </div>
                );
            }
            return null;
        };

        return (
            <>
                <Header />
                <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>

                <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

                    {/* Add JSON-LD structured data */}
                    {blog.data.map((post) => {
                        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';

                        const jsonLd = {
                            '@context': 'https://schema.org',
                            '@type': 'Article',
                            headline: post.postMetadata?.postTitle || post.title,
                            description: post.postMetadata?.metaDescription || post.postPrimary?.excerpt || post.title,
                            image: post.postMetadata?.thumbnail?.url
                                ? `${config.externalApi}${post.postMetadata?.thumbnail?.url}`
                                : undefined,
                            datePublished: post.createdAt,
                            dateModified: post.updatedAt,
                            author: {
                                '@type': 'Person',
                                name: post.authorDetails?.authorName || 'Unknown Author',
                                ...(post.authorDetails?.authorImage?.url && {
                                    image: `${config.externalApi}${post.authorDetails.authorImage.url}`
                                }),
                                ...(post.authorDetails?.authorDescription && {
                                    description: post.authorDetails.authorDescription
                                })
                            },
                            publisher: {
                                '@type': 'Organization',
                                name: 'SeekaHost',
                                logo: {
                                    '@type': 'ImageObject',
                                    url: `${baseUrl}/images/shared/header-logo.webp`
                                }
                            },
                            mainEntityOfPage: {
                                '@type': 'WebPage',
                                '@id': `${typeof window !== 'undefined' ? window.location.href : ''}`
                            },
                            ...(post.postPrimary?.categories?.length > 0 && {
                                articleSection: post.postPrimary.categories
                            }),
                            ...(post.postPrimary?.categories?.length > 0 && {
                                keywords: post.postPrimary.categories
                            })
                        };

                        // Generate breadcrumb for this post
                        const breadcrumbItems = [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": {
                                    "@type": "WebPage",
                                    "@id": baseUrl
                                }
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Blog",
                                "item": {
                                    "@type": "WebPage",
                                    "@id": `${baseUrl}/blog`
                                }
                            }
                        ];

                        // Add primary category if exists
                        if (post.postPrimary?.categories?.[0]) {
                            breadcrumbItems.push({
                                "@type": "ListItem",
                                "position": 3,
                                "name": post.postPrimary.categories[0],
                                "item": {
                                    "@type": "WebPage",
                                    "@id": `${baseUrl}/blog/category/${post.postPrimary.categories[0].toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')}`
                                }
                            });
                        }

                        // Add current post (no link for current page)
                        breadcrumbItems.push({
                            "@type": "ListItem",
                            "position": breadcrumbItems.length + 1,
                            "name": post.postMetadata?.postTitle || post.title
                        });

                        const breadcrumbSchema = {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": breadcrumbItems
                        };

                        return (
                            <div key={post.id}>
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                                />
                                <script
                                    type="application/ld+json"
                                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
                                />
                            </div>
                        );
                    })}

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                        <nav className="text-sm text-gray-500 mb-4">
                            <Link href="/" className="hover:text-[#2072CC]">Home</Link>
                            <span className="mx-2">›</span>
                            <Link href="/blog" className="hover:text-[#2072CC]">Blog</Link>
                            <span className="mx-2">›</span>

                            {blog.data?.[0]?.postPrimary?.categories?.length > 0 && (
                                <>
                                    <span>
                                        {blog.data[0].postPrimary.categories.map((category, index) => (
                                            <span key={category}>
                                                <Link
                                                    href={createCategoryUrl(category)}
                                                    className="hover:text-[#2072CC]"
                                                >
                                                    {category}
                                                </Link>
                                                {index < blog.data[0].postPrimary.categories.length - 1 && ', '}
                                            </span>
                                        ))}
                                    </span>
                                    <span className="mx-2">›</span>
                                </>
                            )}

                            <span className="text-gray-700">{blog.data?.[0]?.title}</span>
                        </nav>


                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                            <div className="lg:col-span-3">
                                {blog.data.map((post) => (
                                    <div key={post.id} className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-50 -translate-y-32 translate-x-32"></div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                                            {post.postPrimary?.categories?.length > 0 ? (
                                                post.postPrimary.categories.map((category, index) => (
                                                    <Link
                                                        key={category}
                                                        href={createCategoryUrl(category)}
                                                        className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm font-medium border border-blue-600/30 hover:bg-blue-500/30 transition-colors"
                                                    >
                                                        {category}
                                                    </Link>
                                                ))
                                            ) : (
                                                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 backdrop-blur-sm font-medium border border-gray-600/30">
                                                    Uncategorized
                                                </span>
                                            )}
                                            <span>{post.createdAt?.substring(0, 10)}</span>
                                        </div>

                                        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                                            {post.title}
                                        </h1>

                                        <div className="mb-4 pb-5 border-b border-gray-200">
                                            {post.postPrimary?.isDisplayAuthor === "YES" && (
                                                <div className="flex items-center space-x-4">
                                                    {renderAuthorAvatar(post.authorDetails?.authorImage, post.authorDetails?.authorName)}
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900">
                                                            Written by {post.authorDetails?.authorName || 'Unknown'}
                                                        </h3>
                                                        <p className="text-gray-600">
                                                            {post.authorDetails?.authorRole || 'No role available'}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {post.postPrimary?.featuredImage?.url && (
                                            <div className="relative mb-8">
                                                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-101 transition-transform duration-300">
                                                    <Image
                                                        src={`${config.api}${post.postPrimary.featuredImage.url}`}
                                                        alt={post.title || 'Featured blog'}
                                                        width={600}
                                                        height={400}
                                                        className="w-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="relative">

                                            <div className="prose mx-auto">
                                                <HTMLRendererClient content={post.content} />
                                            </div>

                                            {post.postPrimary?.isDisplayAuthor === "YES" && (
                                                <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
                                                    <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 pb-3 sm:pb-5 border-b border-gray-200">
                                                        Author Profile
                                                    </h3>

                                                    <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                                                        <div className="flex-shrink-0 self-center sm:self-start">
                                                            {renderAuthorAvatar(post.authorDetails?.authorImage, post.authorDetails?.authorName, 100)}
                                                        </div>

                                                        <div className="flex-1 text-center sm:text-left sm:ml-3">
                                                            <h4 className="text-base sm:text-lg font-bold mb-2">
                                                                {post.authorDetails?.authorName || 'Unknown'}
                                                            </h4>
                                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                                {post.authorDetails?.authorDescription || 'No Description Available'}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Replace the static share buttons with the functional ShareButtons component */}
                                            <ShareButtons
                                                title={post.title}
                                                url={`${process.env.NEXT_PUBLIC_BASE_URL || 'https://dev.seekahost.co.uk'}/${post.postSlug}`}
                                                description={post.postMetadata?.metaDescription || post.postPrimary?.excerpt || 'Read our latest blog post about web hosting, domains, and technology solutions.'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="lg:col-span-1">
                                <div className="text-center mb-6">
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold my-2">Free SSL Certificates</h3>
                                        <Image src="/images/shared/header-logo.webp" alt="SeekaHost" className="mx-auto" width={266} height={124} priority />
                                    </div>
                                    <Link href='/pricing' className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                        Get Started Free
                                    </Link>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h3>

                                    <div className="space-y-4">
                                        {recentPosts.length > 0 ? (
                                            recentPosts.map((post) => (
                                                <Link
                                                    key={post.id}
                                                    href={`/${post.postSlug}`}
                                                    className="block group"
                                                >
                                                    <h4 className="text-[#2072CC] group-hover:text-blue-800 font-medium leading-snug transition-colors duration-200">
                                                        {post.title}
                                                    </h4>
                                                </Link>
                                            ))
                                        ) : (
                                            <div className="text-gray-500 text-sm">
                                                No recent posts available
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="text-center mb-6 sticky top-15">
                                    <Image src="/images/blog/blogAds.webp" alt="SeekaHost" className="mx-auto" width={266} height={124} />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                <BacktoTop />
                <Footer />
            </>
        );

    } catch (error) {
        notFound();
    }
};

export default BlogPost;