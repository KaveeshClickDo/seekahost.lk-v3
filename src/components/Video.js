import Image from 'next/image';

export default function Video() {
  return (
    <>
      <section
        className="relative w-full bg-no-repeat bg-cover py-16"
        style={{ backgroundImage: "url('/bg.svg')" }}
      >
        <div className="max-w-7xl mx-auto px-4">
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
              width={1818}
              height={1035}
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
          {/* Left Content: Title & Features */}
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why SeekaHost
            </h2>

            <div className="space-y-6">
              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <Image src="/learning.svg" width={40} height={40} alt="Lifelong Learning" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Lifelong Learning</h3>
                  <p className="text-gray-600">
                    We champion continuous growth and exploration, inspiring our learners to embrace learning as a lifelong journey.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <Image src="/education.svg" width={40} height={40} alt="Quality Education" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Quality Education</h3>
                  <p className="text-gray-600">
                    SkillNest delivers high-quality courses, curated by leading experts, ensuring an exceptional learning experience for all.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <Image src="/inclusivity.svg" width={40} height={40} alt="Inclusivity" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Inclusivity</h3>
                  <p className="text-gray-600">
                    We welcome learners of all backgrounds and skill levels, fostering an inclusive and supportive online community.
                  </p>
                </div>
              </div>

              {/* Feature Item */}
              <div className="flex items-start gap-4">
                <Image src="/empowerment.svg" width={40} height={40} alt="Empowerment" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Empowerment</h3>
                  <p className="text-gray-600">
                    Our platform is designed to empower learners, giving them the tools and knowledge to thrive in their personal and professional endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Image */}
          <div className="w-full md:w-1/3">
            <Image
              src="/woman-laptop.webp" // Change this to the correct image path
              alt="Woman using laptop"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

    </>
  );
}
