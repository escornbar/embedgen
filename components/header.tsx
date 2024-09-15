import Link from "next/link";
import { RiGithubLine } from "@remixicon/react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="fixed top-0">
      <div className="w-screen p-6 flex justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">embedgen</h1>
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link href="https://github.com/escornbar/embedgen">
            <RiGithubLine className="w-6 h-6" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
