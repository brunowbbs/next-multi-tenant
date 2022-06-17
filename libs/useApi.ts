import { Tenant } from "../types/Tenant";

export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useapi = () => ({
  getTenant: (tenantSlug: string): boolean | Tenant => {
    switch (tenantSlug) {
      case "b7burger":
        return {
          slug: "b7burger",
          name: "B7Burger",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
      case "b7pizza":
        return {
          slug: "b7pizza",
          name: "B7Pizza",
          mainColor: "#0000FF",
          secondColor: "#0faaaa",
        };

      default:
        return false;
    }
  },
});
