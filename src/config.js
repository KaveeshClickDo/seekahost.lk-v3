const config = {
    api: process.env.NEXT_PUBLIC_API_URL || 'http://backend:1337',
    externalApi: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://dev-admin.seekahost.co.uk'
}

export default config;