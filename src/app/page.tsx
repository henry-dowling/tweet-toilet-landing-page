import Image from 'next/image'
import Link from 'next/link'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Image
              src="/toilet-logo.png"
              alt="Tweet Toilet Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-blue-600">Tweet Toilet</span>
          </div>
          <div className="space-x-4">
            <Link href="https://chrome.google.com/webstore" className="text-gray-600 hover:text-blue-600">
              Download
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-blue-600">
              Features
            </Link>
          </div>
        </nav>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tweet with a <span className="text-blue-600">Flush</span> of Style
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The most entertaining way to share your thoughts on Twitter. Turn every tweet into a satisfying flush experience!
            </p>
            <Link
              href="https://chrome.google.com/webstore"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add to Chrome
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative w-full h-[400px]">
              <Image
                src="/app-screenshot.png"
                alt="Tweet Toilet Chrome Extension"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Tweet Toilet?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚽</div>
              <h3 className="text-xl font-semibold mb-4">Satisfying Experience</h3>
              <p className="text-gray-600">Watch your tweets disappear with a satisfying flush animation</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Secure Authentication</h3>
              <p className="text-gray-600">Safe and secure Twitter integration with your account</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡️</div>
              <h3 className="text-xl font-semibold mb-4">Quick Access</h3>
              <p className="text-gray-600">Tweet directly from your browser with just one click</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
