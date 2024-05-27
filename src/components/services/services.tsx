import { useState } from "react";
import { Service } from "../../types/service";
import { useServices } from "./hooks/services.hook";
import "./services.css";
import { truncateString } from "../../tools/string";
import viewLogo from "../../assets/view.svg";
import editLogo from "../../assets/edit.svg";
import deleteLogo from "../../assets/delete.svg";
import { Details } from "../index";

export function Services(): JSX.Element {
  const [services, setServices] = useState<Service[]>(
    JSON.parse(localStorage.getItem("services") ?? "[]")
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsData, setDetailsData] = useState<Service>({
    author: "",
    name: "",
    description: "",
  });
  const { removeService } = useServices({ setServices });

  return (
    <>
      <Details
        detailsData={detailsData}
        isVisible={isDetailsOpen}
        setIsVisible={setIsDetailsOpen}
      />
      <div className="services_container">
        <div className="services_row">
          <h2>Author</h2>
          <h2>Service Name</h2>
          <h2>Actions</h2>
        </div>
        {services.length === 0 && (
          <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
            Your list is empty!
            <br /> Go to the 'New' page to start adding services
          </h2>
        )}
        {services.map(function (i, index) {
          return (
            <div className="services_row service_data" key={index}>
              <h2>{truncateString(i.author, 10)}</h2>
              <h2>{truncateString(i.name, 20)}</h2>
              <span>
                <img
                  src={viewLogo}
                  className="action_logo"
                  onClick={() => {
                    setIsDetailsOpen(true);
                    setDetailsData(i);
                  }}
                />
                <img
                  src={editLogo}
                  className="action_logo"
                  onClick={() => (location.href = `/add/${index}`)}
                />
                <img
                  src={deleteLogo}
                  className="action_logo"
                  onClick={() => removeService(i.name)}
                />
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
