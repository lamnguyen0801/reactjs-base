import MainContent from "./MainContent";
import Menu from "./Menu";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col sm:flex-row min-h-screen">
        <Menu />
        <MainContent />
      </div>
    </>
  );
};


