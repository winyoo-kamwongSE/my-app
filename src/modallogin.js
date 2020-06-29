import React  from 'react';
import {Button,Modal,Form} from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="email" placeholder="EnterUserName" />
            <Form.Text className="text-muted">
            Please Login
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
     
        </Form>

        </Modal.Body>
        <Modal.Footer>
        <div className="row" >
            <div className="col" style={{textAlign: 'center'}}>          
                 <Button  variant="outline-primary" onClick={props.onHide}>
                      Login
                  </Button>
            </div>
        </div>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ButtonLogin() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button   variant="outline-primary" onClick={() => setModalShow(true)}>
          Login
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }
  export default ButtonLogin;