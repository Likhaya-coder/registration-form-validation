import { Fragment } from "react";
import PrimaryButton from "./PrimaryButton";
import Card from "./Card";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.dismiss} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header>
        <h1>{props.title}</h1>
      </header>
      <div>
        <p>{props.content}</p>
      </div>
      <footer>
        <PrimaryButton onClick={props.dismiss}>Dismiss</PrimaryButton>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop dismiss={props.dismiss} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} content={props.content} dismiss={props.dismiss} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
