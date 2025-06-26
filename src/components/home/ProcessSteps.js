export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Backup Your Website",
      description: "Secure your current website data"
    },
    {
      number: "02",
      title: "Transfer to SeekaHost",
      description: "Move your site effortlessly to us"
    },
    {
      number: "03",
      title: "Update DNS Settings",
      description: "We’ll configure it all for you"
    }

  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-row items-center justify-between relative">
        {/* Horizontal connection line */}
        <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>

        {steps.map((step, index) => (
          <div key={index} className="relative group flex-1 max-w-sm">

            {/* Step content */}
            <div className="relative z-10 text-center transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 px-4">
              {/* Step circle */}
              <div className="relative mx-auto w-20 lg:w-32 h-20 lg:h-32 mb-6">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/20 to-blue-400/30 blur-lg transform scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Main circle */}
                <div className="relative w-full h-full rounded-full border-2 border-blue-300/60 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center overflow-hidden group-hover:border-white/80 transition-all duration-500">
                  {/* Background animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-blue-600/40 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                  {/* Step number */}
                  <span className="relative text-4xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 drop-shadow-lg">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Step content */}
              <div className="space-y-3">
                <h3 className="text-xs lg:text-2xl text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                  {step.title}
                </h3>

                <p className="hidden md:block text-blue-100/80 group-hover:text-blue-50 transition-colors duration-300 text-sm md:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {step.description}
                </p>
              </div>

              {/* Interactive element */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
                <div className="inline-flex items-center justify-center w-8 h-1 bg-gradient-to-r from-blue-300 to-blue-200 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}