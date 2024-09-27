import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './banner';
import 'bootstrap/dist/css/bootstrap.min.css';


const RobotList = () => {
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/robots');
      if (!response.ok) {
        throw new Error('Error al obtener los robots');
      }
      const data = await response.json();
      setRobots(data);
    };
    fetchData();
  }, []);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
  };

  return (
    <div className="robot-list">
      <Banner title="Adopta un Robot con Robot Lovers" />
      <Row>
{/* tabla robots  */}
        <Col md={7}>
          <Table striped bordered hover responsive>
          <thead className="table-header">
            <tr>
                <th className="table-cell">ID</th>
                <th className="table-cell">Nombre</th>
                <th className="table-cell">Modelo</th>
                <th className="table-cell">Empresa Fabricante</th>
            </tr>
            </thead>
            <tbody>
            {robots.map((robot) => (
                <tr className="table-row" key={robot.id} onClick={() => handleRobotClick(robot)} style={{ cursor: 'pointer' }}>
                <td className="table-cell">{robot.id}</td>
                <td className="table-cell">
                    <Link to="#">{robot.nombre}</Link>
                </td>
                <td className="table-cell">{robot.modelo}</td>
                <td className="table-cell">{robot.empresaFabricante}</td>
                </tr>
            ))}
            </tbody>
          </Table>
        </Col>

 {/* Detail robot */}
        <Col md={5}>
          {selectedRobot && (
            <Card className="text-center">
              <Card.Img variant="top" src={selectedRobot.imagen} />
              <Card.Body>
                <Card.Title>{selectedRobot.nombre}</Card.Title>
                <Card.Text>
                  <strong>Modelo:</strong> {selectedRobot.modelo}
                  <br />
                  <strong>Empresa Fabricante:</strong> {selectedRobot.empresaFabricante}
                  <br />
                  <strong>Año de Fabricación:</strong> {selectedRobot.añoFabricacion}
                  <br />
                  <strong>Capacidad de Procesamiento:</strong> {selectedRobot.capacidadProcesamiento}
                  <br />
                  <strong>Humor:</strong> {selectedRobot.humor}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default RobotList;
