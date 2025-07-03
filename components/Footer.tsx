export default function Footer() {
  return (
    <footer className="bg-white py-6 mt-12 border-t">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.
      </div>
    </footer>
  );
}
