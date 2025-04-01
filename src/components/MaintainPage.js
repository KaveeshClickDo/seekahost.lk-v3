import Link from "next/link";

export default function MaintainPage({pageName = "Coming Soon..."}) {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <div className="text-center max-w-md bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{pageName}</h1>

                <div className="mb-6 py-2">
                    <p className="text-lg text-gray-600">This webpage is Not Available.</p>
                </div>

                <Link href="/"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}