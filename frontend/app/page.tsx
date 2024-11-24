import Image from "next/image";
import FormUser from "./components/FormUser";

export default function Home() {
  return (
    <div className="fixed top-0 flex w-screen h-screen items-center justify-center text-white">
      <FormUser />
    </div>
  );
}
