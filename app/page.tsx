import Footer from "@/components/footer";
import Generator from "@/components/generator";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="p-8 container mx-auto h-full flex flex-col justify-between items-center">
      <Header />
      <Generator />
      <Footer />
    </div>
  );
}
