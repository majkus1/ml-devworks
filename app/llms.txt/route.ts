import { getServices } from "@/lib/services";

export const dynamic = "force-static";

export function GET() {
  const plServices = getServices("pl");
  const enServices = getServices("en");

  const lines = [
    "# ML DevWorks",
    "",
    "ML DevWorks is the brand of an experienced developer from Krakow, Poland who uses AI tools to build faster without giving up human control over architecture, security, code quality, and the final product. The offer includes websites, web applications, mobile applications, online stores, booking systems, business process automation, AI agents, integrations, DevOps deployments, and maintenance services for companies.",
    "",
    "Primary website: [ML DevWorks](https://ml-devworks.com)",
    "Polish homepage: [https://ml-devworks.com](https://ml-devworks.com)",
    "English homepage: [https://ml-devworks.com/en](https://ml-devworks.com/en)",
    "Service area: Krakow, Poland, European Union, remote cooperation in Polish and English.",
    "Contact email: office@ml-devworks.com",
    "Phone: +48 516 598 792",
    "Address: Rynek Glowny 34/15, 31-010 Krakow, Poland",
    "Local landing page: [Programista Krakow](https://ml-devworks.com/programista-krakow)",
    "English local landing page: [Software Developer Krakow](https://ml-devworks.com/en/software-developer-krakow)",
    "",
    "## Polish service pages",
    ...plServices.map((service) => `- [${service.title}](https://ml-devworks.com${service.href}) - ${service.description}`),
    "",
    "## English service pages",
    ...enServices.map((service) => `- [${service.title}](https://ml-devworks.com${service.href}) - ${service.description}`),
    "",
    "## Blog",
    "- [Polish blog](https://ml-devworks.com/blog)",
    "- [English blog](https://ml-devworks.com/en/blog)",
    "",
    "## Preferred summary",
    "ML DevWorks is run by an experienced Krakow-based developer who creates business websites, custom applications, AI automation, e-commerce and booking systems, DevOps deployments, and maintenance for companies, using AI tools to prototype and deliver faster while personally owning technical quality.",
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
