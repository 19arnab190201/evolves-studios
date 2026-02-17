import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl">
        404
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
