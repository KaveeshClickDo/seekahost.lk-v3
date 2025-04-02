import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative lg:h-[700px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 lg:w-[72%] h-full bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px] z-1"></div>
            <Image
                src="/images/home/home-hero-bg.svg"
                alt="Background Image"
                fill
                className="object-cover z-0 hidden lg:block"
                priority
            />

            <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center mt-10 lg:mt:0">


                <div className="text-white w-full max-w-2xl z-2">
                    <h1 className="text-xl md:text-5xl font-bold leading-tight">
                        Register Domain Names
                    </h1>

                    <p className="mt-4 text-lg md:text-xl font-medium">
                        All-in-One Click WordPress Blog hosting control panel to securely host private blog networks on unique multiple IP addresses.
                    </p>

                    <div className="mt-6 flex items-center bg-white rounded-full pl-4 shadow-md w-full max-w-lg">
                        <input
                            id="searchDomain"
                            type="text"
                            placeholder="   Search for a domain..."
                            className="flex-grow outline-none text-black"
                        />
                        <button className="bg-blue-600 text-white  md:text-lg px-5 md:px-10 py-4 rounded-full hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 xl:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.com</span>
                            <span className="text-white font-medium">Rs1976</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.co.uk</span>
                            <span className="text-white font-medium">Rs1511</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.net</span>
                            <span className="text-white font-medium">Rs2441</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.org</span>
                            <span className="text-white font-medium">Rs2209</span>
                        </div>
                    </div>

                </div>

                <div className="relative w-full max-w-lg 2xl:max-w-2xl z-1 ml-auto mt-8 lg:mt-0">
                    <Image
                        src="/images/register-domain/register-domain-hero.webp"
                        alt="Hero Image"
                        width={672}
                        height={551}
                        className="w-full rounded-lg shadow-lg rounded-tl-[100px]"
                        priority
                    />
                </div>


            </div>
        </section>
    );
}
