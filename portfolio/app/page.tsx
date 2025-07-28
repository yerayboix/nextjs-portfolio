import DesktopLayout from "./_components/DesktopLayout";
import MobileLayout from "./_components/MobileLayout";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <DesktopLayout />
      <MobileLayout />
    </div>
  );
}
