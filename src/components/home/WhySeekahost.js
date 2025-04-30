import Image from "next/image";

export default function WhySeekahost() {
  return (
    <>
      <section className="py-16 bg-white md:my-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-15 justify-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-semibold mb-8">
              Why SeekaHost
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/learning.svg" width={50} height={50} alt="Lifelong Learning" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Lifelong Learning</h3>
                  <p className="text-gray-700 md:text-lg font-medium">
                    We champion continuous growth and exploration, inspiring our learners to embrace learning as a lifelong journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/education.svg" width={50} height={50} alt="Quality Education" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Quality Education</h3>
                  <p className="text-gray-700 md:text-lg font-medium">
                    SkillNest delivers high-quality courses, curated by leading experts, ensuring an exceptional learning experience for all.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/inclusivity.svg" width={50} height={50} alt="Inclusivity" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Inclusivity</h3>
                  <p className="text-gray-700 md:text-lg font-medium">
                    We welcome learners of all backgrounds and skill levels, fostering an inclusive and supportive online community.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/images/home/empowerment.svg" width={50} height={50} alt="Empowerment" />
                </div>
                <div>
                  <h3 className="text-lg md:text-2xl font-semibold mb-2">Empowerment</h3>
                  <p className="text-gray-700 md:text-lg font-medium">
                    Our platform is designed to empower learners, giving them the tools and knowledge to thrive in their personal and professional endeavors.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/home/woman-laptop.webp"
                alt="Woman using laptop"
                width={2112}
                height={2736}
                className="rounded-xl shadow-lg w-1/2 h-1/2 md:w-full md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 bg-gradient-to-b from-[#09407A] to-[#136CC9]">
        {/* <Image
          src="/images/shared/middle-banner.png"
          alt="Background Image"
          fill
          className="object-cover z-0"
        /> */}

        <div className="relative z-1 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:my-10">

          <div className="md:w-1/2 mb-8 md:mb-0 text-white">
            <p className="text-sm md:text-2xl font-medium mb-2">Important For Transactions</p>
            <h2 className="text-2xl md:text-4xl mb-6 leading-snug">
              Useful for facilitating transactions<span className='font-semibold'><br />
                <span className="relative font-semibold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">between buyers &amp; sellers</span></span>
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start md:text-lg">
                <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={30} height={30}>
                    <circle cx="53" cy="48" r="40" fill="rgba(255, 255, 255, 0.2)" />
                    <path d="M40 55 L50 65 L70 35" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Money can be exchanged very easily
              </li>
              <li className="flex items-start md:text-lg">
              <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={30} height={30}>
                    <circle cx="53" cy="48" r="40" fill="rgba(255, 255, 255, 0.2)" />
                    <path d="M40 55 L50 65 L70 35" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Bills can be safely paid anywhere at any time
              </li>
              <li className="flex items-start md:text-lg">
              <span className="mr-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={30} height={30}>
                    <circle cx="53" cy="48" r="40" fill="rgba(255, 255, 255, 0.2)" />
                    <path d="M40 55 L50 65 L70 35" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Work quickly, saving your important time
              </li>
            </ul>
          </div>


          <div className="md:w-1/2 relative flex justify-center md:justify-end items-center">
            <Image
              src="/images/home/buynsell.webp"
              alt="Person using laptop"
              width={2554}
              height={2031}
              className="rounded-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}