import { useState } from "react";
import "./createPage.scss";
import AddedPages from "./AddedPages";
import SelectedPage from "./SelectedPage";
import PagesOption from "./PagesOption";
import { imagesOption } from "../../helpers/constant";

const CreatePage = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [savedpages, setSavedPages] = useState([])

  const handleImage = (imageId) => {
    
    if(!imageId) return
    setSelectedImage(...imagesOption?.filter((img) => img.id == imageId))
  };

  const handleAddPage =() => {
    if(savedpages?.some((img) => img.link == selectedImage.link) ) return

    setSavedPages((pre) => ([...pre, selectedImage]))
    setSelectedImage(null)
  }


  return (
    <div className="container">
      <AddedPages savedpages={savedpages} handleImage={handleImage} />

      <SelectedPage selectedImage={selectedImage} handleAddPage={handleAddPage} />
      <PagesOption handleImage={handleImage} savedpages={savedpages} selectedImage={selectedImage}/>
    </div>
  );
};

export default CreatePage;
