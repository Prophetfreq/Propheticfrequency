import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Prophetic Frequency',
  description: 'Christ-centered AI art, media, and prophetic insight',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-purple-700">Prophetic Frequency</div>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className="hover:text-purple-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-purple-500">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
