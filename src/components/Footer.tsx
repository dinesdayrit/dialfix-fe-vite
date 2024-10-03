export default function Footer() {
  return (
    <div className="bg-green-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:px-12">
        <span className="text-3xl text-white font-bold tracking-tight">
          DialHub
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of service</span>
        </span>
      </div>
    </div>
  );
}
