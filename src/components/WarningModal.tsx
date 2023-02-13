import { FC, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const WarningModal: FC<{
  open: boolean;
  setOpen: (arg: boolean) => void;
  url: string;
}> = ({ open, setOpen, url }) => {
  const handleClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Proceed with caution!</Modal.Title>
      </Modal.Header>
      <Modal.Body> You are being redirected to - {url} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleClose();
            window.open(url, "_blank");
          }}
        >
         Proceed
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WarningModal;
