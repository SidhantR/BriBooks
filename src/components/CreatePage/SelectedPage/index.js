import React, { useState, useRef } from "react";
import "../createPage.scss";

import Picker from "emoji-picker-react";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";
import { Button } from "react-bootstrap";

const SelectedPage = (props) => {
  const { selectedImage , handleAddPage} = props;

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const onEmojiClick = () => {};


  return (
    <div className="middle">
    <div
      ref={ref}
      className="middle__container"
      style={{
        backgroundImage: `url(${selectedImage?.link})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <input
        type="text"
        value=""
        placeholder="Start Typing here"
        onClick={handleClick}
      />
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Body>
            <div className="">
              <Picker onEmojiClick={onEmojiClick} />
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>

    </div>
      <Button variant="success" onClick={handleAddPage}>Add New Page</Button>{' '}

    </div>
  );
};

export default SelectedPage;
