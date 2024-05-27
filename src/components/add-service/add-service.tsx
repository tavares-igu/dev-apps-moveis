import { useState } from "react";
import "./add-service.css";
import { useAddService } from "./hooks/add-service.hook";

export enum ErrorTypes {
  EmptyField = "emptyField",
  NameExists = "nameExists",
  None = "",
}

export function AddService(params: { editId: number }): JSX.Element {
  const { editId } = params;
  const [errorType, setError] = useState<ErrorTypes>(ErrorTypes.None);
  const [wasServiceAdded, setWasServiceAdded] = useState(false);

  const { onAddClick, services } = useAddService({
    setError,
    setWasServiceAdded,
  });

  return (
    <div className="add_container">
      <h2>Service Author</h2>
      <input
        type="text"
        id="service_author"
        defaultValue={editId > -1 ? services[editId].author : ""}
      />

      <h2>Service Name</h2>
      <input
        type="text"
        id="service_name"
        defaultValue={editId > -1 ? services[editId].name : ""}
      />

      {errorType === ErrorTypes.NameExists && (
        <span style={{ color: "rgb(255, 106, 106)" }}>
          Service name already exists
        </span>
      )}

      <h2>Service Description</h2>
      <textarea
        id="service_description"
        defaultValue={editId > -1 ? services[editId].description : ""}
      />

      <button className="add_button" onClick={() => onAddClick(editId)}>
        {editId > -1 ? "Update" : "Add"}
      </button>

      {wasServiceAdded && <span>Service added</span>}

      {errorType === ErrorTypes.EmptyField && (
        <span style={{ color: "rgb(255, 106, 106)" }}>
          All fields must be filled
        </span>
      )}
    </div>
  );
}
