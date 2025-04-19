import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/icon-white.png"
                alt="Tweet Toilet Logo"
                width={48}
                height={48}
                className="w-14 h-14 bg-transparent"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Tweet Toilet</span>
            </Link>

            {/* Right Navigation */}
            <div className="flex items-center space-x-4">
              <Link
                href="/signup"
                className="text-sm font-semibold px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-12">
              <Image
                src="/icon-white.png"
                alt="Tweet Toilet Logo"
                width={160}
                height={160}
                className="w-44 h-44 bg-transparent"
                priority
              />
            </div>
            <h1 className="text-6xl font-bold leading-tight tracking-tight mb-8">
              <span className="text-gray-900">The Most </span>
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Satisfying Way To Tweet
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Instantly tweet from any page with a blazing-fast keyboard shortcut.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://chrome.google.com/webstore"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Install Now
              </Link>
              <Link
                href="#learn-more"
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section + Footer */}
      <div className="bg-gradient-to-br from-blue-600 to-cyan-500">
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Simultaneously increase and decrease your Twitter usage.</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Ctrl+Shift+S on any webpage to instantly open Tweet Toilet.<br />
              Type your tweet and hit Enter to share.
            </p>
            <Link
              href="https://chrome.google.com/webstore"
              className="inline-block px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
