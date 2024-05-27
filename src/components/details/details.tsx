import { Service } from "../../types/service";
import "./details.css";

interface DetailsParams {
  detailsData: Service;
  isVisible: boolean;
  setIsVisible(a: boolean): void;
}

export function Details(params: DetailsParams): JSX.Element {
  const { detailsData, setIsVisible, isVisible } = params;
  return (
    <>
      {isVisible && (
        <div className="details_container">
          <div className="details_data">
            <div onClick={() => setIsVisible(false)} className="close_details">
              X
            </div>
            <h2>Author: {detailsData.author}</h2>
            <h2>Service name: {detailsData.name}</h2>
            <h2>Description:</h2>
            <p>{detailsData.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
