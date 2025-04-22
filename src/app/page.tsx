import Link from 'next/link'
import Image from 'next/image'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FCFCFC] to-white">
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
                Install
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

      {/* Demo + CTA Section Container */}
      <div className="bg-gradient-to-b from-blue-600 via-blue-500 to-cyan-500">
        {/* Demo Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 max-w-3xl mx-auto leading-tight">
                Simultaneously increase and decrease your Twitter usage.
              </h2>
              <div className="rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm bg-white/5 p-2">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/demo-pic.png"
                    alt="Tweet Toilet interface demonstration on Wikipedia"
                    width={1200}
                    height={800}
                    className="w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-16 pb-24">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-white mb-8">
                A keyboard shortcut for blazing-fast tweets.
              </h3>
              
              {/* Keyboard Shortcut Display */}
              <div className="inline-flex items-center space-x-4 bg-white/10 rounded-2xl px-8 py-4 mb-8">
                <div className="flex items-center space-x-2">
                  <kbd className="px-3 py-2 text-sm font-semibold bg-white text-blue-600 rounded-lg shadow">Ctrl</kbd>
                  <span className="text-white">+</span>
                  <kbd className="px-3 py-2 text-sm font-semibold bg-white text-blue-600 rounded-lg shadow">Shift</kbd>
                  <span className="text-white">+</span>
                  <kbd className="px-3 py-2 text-sm font-semibold bg-white text-blue-600 rounded-lg shadow">S</kbd>
                </div>
                <span className="text-lg text-blue-100">to instantly open Tweet Toilet</span>
              </div>

              <p className="text-xl text-blue-100 mb-12">
                Share your thoughts in seconds, from anywhere on the web.<br />
              </p>

              <div className="flex flex-col items-center space-y-4">
                <Link
                  href="https://chrome.google.com/webstore"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Use</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
