import { useParams } from "react-router-dom";
import { AddService } from "../components";

function NewService(): JSX.Element {
  const { id = "-1" } = useParams();
  const editId = parseInt(id);

  return (
    <>
      <h1>
        {editId > -1
          ? "Edit the chosen service"
          : "Add a new service to the list"}
      </h1>
      <AddService editId={editId} />
    </>
  );
}

export default NewService;
