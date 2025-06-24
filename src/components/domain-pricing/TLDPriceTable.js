'use client';

const TLDPriceTable = () => {
  // Sample data - you can easily modify or expand this array
  const tldData = [
    {
      tld: '.blog',
      isOnSale: true,
      register: '£4.41',
      renew: '£22.04',
      transfer: '£22.04'
    },
    {
      tld: '.co.uk',
      isOnSale: true,
      register: '£4.99',
      renew: '£7.99',
      transfer: '£4.99'
    },
    {
      tld: '.com',
      isOnSale: true,
      register: '£6.99',
      renew: '£10.49',
      transfer: '£10.25'
    }
  ];

  const handleGetNow = (tld) => {
    // Handle the "Get Now" button click
    console.log(`Getting ${tld} domain`);
    // Add your logic here (e.g., redirect to purchase page, open modal, etc.)
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
        {/* Header */}
        <div className="bg-[#0A488A] px-6 py-4">
          <h2 className="text-2xl font-bold text-white">Domain Pricing</h2>
          <p className="text-blue-100 mt-1">Choose the perfect domain for your project</p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-blue-100">
                <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  TLD
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Register
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Renew
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  Transfer
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700 uppercase tracking-wide">
                  
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-blue-50">
              {tldData.map((item, index) => (
                <tr 
                  key={item.tld}
                  className="hover:bg-blue-50/50 transition-colors duration-200"
                >
                  {/* TLD Column */}
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-3">
                      {item.isOnSale && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
                          Sale
                        </span>
                      )}
                      <span className="text-lg font-bold text-blue-900">
                        {item.tld}
                      </span>
                    </div>
                  </td>

                  {/* Register Column */}
                  <td className="px-6 py-5 text-center">
                    <span className="text-lg font-semibold text-slate-800">
                      {item.register}
                    </span>
                  </td>

                  {/* Renew Column */}
                  <td className="px-6 py-5 text-center">
                    <span className="text-lg font-semibold text-slate-800">
                      {item.renew}
                    </span>
                  </td>

                  {/* Transfer Column */}
                  <td className="px-6 py-5 text-center">
                    <span className="text-lg font-semibold text-slate-800">
                      {item.transfer}
                    </span>
                  </td>

                  {/* Action Column */}
                  <td className="px-6 py-5 text-center">
                    <button
                      onClick={() => handleGetNow(item.tld)}
                      className="inline-flex items-center px-4 py-2 bg-[#0A488A] hover:from-blue-700 hover:to-blue-800 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <svg 
                        className="w-4 h-4 mr-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
                        />
                      </svg>
                      Get Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 px-6 py-4 border-t border-blue-100">
          <p className="text-sm text-slate-600 text-center">
            All prices include VAT. Renewals are charged at standard rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TLDPriceTable;