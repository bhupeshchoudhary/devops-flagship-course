import { payment } from "@/data/paymentLink";

interface RouteConfig {
  link: string;
  buttonText: string;
}

const ROUTE_CONFIG: Record<string, RouteConfig> = {
  "/students": {
    link: payment.studentRouteLink,
    buttonText: "Apply Now",
  },
  "/professionals": {
    link: payment.professionRouteLink,
    buttonText: "Apply Now",
  },
  "/fullstack": {
    link: payment.fullstackLink,
    buttonText: "Apply Now",
  },
  default: {
    link: payment.paymentLink,
    buttonText: "Apply Now",
  },
};

export function getRouteConfig(pathname: string | null | undefined): RouteConfig {
  if (!pathname) return ROUTE_CONFIG.default;
  const cleanPath = pathname.replace(/\/+$/, "");
  return ROUTE_CONFIG[cleanPath] || ROUTE_CONFIG.default;
}
