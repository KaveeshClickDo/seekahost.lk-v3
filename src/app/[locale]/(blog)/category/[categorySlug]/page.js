import BacktoTop from "@/components/shared/BacktoTop";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Image from 'next/image';
import Link from 'next/link';
import config from '@/config';
import fetchPosts from '@/data/fetchPosts';
import { notFound } from 'next/navigation';

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

const PaginationComponent = ({ pagination, categorySlug, currentPage }) => {
    if (!pagination || pagination.pageCount <= 1) return null;

    const { page, pageCount } = pagination;
    const pages = [];

    pages.push(1);

    const start = Math.max(2, page - 1);
    const end = Math.min(pageCount - 1, page + 1);

    if (start > 2) pages.push('...');

    for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== pageCount) {
            pages.push(i);
        }
    }

    if (end < pageCount - 1) pages.push('...');

    if (pageCount > 1) pages.push(pageCount);

    return (
        <div className="flex justify-center items-center space-x-2 mt-12">
            {page > 1 && (
                <Link
                    href={`/category/${categorySlug}?page=${page - 1}`}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Previous
                </Link>
            )}

            {pages.map((pageNum, index) => (
                pageNum === '...' ? (
                    <span key={index} className="px-4 py-2">...</span>
                ) : (
                    <Link
                        key={index}
                        href={`/category/${categorySlug}${pageNum === 1 ? '' : `?page=${pageNum}`}`}
                        className={`px-4 py-2 border rounded-lg transition-colors ${
                            pageNum === page
                                ? 'bg-[#2072CC] text-white'
                                : 'hover:bg-gray-50'
                        }`}
                    >
                        {pageNum}
                    </Link>
                )
            ))}

            {page < pageCount && (
                <Link
                    href={`/category/${categorySlug}?page=${page + 1}`}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                    Next
                </Link>
            )}
        </div>
    );
};

const CategoryPage = async (props) => {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const categorySlug = params.categorySlug;
    const currentPage = parseInt(searchParams?.page) || 1;
    const postsPerPage = 9; // 3x3 grid

    try {
        const categoryName = slugToCategory(categorySlug);

        const allPostsResponse = await fetchPosts('pagination[pageSize]=100');
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
            `filters[postPrimary][category][$eq]=${encodeURIComponent(validCategory)}&sort[0]=publishedAt:desc&pagination[page]=${currentPage}&pagination[pageSize]=${postsPerPage}`
        );

        const categoryPosts = categoryPostsResponse.data || [];
        const pagination = categoryPostsResponse.meta?.pagination;

        return (
            <>
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
                            {pagination?.total || 0} {pagination?.total === 1 ? 'post' : 'posts'} in this category
                            {pagination && pagination.pageCount > 1 && (
                                <span className="text-sm text-gray-500 ml-2">
                                    (Page {pagination.page} of {pagination.pageCount})
                                </span>
                            )}
                        </p>
                    </div>

                    {categoryPosts.length > 0 ? (
                        <>
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
                                                    href={`/${blog.postSlug || '#'}`}
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

                            <PaginationComponent 
                                pagination={pagination} 
                                categorySlug={categorySlug}
                                currentPage={currentPage}
                            />
                        </>
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