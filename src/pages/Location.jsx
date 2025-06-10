export default function Location() {
  return (
    <div className="flex items-center justify-center p-4 min-h-[51vh] bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="w-full max-w-md p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">Available Locations</h2>
        <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside">
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Bangalore</li>
          <li>Chennai</li>
        </ul>
      </div>
    </div>
  );
}
