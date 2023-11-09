import Table from 'react-bootstrap/Table';

function Jadval({ allInfo }) {

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                {
                    allInfo.map((value, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{value.username}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}

export default Jadval;