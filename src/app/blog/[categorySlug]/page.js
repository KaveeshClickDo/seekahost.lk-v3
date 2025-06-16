import BacktoTop from "@/components/shared/BacktoTop";
import Footer from "@/components/shared/Footer";
import Navbar2 from "@/components/shared/Navbar2";
import Topbar from "@/components/shared/Topbar";
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';
import fetchPosts from '@/data/fetchPosts';
import { notFound } from 'next/navigation';
import Header from "@/components/shared/Header";

const slugToCategory = (slug) => {
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

const categoryToSlug = (category) => {
    return category.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
};

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const categorySlug = resolvedParams.categorySlug;
    const categoryName = slugToCategory(categorySlug);

    return {
        title: `${categoryName} - Blog`,
        description: `Browse all ${categoryName} posts and articles.`
    };
}

const CategoryPage = async (props) => {
    const params = await props.params;
    const categorySlug = params.categorySlug;

    try {

        const categoryName = slugToCategory(categorySlug);

        const allPostsResponse = await fetchPosts();
        const allCategories = [...new Set(
            allPostsResponse.data?.map(post => post.postPrimary?.category).filter(Boolean) || []
        )];

        const validCategory = allCategories.find(cat =>
            categoryToSlug(cat) === categorySlug
        );

        if (!validCategory) {
            notFound();
        }

        const categoryPostsResponse = await fetchPosts(
            `filters[postPrimary][category][$eq]=${encodeURIComponent(validCategory)}&sort[0]=publishedAt:desc`
        );

        const categoryPosts = categoryPostsResponse.data || [];

        return (
            <>
                {/* <div className="hidden lg:block">
                    <Topbar />
                </div>
                <Navbar2 /> */}
                <Header />
                <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>

                <section className="container mx-auto px-4 py-8 max-w-7xl">

                    <div className="mb-8">
                        <nav className="text-sm text-gray-500 mb-4">
                            <Link href="/" className="hover:text-[#2072CC]">Home</Link>
                            <span className="mx-2">›</span>
                            <Link href="/blog" className="hover:text-[#2072CC]">Blog</Link>
                            <span className="mx-2">›</span>
                            <span className="text-gray-700">{validCategory}</span>
                        </nav>

                        <h1 className="text-2xl md:text-4xl font-bold mb-4">{validCategory}</h1>
                        <p className="text-lg text-gray-600">
                            {categoryPosts.length} {categoryPosts.length === 1 ? 'post' : 'posts'} in this category
                        </p>
                    </div>

                    {categoryPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {categoryPosts.map((blog) => (
                                <article key={blog.id} className="rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow">
                                    {blog.postMetadata?.thumbnail?.url && (
                                        <div className="relative aspect-video">
                                            <Image
                                                src={`${config.api}${blog.postMetadata?.thumbnail?.url}`}
                                                alt={blog.title || 'Blog post'}
                                                width={400}
                                                height={225}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    )}

                                    <div className="p-4">
                                        <div className="flex items-center text-xs md:text-sm text-gray-500 font-medium mb-2">
                                            <time dateTime={blog.publishedAt}>
                                                {blog.publishedAt?.substring(0, 10) || 'No date'}
                                            </time>
                                            <span className="mx-2">•</span>
                                            <span>{blog.postPrimary?.category || 'Uncategorized'}</span>
                                            {blog.postPrimary?.readTime && (
                                                <>
                                                    <span className="mx-2">•</span>
                                                    <span>{`${blog.postPrimary?.readTime} min` || '10 min'}</span>
                                                </>
                                            )}
                                        </div>

                                        <h2 className="text-lg md:text-xl font-bold mb-3">
                                            <Link
                                                href={`/${blog.postMetadata?.slug || '#'}`}
                                                className="hover:text-blue-700 transition-colors"
                                            >
                                                {blog.title || 'Blog post title'}
                                            </Link>
                                        </h2>

                                        <p className="text-sm md:text-base text-gray-700 mb-4 line-clamp-3">
                                            {blog.postPrimary?.excerpt || 'No description available'}
                                        </p>

                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 bg-gray-50 rounded-lg text-center">
                            <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                                No posts found in {validCategory}
                            </h2>
                            <p className="text-gray-600 mb-6">
                                There are currently no published posts in this category.
                            </p>
                            <Link href="/blog" className="bg-white text-[#0066CC] border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-bold">
                                Browse All Posts
                            </Link>
                        </div>
                    )}


                    <div className="mt-12 text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-[#2072CC] hover:text-blue-700 font-medium transition-colors"
                        >
                            ← Back to All Posts
                        </Link>
                    </div>
                </section>

                <BacktoTop />
                <Footer />
            </>
        );

    } catch (error) {

        return (
            <>
                {/* <div className="hidden lg:block">
                    <Topbar />
                </div>
                <Navbar2 /> */}
                <Header />
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-3xl font-bold mb-4">Unable to load category posts</h1>
                    <p className="text-lg text-gray-700 mb-8">
                        We&apos;re experiencing some technical difficulties. Please try again later.
                    </p>
                    <Link href="/blog" className="bg-white text-[#0066CC] border border-[#0066CC] px-6 py-2 rounded-full hover:bg-[#0066CC] hover:text-white transition-colors cursor-pointer font-bold">
                        Back To Blogs
                    </Link>
                </div>
                <BacktoTop />
                <Footer />
            </>
        );
    }
};

export default CategoryPage;