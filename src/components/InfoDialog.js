import { Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSessionDialog } from "../store/sessionDialogSlice";

const InfoDialog = (props) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleSessionDialog({show: false}));
  }

  return (
    <>
      <Modal open={props.show} onOk={handleClose} onCancel={handleClose}>
        <p>Information</p>
      </Modal>
    </>
  );
};

export default InfoDialog;
