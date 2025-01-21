import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function Faq() {
  const faqs = [
    {
      question: "What is DialFix?",
      answer:
        "DialFix is an app that allows you to easily book appointments with various service providers, such as PC technicians, plumbers, electricians, and more. Our platform connects you with trusted professionals in your area, making it simple to get the help you need when you need it.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "To book an appointment, simply open the DialFix app, choose your desired service category, browse through available professionals, and select a time that suits you. Once confirmed, you’ll receive a notification with your booking details.",
    },
    {
      question: "Can I see reviews for service providers?",
      answer:
        "Yes, DialFix provides ratings and reviews for each service provider, helping you choose a professional who best matches your needs. All reviews come from verified users who have previously booked through the app.",
    },
    {
      question: "How do I cancel or reschedule an appointment?",
      answer:
        "You can easily cancel or reschedule your appointment through the app. Simply go to your booking details, select 'Cancel' or 'Reschedule,' and follow the prompts. Please note that cancellation policies may vary depending on the provider.",
    },
    {
      question: "Is there a fee for using DialFix?",
      answer:
        "DialFix itself is free to download and use. However, service fees are determined by the providers and will be displayed when booking. There are no hidden charges from DialFix.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "If you need assistance, our customer support team is here to help! You can reach us through the app’s 'Contact Support' feature, where you can chat with a representative or send us an email.",
    },
  ];

  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 ">
      <div className=" flex flex-col justify-center lg:justify-start items-center lg:items-start p-12">
        <h1 className="text-2xl font-bold mb-6">
          Frequently Asked Questions (FAQ)
        </h1>
        <Accordion type="single" collapsible className="w-full max-w-lg">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className=" flex flex-col items-center justify-center p-12">
        <motion.div
          initial={{ rotateY: 180, opacity: 0 }}
          whileInView={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src="/faq.jpg"
            alt="/"
            className="w-full md:h-[540px] object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
