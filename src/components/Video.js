import Image from 'next/image';

export default function Video() {
  return (
    <>
      <section className="py-12 relative">
        <Image
          src="/bg.svg"
          alt="Background"
          fill
          priority
          className="object-cover z-0"
          sizes="100vw"
        // Optional: Add responsive sizes
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="relative z-1 max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white"><span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">Why SeekaHost</span></h2>
            <p className="mt-4 text-white max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto rounded-xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/video-thumb.webp"
              alt="Woman holding phone"
              width={700}
              height={399}
              className="w-full h-auto object-cover"
              priority
            />
            <a
              href="https://www.youtube.com/watch?v=hx2W4fmqw_w"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch introduction video on YouTube"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent p-3 rounded-full shadow-lg cursor-pointer flex items-center justify-center"
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 justify-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why SeekaHost
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/learning.svg" width={40} height={40} alt="Lifelong Learning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Lifelong Learning</h3>
                  <p className="text-gray-600">
                    We champion continuous growth and exploration, inspiring our learners to embrace learning as a lifelong journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/education.svg" width={40} height={40} alt="Quality Education" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Quality Education</h3>
                  <p className="text-gray-600">
                    SkillNest delivers high-quality courses, curated by leading experts, ensuring an exceptional learning experience for all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/inclusivity.svg" width={40} height={40} alt="Inclusivity" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Inclusivity</h3>
                  <p className="text-gray-600">
                    We welcome learners of all backgrounds and skill levels, fostering an inclusive and supportive online community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/empowerment.svg" width={40} height={40} alt="Empowerment" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Empowerment</h3>
                  <p className="text-gray-600">
                    Our platform is designed to empower learners, giving them the tools and knowledge to thrive in their personal and professional endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="flex justify-center">
              <Image
                src="/woman-laptop.webp"
                alt="Woman using laptop"
                width={416}
                height={539}
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative w-full bg-no-repeat bg-cover py-16"
        style={{
          backgroundImage: "linear-gradient(rgba(30, 58, 138, 0.6), rgba(30, 58, 138, 0.6)), url('/middle-banner.svg')"
        }}
      >


        <div className="relative z-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-30 text-white">
            <p className="text-sm font-medium mb-2">Important For Transactions</p>
            <h2 className="text-2xl md:text-3xl mb-6 leading-snug">
              Useful for facilitating transactions<span className='font-semibold'> between <br />
                <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">buyers &amp; sellers</span></span>
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="mr-2"><Image src="/tick-mark.svg" alt="Tick mark icon" width={20} height={20} /></span>
                Money can be exchanged very easily
              </li>
              <li className="flex items-start">
                <span className="mr-2"><Image src="/tick-mark.svg" alt="Tick mark icon" width={20} height={20} /></span>
                Bills can be safely paid anywhere at any time
              </li>
              <li className="flex items-start">
                <span className="mr-2"><Image src="/tick-mark.svg" alt="Tick mark icon" width={20} height={20} /></span>
                Work quickly, saving your important time
              </li>
            </ul>
          </div>


          <div className="md:w-1/2 relative flex justify-center items-center">
            <Image
              src="/buynsell.webp"
              alt="Person using laptop"
              width={754}
              height={600}
              className="rounded-md"
            />
          </div>
        </div>
      </section>

    </>
  );
}
