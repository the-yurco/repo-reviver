import { auth, currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  return (
    <section className="h-full w-full flex justify-center items-center">
      Welcome, {user?.firstName}!
    </section>
  );
}
