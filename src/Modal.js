import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ContextData } from './context/Context';

function FormModal() {
    const { getUser, addNewUser } = useContext(ContextData);
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Form onClick={(e) => e.stopPropagation()} className='bg-light text-dark' noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        name='firstName'
                        required
                        type="text"
                        placeholder="First name"
                        onInput={(e) => getUser(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        name='lastName'
                        required
                        type="text"
                        placeholder="Last name"
                        onInput={(e) => getUser(e)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>City</Form.Label>
                    <Form.Control name='city' type="text" placeholder="City" required onInput={(e) => getUser(e)} />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid city.
                    </Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button onClick={addNewUser} className='mt-3' type="button">Add</Button>
        </Form>
    );
}

export default FormModal;