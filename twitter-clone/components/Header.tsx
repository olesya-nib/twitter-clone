import Link from "next/link";
import TwitterLogo from "@/app/ui/twitter-logo";

export default function Header() {
  return (
    <header className="shrink-0 border-b border-neutral-800 bg-neutral-900 px-6 py-4">
      <Link href="/" aria-label="On Home Page">
        <TwitterLogo />
      </Link>
    </header>
  );
}
