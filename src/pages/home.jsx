import HomeBody from "../components/homebody";
import HomeFooter from "../components/homeFooter";
import HomeHeader from "../components/homeHeader";
function Home() {
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </div>
  );
}
export default Home;
