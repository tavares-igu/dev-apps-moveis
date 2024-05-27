import { Service } from "../../../types/service";
import { ErrorTypes } from "../add-service";

interface AddServiceParams {
  setError(a: ErrorTypes): void;
  setWasServiceAdded(a: boolean): void;
}

export function useAddService(params: AddServiceParams): {
  onAddClick(editId: number): void;
  services: Service[];
} {
  const { setError, setWasServiceAdded } = params;

  const currentServices = JSON.parse(localStorage.getItem("services") ?? "[]");

  function onAddClick(editId: number) {
    setError(ErrorTypes.None);

    const newAuthor = (<HTMLInputElement>(
      document.getElementById("service_author")
    )).value;

    const newName = (<HTMLInputElement>document.getElementById("service_name"))
      .value;

    const newDescription = (<HTMLInputElement>(
      document.getElementById("service_description")
    )).value;

    if (newAuthor === "" || newDescription === "" || newName === "") {
      setError(ErrorTypes.EmptyField);
      setWasServiceAdded(false);
      return;
    }

    if (currentServices.some((i: Service) => i.name === newName)) {
      const names: string[] = [];
      currentServices.forEach((i: Service) => names.push(i.name));
      if (names.indexOf(newName) !== editId) {
        setError(ErrorTypes.NameExists);
        setWasServiceAdded(false);
        return;
      }
    }

    if (editId < 0) {
      currentServices.push({
        author: newAuthor,
        name: newName,
        description: newDescription,
      });
    } else {
      currentServices[editId] = {
        author: newAuthor,
        name: newName,
        description: newDescription,
      };
    }

    (<HTMLInputElement>document.getElementById("service_name")).value = "";
    (<HTMLInputElement>document.getElementById("service_author")).value = "";
    (<HTMLInputElement>document.getElementById("service_description")).value =
      "";

    localStorage.setItem("services", JSON.stringify(currentServices));
    setWasServiceAdded(true);
    if (editId > -1) location.href = "/home";
  }
  return { onAddClick, services: currentServices };
}
