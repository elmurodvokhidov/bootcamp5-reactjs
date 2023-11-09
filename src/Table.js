import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { ContextData } from './context/Context';

function DarkTable() {
    const { user } = useContext(ContextData);

    return (
        <Table striped bordered hover variant="dark" className='fs-5'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    user.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.city}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default DarkTable;