import PageNavigation from "@/components/PageNavigation";
import Navbar from "../components/Navbar";
import PageComponents from "@/components/PageComponents";

export default function Home() {
  return (
    <div className="flex bg-gray-100 min-h-screen flex-col gap-4">
      <Navbar />
      <PageNavigation />
      <PageComponents />
    </div>
  );
}
