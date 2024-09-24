export default function Home() {
  return (
    <div className="text-center py-[20%] bg-indigo-400 h-[960px] flex flex-col">
      <div className="flex-grow">
        <h1 className="text-5xl font-bold mb-4">Hello, Hadiqa Gohar!</h1>
        <p className="text-2xl text-gray-700">Welcome to my first Next.js app!</p>
      </div>
      <footer className="bg-gray-800 text-white py-6 mt-[450px]"> {/* Increase margin-top */}
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Hadiqa Gohar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
