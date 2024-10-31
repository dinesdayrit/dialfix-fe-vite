import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pb-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
