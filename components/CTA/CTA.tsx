"use client";

import { QuoteDialog } from "../Dialog/QuoteDialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SwithPageButton() {
  const pathname = usePathname();
  const Services = <Link href="/services">View Services</Link>;
  const Portfolio = <Link href="/portfolio">View Portfolio</Link>;

  return pathname === "/portfolio" ? Services : Portfolio;
}

export default function CTA(props: any) {
  return (
    <section className="py-10 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-6 text-balance">
          {props.title}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 text-pretty">
          {props.text}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <QuoteDialog />
          <Button
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-lg bg-transparent"
          >
            {SwithPageButton()}
          </Button>
        </div>
      </div>
    </section>
  );
}
