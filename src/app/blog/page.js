import Footer from '@/components/shared/Footer';
import Navbar2 from '@/components/shared/Navbar2';
import Topbar from '@/components/shared/Topbar';
import Image from 'next/image';
import Link from 'next/link';
import BacktoTop from "@/components/shared/BacktoTop";
import config from '@/config';
import fetchPosts from '@/data/fetchPosts';
import FeaturedSlider from '@/components/blogs/FeatureSlider';
import { MdArrowForward } from "react-icons/md";
import Header from '@/components/shared/Header';

export const metadata = {
    title: "Blog"
}

const Blog = async () => {

    try {

        const featuredPosts = await fetchPosts('filters[postMetadata][isFeatured][$eq]=true&sort[0]=publishedAt:desc');

        const topStoriesPosts = await fetchPosts('pagination[limit]=3&sort[0]=publishedAt:desc');

        const categoriesResponse = await fetchPosts();
        const uniqueCategories = [...new Set(
            categoriesResponse.data?.map(post => post.postPrimary?.category).filter(Boolean) || []
        )];

        const categoryPosts = {};
        for (const category of uniqueCategories) {
            const categoryPostsData = await fetchPosts(`filters[postPrimary][category][$eq]=${encodeURIComponent(category)}&pagination[limit]=3&sort[0]=publishedAt:desc`);
            categoryPosts[category] = categoryPostsData.data || [];
        }

        console.log(topStoriesPosts.data);


        return (
            <>
                {/* <div className="hidden lg:block">
                    <Topbar />
                </div>
                <Navbar2 /> */}
                <Header />
                <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
                <section className="container mx-auto px-4 py-8 max-w-7xl">

                    <FeaturedSlider
                        featuredBlogs={featuredPosts.data || []}
                        config={config}
                    />

                    <div className="mb-8">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">Top Stories</h2>
                        {topStoriesPosts.data && topStoriesPosts.data.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {topStoriesPosts.data.map((topBlog) => (
                                    <div key={topBlog.id} className="rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
                                        {topBlog.postMetadata?.thumbnail?.url && (
                                            <div className="relative aspect-video">
                                                <Image
                                                    src={`${config.api}${topBlog.postMetadata.thumbnail.url}`}
                                                    alt={topBlog.title || 'Blog post'}
                                                    width={400}
                                                    height={225}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        )}

                                        <div className="p-4">
                                            <div className="flex items-center text-xs md:text-sm text-gray-500 font-medium mb-2">
                                                <span>{topBlog.publishedAt?.substring(0, 10) || 'No date'}</span>
                                                <span className="mx-2">•</span>
                                                <span>{topBlog.postPrimary?.category || 'Uncategorized'}</span>
                                                {topBlog.postPrimary?.readTime && (
                                                    <>
                                                        <span className="mx-2">•</span>
                                                        <span>{`${topBlog.postPrimary?.readTime} min` || '10 min'}</span>
                                                    </>
                                                )}
                                            </div>

                                            <h3 className="text-lg md:text-xl font-bold mb-3">
                                                <Link href={`/${topBlog.postMetadata?.slug || '#'}`} className="hover:text-blue-700">
                                                    {topBlog.title || 'Blog post title'}
                                                </Link>
                                            </h3>

                                            <p className="text-sm md:text-base text-gray-700 mb-4 line-clamp-3">{topBlog.postPrimary?.excerpt || 'No description available'}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 bg-gray-50 rounded-lg text-center">
                                <h2 className="text-xl font-semibold text-gray-700">Top stories currently unavailable</h2>
                                <p className="text-gray-600 mt-2">Please check back later.</p>
                            </div>
                        )}
                    </div>

                    {uniqueCategories.length > 0 ? (
                        uniqueCategories.map(category => (
                            <div key={category} className="mb-8">
                                <h2 className="text-2xl md:text-4xl font-bold mb-6">{category}</h2>
                                {categoryPosts[category] && categoryPosts[category].length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {categoryPosts[category].map((blog) => (
                                            <div key={blog.id} className="rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
                                                {blog.postMetadata?.thumbnail?.url && (
                                                    <div className="relative aspect-video">
                                                        <Image
                                                            src={`${config.api}${blog.postMetadata.thumbnail.url}`}
                                                            alt={blog.title || 'Blog post'}
                                                            width={400}
                                                            height={225}
                                                            className="object-cover w-full h-full"
                                                        />
                                                    </div>
                                                )}

                                                <div className="p-4">
                                                    <div className="flex items-center text-xs md:text-sm text-gray-500 font-medium mb-2">
                                                        <span>{blog.publishedAt?.substring(0, 10) || 'No date'}</span>
                                                        <span className="mx-2">•</span>
                                                        <span>{blog.postPrimary?.category || 'Uncategorized'}</span>
                                                        {blog.postPrimary?.readTime && (
                                                            <>
                                                                <span className="mx-2">•</span>
                                                                <span>{`${blog.postPrimary?.readTime} min` || '10 min'}</span>
                                                            </>
                                                        )}
                                                    </div>

                                                    <h3 className="text-lg md:text-xl font-bold mb-3">
                                                        <Link href={`/${blog.postMetadata?.slug || '#'}`} className="hover:text-blue-700">
                                                            {blog.title || 'Blog post title'}
                                                        </Link>
                                                    </h3>

                                                    <p className="text-sm md:text-base text-gray-700 mb-4 line-clamp-3">{blog.postPrimary?.excerpt || 'No description available'}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="p-8 bg-gray-50 rounded-lg text-center">
                                        <h2 className="text-xl font-semibold text-gray-700">No posts available in {category}</h2>
                                        <p className="text-gray-600 mt-2">Please check back later.</p>
                                    </div>
                                )}
                                <Link
                                    href={`/blog/${category ? category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') : '#'}`}
                                    className="flex items-center font-bold text-lg hover:text-blue-600 transition-colors gap-1 sm:gap-2 py-6 ml-2"
                                >
                                    Read More <MdArrowForward className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="p-8 bg-gray-50 rounded-lg text-center">
                            <h2 className="text-xl font-semibold text-gray-700">Categories currently unavailable</h2>
                            <p className="text-gray-600 mt-2">Please check back later.</p>
                        </div>
                    )}
                </section>
                <BacktoTop />
                <Footer />
            </>
        );
    } catch (error) {
        console.error("Error rendering blog page:", error);

        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Unable to load blog content</h1>
                <p className="text-lg text-gray-700 mb-8">We&apos;re experiencing some technical difficulties. Please try again later.</p>
                <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                    Return to Home
                </Link>
            </div>
        );
    }
}

export default Blog;