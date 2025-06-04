import Image from "next/image";
import Link from "next/link";
import config from "@/config";
import fetchPosts from "@/data/fetchPosts";
import BlocksRendererClient from "@/components/blogs/BlocksRendererClient";
import Topbar from "@/components/shared/Topbar";
import Navbar2 from "@/components/shared/Navbar2";
import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    try {
        const resolvedParams = await params;
        const blog = await fetchPosts(`filters[postMetadata][slug][$eq]=${resolvedParams.postSlug}`);

        if (!blog.data || blog.data.length === 0) {
            return {
                title: 'Blog Post Not Found',
                description: 'The requested blog post could not be found.'
            };
        }

        const post = blog.data[0];

        const title = post.title || 'Blog Post';
        const description = post.postMetadata?.metaDescription || post.title || 'Read our latest blog post';
        const featuredImageUrl = post.postPrimary?.featuredImage?.url
            ? `${config.api}${post.postPrimary.featuredImage.url}`
            : null;

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                type: 'article',
                ...(featuredImageUrl && { images: [featuredImageUrl] }),
                publishedTime: post.createdAt,
                modifiedTime: post.updatedAt,
                authors: post.authorDetails?.authorName ? [post.authorDetails.authorName] : undefined,
                section: post.postPrimary?.category || undefined,
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                ...(featuredImageUrl && { images: [featuredImageUrl] }),
            },
            alternates: {
                canonical: `/${resolvedParams.postSlug}`,
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Blog Post',
            description: 'Read our latest blog post'
        };
    }
}

const BlogPost = async (props) => {
    try {
        const params = await props.params;


        const blog = await fetchPosts(`filters[postMetadata][slug][$eq]=${params.postSlug}`);

        if (!blog.data || blog.data.length === 0) {
            notFound();
        }


        let recentPosts = [];
        try {
            const recentBlogsResponse = await fetchPosts(`sort[0]=updatedAt:desc&pagination[limit]=6`);

            if (recentBlogsResponse.data && recentBlogsResponse.data.length > 0) {

                recentPosts = recentBlogsResponse.data
                    .filter(post => post.postMetadata?.slug !== `${params.postSlug}`)
                    .slice(0, 5);
            }
        } catch (recentPostsError) {
            console.error('Error fetching recent posts:', recentPostsError);

        }

        return (
            <>
                <div className="hidden lg:block">
                    <Topbar />
                </div>
                <Navbar2 />
                <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>

                <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


                            <div className="lg:col-span-3">
                                {blog.data.map((post) => (
                                    <div key={post.id} className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 relative overflow-hidden">

                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-transparent rounded-full opacity-50 -translate-y-32 translate-x-32"></div>

                                        <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm font-medium border border-blue-600/30">
                                                {post.postPrimary?.category}
                                            </span>
                                            <span>{post.updatedAt?.substring(0, 10)}</span>
                                        </div>
                                        <h1 className="text-2xl lg:text-4xl font-bold mb-4">
                                            {post.title}
                                        </h1>

                                        <div className="mb-4 pb-5 border-b border-gray-200">
                                            {post.postPrimary?.isDisplayAuthor && (
                                                <div className="flex items-center space-x-4">
                                                    <Image
                                                        src={`${config.api}${post.authorDetails?.authorImage?.url || '/fallback-author.jpg'}`}
                                                        alt={post.authorDetails?.authorName || 'Author'}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full"
                                                    />
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-gray-900">Written by {post.authorDetails?.authorName}</h3>
                                                        <p className="text-gray-600">{post.authorDetails?.authorRole}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative mb-8">
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-101 transition-transform duration-300">
                                                <Image
                                                    src={`${config.api}${post.postPrimary?.featuredImage?.url || '/fallback-image.jpg'}`}
                                                    alt={post.title || 'Featured blog'}
                                                    width={600}
                                                    height={400}
                                                    className="w-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                                            </div>
                                        </div>

                                        <div className="relative">

                                            <div className="prose mx-auto">
                                                <BlocksRendererClient content={post.content} />
                                            </div>

                                            {post.postPrimary?.isDisplayAuthor && (
                                                <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
                                                    <h3 className="text-xl font-bold mb-6 pb-5 border-b border-gray-200">Author Profile</h3>

                                                    <div className="flex items-start space-x-4">
                                                        <div className="flex-shrink-0">
                                                            <Image
                                                                src={`${config.api}${post.authorDetails?.authorImage?.url || '/fallback-author.jpg'}`}
                                                                alt={post.authorDetails?.authorName || 'Author'}
                                                                width={100}
                                                                height={100}
                                                                className="rounded-full object-cover"
                                                            />
                                                        </div>

                                                        <div className="flex-1 ml-3">
                                                            <h4 className="text-lg font-bold mb-2">
                                                                {post.authorDetails?.authorName}
                                                            </h4>
                                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                                {post.authorDetails?.authorDescription}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}


                                            <div className="mt-8 pt-6 border-t border-gray-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-500">Share this article</span>
                                                    <div className="flex space-x-3">
                                                        <button className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                                            </svg>
                                                        </button>
                                                        <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                            </svg>
                                                        </button>
                                                        <button className="w-10 h-10 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors">
                                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
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
                                                    href={`/${post.postMetadata?.slug}`}
                                                    className="block group"
                                                >
                                                    <h4 className="text-blue-600 group-hover:text-blue-800 font-medium leading-snug transition-colors duration-200">
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


                                <div className="text-center mb-6 sticky top-4">
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