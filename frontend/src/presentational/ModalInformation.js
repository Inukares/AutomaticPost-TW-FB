import React, { Component } from "react";
import { calculatePostTime } from "../utils/calculatePostTime";
import { format } from "../utils/calculatePostTime";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import PropTypes from "prop-types";

export const ModalInformation = props => {
  return (
    <Modal isOpen={props.showModal} toggle={props.toggleModal}>
      {!props.wrongInputMessage ? (
        <div onClick={props.toggleModal}>
          <ModalHeader toggle={props.toggleModal}>
            You have sent a post!
          </ModalHeader>
          <ModalBody>
            {props.autoSchedule
              ? `Your post will be posted on: ${format(calculatePostTime())}`
              : `Your post has just been added !`}
          </ModalBody>
        </div>
      ) : (
        <ModalHeader toggle={props.toggleModal}>
          {props.wrongInputMessage}
        </ModalHeader>
      )}
    </Modal>
  );
};

ModalInformation.propTypes = {
  showModal: PropTypes.bool.isRequired,
  autoSchedule: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  wrongInputMessage: PropTypes.string.isRequired
};
