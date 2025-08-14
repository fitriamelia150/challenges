import { fraunces } from "@/fonts/fonts";
import Image from "next/image";
import HomePage from "./home/page";
import HeaderComponent from "@/components/Header";

export default function Home() {
  return (
    <div className="relative">
      <HeaderComponent/>
      <HomePage/>
    </div>
  );
}
