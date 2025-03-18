const timelineData = [
    {
        year: '2023',
        description: 'SeekaHost opened a new data center in Liverpool to scale out UK IP hosting system with SeekaPanel'
    },
    {
        year: '2022',
        description: 'SeekaPanel - Started offering WordPress Hosting with easy domain hosting platform.'
    },
    {
        year: '2021',
        description: 'SeekaHost app web application launch for easy WordPress site hosting with multiple IP address solution'
    },
    {
        year: '2020',
        description: 'SeekaHost launches the best Game Servers for online gaming industry'
    },
    {
        year: '2018',
        description: 'SeekaHost Ltd was registered and started operating as a separate business entity'
    },
    {
        year: '2017',
        description: 'SeekaHost opened a office in London at ClickDo Ltd'
    },
    {
        year: '2016',
        description: 'SeekaHost started offering testing services for SEO industry as leading SEO hosting company'
    },
    {
        year: '2015',
        description: 'ClickDo Ltd Bought SeekaHost started operating in the US HSeekaHost.com'
    },
    {
        year: '2000',
        description: 'SeekaHost.com was registered and started offering web hosting services'
    }
];

export default function Timeline () {
    return (
        <div className="py-16 md:px-30 bg-[#F5FAFF]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12 relative">
                    <span className="relative font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-[4px] after:bg-[#FDB927] after:transform after:skew-x-65">Our Timeline</span>
                </h2>

                <div className="relative">
                    {/* Timeline center line for medium screens and up, left line for small screens */}
                    <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 left-6 h-full w-1 bg-gray-200"></div>

                    {timelineData.map((item, index) => (
                        <div
                            key={index}
                            className={`mb-8 flex items-center relative ${index % 2 === 0
                                    ? 'sm:justify-start justify-end'
                                    : 'sm:justify-end justify-end'
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 left-6 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-200 z-10"></div>

                            {/* Content box */}
                            <div
                                className={`w-5/6 sm:w-5/12 ${index % 2 === 0
                                        ? 'sm:pr-1 pl-8'
                                        : 'sm:pl-1 pl-8'
                                    }`}
                            >
                                <div className="relative bg-white p-6 rounded-lg shadow-md border border-gray-200">
                                    {/* Blue vertical line */}
                                    <div className={`absolute top-0 -left-2 w-5 h-full bg-blue-500 rounded-l-2xl`}></div>

                                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{item.year}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}