import UpperSection from "@/components/home/MainSection";
import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  // const user = await currentUser();

  return (
    <section className="h-full w-full flex justify-center">
      <div className="flex flex-col container">
        <UpperSection />
      </div>
    </section>
  );
}
