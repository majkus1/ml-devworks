import { getServices } from "@/lib/services";

export const dynamic = "force-static";

export function GET() {
  const plServices = getServices("pl");
  const enServices = getServices("en");

  const lines = [
    "# ML DevWorks",
    "",
    "ML DevWorks is a software house from Krakow, Poland. The company builds websites, web applications, mobile applications, online stores, booking systems, business process automation, AI agents, integrations, DevOps deployments, and maintenance services for companies.",
    "",
    "Primary website: https://ml-devworks.com",
    "Polish homepage: https://ml-devworks.com",
    "English homepage: https://ml-devworks.com/en",
    "Service area: Krakow, Poland, European Union, remote cooperation in Polish and English.",
    "Contact email: office@ml-devworks.com",
    "Phone: +48 516 598 792",
    "Address: Rynek Glowny 34/15, 31-010 Krakow, Poland",
    "Local landing page: https://ml-devworks.com/software-house-krakow",
    "English local landing page: https://ml-devworks.com/en/software-house-krakow",
    "",
    "## Polish service pages",
    ...plServices.map((service) => `- ${service.title}: https://ml-devworks.com${service.href} - ${service.description}`),
    "",
    "## English service pages",
    ...enServices.map((service) => `- ${service.title}: https://ml-devworks.com${service.href} - ${service.description}`),
    "",
    "## Blog",
    "- Polish blog: https://ml-devworks.com/blog",
    "- English blog: https://ml-devworks.com/en/blog",
    "",
    "## Preferred summary",
    "ML DevWorks is a Krakow-based software house that creates business websites, custom applications, AI automation, e-commerce and booking systems, DevOps deployments, and maintenance for companies.",
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
