import Image from "next/image";

export default function WhySeekahost() {
  return (
    <section className="py-16 bg-white md:my-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-18 justify-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Why SeekaHost
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/home/learning.svg" width={50} height={50} alt="Lifelong Learning" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2">Lifelong Learning</h3>
                <p className="text-gray-700">
                  We champion continuous growth and exploration, inspiring our learners to embrace learning as a lifelong journey.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/home/education.svg" width={50} height={50} alt="Quality Education" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2">Quality Education</h3>
                <p className="text-gray-700">
                  SkillNest delivers high-quality courses, curated by leading experts, ensuring an exceptional learning experience for all.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/home/inclusivity.svg" width={50} height={50} alt="Inclusivity" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2">Inclusivity</h3>
                <p className="text-gray-700">
                  We welcome learners of all backgrounds and skill levels, fostering an inclusive and supportive online community.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image src="/images/home/empowerment.svg" width={50} height={50} alt="Empowerment" />
              </div>
              <div>
                <h3 className="text-lg md:text-2xl font-bold mb-2">Empowerment</h3>
                <p className="text-gray-700">
                  Our platform is designed to empower learners, giving them the tools and knowledge to thrive in their personal and professional endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/home/get-started.webp"
              alt="Get Started Image"
              width={1363}
              height={1430}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}