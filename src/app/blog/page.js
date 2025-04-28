import Footer from '@/components/shared/Footer';
import Navbar2 from '@/components/shared/Navbar2';
import Topbar from '@/components/shared/Topbar';
import Image from 'next/image';
import Link from 'next/link';
import BacktoTop from "@/components/shared/BacktoTop";
import { blogData } from '@/data/blogData';

export const metadata = {
    title: "Blog"
}

export default function Blog() {
    const featuredArticle = blogData.find(article => article.isFeatured);
    const regularArticles = blogData.filter(article => !article.isFeatured);

    return (
        <>
            <div className="hidden lg:block">
                <Topbar />
            </div>
            <Navbar2 />

            <div className="relative inset-0 w-[72%] h-5 bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>
            <section className="container mx-auto px-4 py-8 max-w-7xl">
                {/* Featured Story */}
                {featuredArticle && (
                    <div className="mb-12">
                        <div className="flex flex-col md:flex-row gap-6 items-center bg-[#F5FAFF]">
                            <div className="relative w-full md:w-1/2 aspect-[611/343]">
                                <Image
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-xl"
                                    priority
                                />
                            </div>

                            <div className="md:w-1/2 p-6">
                                <div className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">FEATURED STORY</div>
                                <h1 className="text-2xl font-bold mb-4">
                                    <Link href={`/${featuredArticle.url}`} className="hover:text-blue-700">
                                        {featuredArticle.title}
                                    </Link>
                                </h1>
                                <p className="md:text-xl text-gray-700 font-medium mb-6">{featuredArticle.excerpt}</p>
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={featuredArticle.authorImage}
                                        alt={featuredArticle.author}
                                        width={40}
                                        height={40}
                                        className="rounded-full"
                                    />
                                    <div>
                                        <div className="font-semibold text-sm">{featuredArticle.author}</div>
                                        <div className="text-xs text-gray-500">{featuredArticle.date}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Top Stories */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">Top Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularArticles.map((article) => (
                            <div key={article.id} className="rounded-lg overflow-hidden shadow-sm bg-white">
                                <div className="relative aspect-video">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={400}
                                        height={225}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center text-xs md:text-sm text-gray-500 font-medium mb-2">
                                        <span>{article.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.category}</span>
                                        {/* <span className="mx-2">•</span>
                                        <span>{article.readTime}</span> */}
                                    </div>

                                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                                        <Link href={`/${article.url}`} className="hover:text-blue-700">
                                            {article.title}
                                        </Link>
                                    </h3>

                                    <p className="text-sm md:text-base text-gray-700 font-medium mb-4 line-clamp-3">{article.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Worldpress */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">WordPress</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularArticles.map((article) => (
                            <div key={article.id} className="rounded-lg overflow-hidden shadow-sm bg-white">
                                <div className="relative aspect-video">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={400}
                                        height={225}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                <div className="p-4">
                                    <div className="flex items-center text-xs md:text-sm text-gray-500 font-medium mb-2">
                                        <span>{article.date}</span>
                                        <span className="mx-2">•</span>
                                        <span>{article.category}</span>
                                        {/* <span className="mx-2">•</span>
                                        <span>{article.readTime}</span> */}
                                    </div>

                                    <h3 className="text-lg md:text-xl font-semibold mb-3">
                                        <Link href={`/${article.url}`} className="hover:text-blue-700">
                                            {article.title}
                                        </Link>
                                    </h3>

                                    <p className="text-sm md:text-base text-gray-700 font-medium mb-4 line-clamp-3">{article.excerpt}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BacktoTop />
            <Footer />
        </>
    );
}