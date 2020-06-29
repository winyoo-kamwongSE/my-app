import React ,{useState} from 'react';
import {Button,Modal,Form,Col,Row} from 'react-bootstrap';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-success" onClick={handleShow}>
        Add News
      </Button>

      
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          
        <Modal.Header closeButton>
          <Modal.Title>News</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>

        <Form.Group as={Row} controlId="inputDate">
          <Form.Label column sm="3">
            Date
          </Form.Label>
          <Col sm="7">
            <Form.Control type="date" placeholder="28/06/2020" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="inputTitle">
          <Form.Label column sm="3">
            Tilte
          </Form.Label>
          <Col sm="9">
            <Form.Control type="text" placeholder="Title" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="inputType">
          <Form.Label column sm="3">
            Type
          </Form.Label>
          <Col sm="5">
          <Form.Control as="select" defaultValue="Fisco">
            <option>Breaking News</option>
            <option>Fisco</option>
          </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="inputTitle">
          <Form.Label column sm="3">
            Description
          </Form.Label>
          <Col sm="12">
            <Form.Control as="textarea" placeholder="Description" />
          </Col>
        </Form.Group>

      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Example;
