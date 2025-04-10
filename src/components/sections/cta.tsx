import { Icons } from "@/components/icons";
import Section from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function CtaSection() {
  return (
    <Section
      id="cta"
      title="Ready to Transform Your Business Operations?"
      subtitle="Take the first step toward 24/7 automated customer engagement."
      className="bg-primary/10 rounded-xl py-16"
    >
      <div className="flex flex-col w-full sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
        <Link
          href={siteConfig.ctaLink}
          className={cn(
            buttonVariants({ variant: "default" }),
            "w-full sm:w-auto text-background flex gap-2"
          )}
        >
           <strong>
                  Book Your Discovery Call
                </strong>
        </Link>
      </div>
    </Section>
  );
}
