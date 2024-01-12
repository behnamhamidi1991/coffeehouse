import Top from "./components/Top/Top";
import Slider from "./components/Slider/Slider";
import CoffeeHouse from "./components/CoffeeHouse/CoffeeHouse";
import Staff from "./components/Staff/Staff";

export default function Home() {
  return (
    <main>
      <Top />
      <Slider />
      <CoffeeHouse />
      <Staff />
    </main>
  );
}
