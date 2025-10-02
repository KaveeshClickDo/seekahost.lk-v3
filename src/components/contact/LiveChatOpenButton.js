"use client";

export default function LiveChatOpenButton() {
    const handleOpenChat = () => {
        // Check if Tawk_API is loaded
        if (window.Tawk_API && window.Tawk_API.maximize) {
            window.Tawk_API.maximize();
        } else {
            // If not loaded yet, wait for it
            const checkTawk = setInterval(() => {
                if (window.Tawk_API && window.Tawk_API.maximize) {
                    window.Tawk_API.maximize();
                    clearInterval(checkTawk);
                }
            }, 100);
            
            // Clear interval after 5 seconds to prevent infinite checking
            setTimeout(() => clearInterval(checkTawk), 5000);
        }
    };

    return (
            <button 
                onClick={handleOpenChat}
                className="bg-[#0066CC] hover:bg-[#0A488A] text-white font-bold border border-[#0066CC] px-6 py-2 rounded-full transition-colors cursor-pointer"
            >
                Get Live Chat Support
            </button>
    );
}