import { Service } from "../../../types/service";

interface UseServicesReturn {
  removeService(name: string): void;
}

interface UseServicesParams {
  setServices(arr: Service[]): void;
}

export function useServices(params: UseServicesParams): UseServicesReturn {
  const { setServices } = params;
  const services = JSON.parse(localStorage.getItem("services") ?? "[]");

  function removeService(name: string) {
    const indexToRemove = services.map((e: Service) => e.name).indexOf(name);
    if (indexToRemove > -1) {
      services.splice(indexToRemove, 1);
      localStorage.setItem("services", JSON.stringify(services));
      setServices(services);
    }
  }

  return { removeService };
}
