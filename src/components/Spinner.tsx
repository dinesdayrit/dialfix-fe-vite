type Props = {
  text?: string;
};

export default function Spinner({ text }: Props) {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-green-500 dark:border-gray-600 dark:border-t-gray-400" />
      {text && (
        <p className="text-orange-500 dark:text-gray-400 animate-pulse mt-2">
          {text}
        </p>
      )}
    </div>
  );
}
