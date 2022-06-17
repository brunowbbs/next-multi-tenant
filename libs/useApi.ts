export type getTenantResponse = {
  name: string;
  mainColor: string;
  secondColor: string;
};

export const useapi = () => ({
  getTenant: (tenantSlug: string): boolean | getTenantResponse => {
    switch (tenantSlug) {
      case "b7burger":
        return {
          name: "B7Burger",
          mainColor: "#ff0000",
          secondColor: "#00ff00",
        };
      case "b7pizza":
        return {
          name: "B7Pizza",
          mainColor: "#0000FF",
          secondColor: "#0faaaa",
        };

      default:
        return false;
    }
  },
});
