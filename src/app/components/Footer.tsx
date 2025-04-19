'use client';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center text-white">
        <p>© {new Date().getFullYear()} Tweet Toilet. All rights reserved.</p>
      </div>
    </footer>
  );
} 