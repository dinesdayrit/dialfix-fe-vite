export default function Spinner({ text }: { text?: string }) {
  return (
    <div className="flex flex-col items-center justify-center mt-20 relative">
      {/* Spinner */}
      <div className="relative flex items-center justify-center">
        <div className="h-24 w-24 animate-spin rounded-full border-4 border-gray-300 border-t-green-500 dark:border-gray-600 dark:border-t-gray-400 bg-white" />

        {/* Logo inside the spinner */}
        <div className="absolute flex items-center justify-center">
          <img src="/logo.png" alt="logo" className="h-44 object-cover mt-3" />
        </div>
      </div>

      {text && (
        <p className="text-orange-500 dark:text-gray-400 animate-pulse mt-2 text-xl">
          {text}
        </p>
      )}
    </div>
  );
}
