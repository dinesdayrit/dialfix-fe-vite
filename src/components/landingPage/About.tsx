import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" bg-pink-100">
      <section className="py-16 px-4">
        <h2 className="font-bold text-2xl md:text-4xl leading-loose text-center py-16">
          About us
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src="/aboutImg.avif"
              alt="/"
              className="w-full md:h-[540px] object-cover rounded-lg"
            />
          </div>
          <div className="">
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-slate-600 mb-6 text-justify md:text-lg"
            >
              <span className="font-bold text-green-500 text-xl">DialFix</span>{" "}
              is your one-stop solution for booking appointments with trusted
              service providers, whether you need a quick fix or expert help for
              your home or office. From PC technicians and plumbers to
              electricians and more, DialFix connects you with qualified
              professionals in your area with just a few clicks. Our app makes
              it easy to schedule a time that works for you, ensuring that help
              is always just a tap away.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="font-serif text-slate-600 mb-2 text-justify md:text-lg"
            >
              <span className="font-bold text-orange-500 text-xl">
                Our mission
              </span>{" "}
              is to bring convenience to your doorstep by bridging the gap
              between customers and service experts. With DialFix, you can
              browse available service providers, view ratings and reviews, and
              select the best match for your needs. Say goodbye to endless
              searching and unreliable help—DialFix is here to make your life
              easier.
            </motion.p>
            <p className=" mt-20 font-bold text-slate-600  text-justify">
              Download DialFix today and experience hassle-free, dependable
              service booking right at your fingertips!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
