import React from "react";
import { Dropdown } from "react-bootstrap";
import "../createPage.scss";
import { imagesOption } from "../../../helpers/constant";

const PagesOption = (props) => {
  const { handleImage, savedpages, selectedImage } = props;

//   const filteredPhoto = () => {
//     // const data = [...new Set([...imagesOption, ...savedpages])];
//     console.log(data, "data");
//     return data;
//   };

  return (
    <div className="right__container">
        <div>
          <span>Change Background</span>
          {/* <SearchOutlinedIcon /> */}

        </div>
        <div className="dropdown ">
          <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Imagination
            </Dropdown.Toggle>
          </Dropdown>
        </div>
        <div className="image__container">
          {imagesOption?.map(({ id, link, value }) => {

            console.log(selectedImage?.id ,"PPP", id)
            return (
              <div key={id} className={`single__image  ${selectedImage?.id == id? "selected__image" : ""}`}>
                <img src={link} alt={value} onClick={() => handleImage(id)} />
              </div>
            );
          })}
        </div>
      
    </div>
  );
};

export default PagesOption;
