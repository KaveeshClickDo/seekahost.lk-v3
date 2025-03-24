import Image from 'next/image';

export default function Hero () {
    return (
        <section className="relative md:h-[600px] w-full flex items-center overflow-hidden">
            <div className="absolute inset-0 md:w-[72%] h-full bg-gradient-to-r from-[#09407A] to-[#136CC9] rounded-br-[100px]"></div>

            <div className="relative container mx-auto px-6 flex flex-col md:flex-row items-center mt-10 md:mt:0">


                <div className="text-white w-full max-w-2xl z-1">
                    <h1 className="text-xl md:text-5xl font-bold leading-tight">
                        World&rsquo;s Best Multiple IP <br /> PBN Hosting Manager
                    </h1>

                    <p className="mt-4 text-lg opacity-90">
                        All-in-One Click WordPress Blog hosting control panel to securely host private blog networks on unique multiple IP addresses.
                    </p>

                    <div className="mt-6 flex items-center bg-white rounded-full pl-4 shadow-md w-full max-w-lg">
                        <input
                            id="searchDomain"
                            type="text"
                            placeholder="Search for a domain..."
                            className="flex-grow outline-none text-black"
                        />
                        <button className="bg-blue-600 text-white px-5 md:px-10 py-4 rounded-full hover:bg-blue-700 transition">
                            Search
                        </button>
                    </div>

                    <div className="mt-4 grid grid-cols-2 xl:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.com</span>
                            <span className="text-white">Rs1976</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.co.uk</span>
                            <span className="text-white">Rs1511</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.net</span>
                            <span className="text-white">Rs2441</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span className="bg-yellow-500 text-black px-3 py-1 rounded-full font-bold">.org</span>
                            <span className="text-white">Rs2209</span>
                        </div>
                    </div>

                </div>

                <div className="relative w-full max-w-lg z-1 justify-end ml-auto mt-8 md:mt-0">
                    <Image
                        src="/images/home/hero-videoimage.webp"
                        alt="Hero Image"
                        width={512}
                        height={420}
                        className="w-full rounded-lg shadow-lg rounded-tl-[100px]"
                        priority
                    />
                    <a
                        href="https://www.youtube.com/watch?v=hx2W4fmqw_w"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Watch introduction video on YouTube"
                        className="absolute bottom-6 left-6 bg-transparent p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 26 26"
                            className="w-15 h-15 transition duration-1000 fill-white opacity-60 hover:fill-[#136CC9] hover:opacity-100"
                        >
                            <polygon points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69" />
                            <path d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z" />
                        </svg>
                    </a>
                </div>


            </div>
        </section>
    );
}
