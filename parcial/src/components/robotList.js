import React, { useState, useEffect } from 'react';
import { Table, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './banner';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const RobotList = () => {
  const { t, i18n } = useTranslation(); 
  const [robots, setRobots] = useState([]);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/robots');
      if (!response.ok) {
        throw new Error(t('errorFetchingRobots'));
      }
      const data = await response.json();
      setRobots(data);
    };
    fetchData();
  }, [t]);

  const handleRobotClick = (robot) => {
    setSelectedRobot(robot);
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); 
  };

  return (
    <div className="robot-list">
      {/* Banner */}
      <Banner title={t('robotBanner')} />

      {/* Selector de idioma */}
      <div className="language-selector">
        <p>{t('languageSelector')}:</p>
        <Button onClick={() => changeLanguage('es')} variant="primary" className="m-1">
          Español
        </Button>
        <Button onClick={() => changeLanguage('en')} variant="secondary" className="m-1">
          English
        </Button>
      </div>

      <Row>
        {/* Tabla de robots */}
        <Col md={7}>
          <Table striped bordered hover responsive>
            <thead className="table-header">
              <tr>
                <th className="table-cell">{t('robotTable.id')}</th>
                <th className="table-cell">{t('robotTable.name')}</th>
                <th className="table-cell">{t('robotTable.model')}</th>
                <th className="table-cell">{t('robotTable.manufacturer')}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr
                  className="table-row"
                  key={robot.id}
                  onClick={() => handleRobotClick(robot)}
                  style={{ cursor: 'pointer' }}
                >
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

        {/* Detalles del robot */}
        <Col md={5}>
          {selectedRobot && (
            <Card className="text-center">
              <Card.Img variant="top" src={selectedRobot.imagen} />
              <Card.Body>
                <Card.Title>{selectedRobot.nombre}</Card.Title>
                <Card.Text>
                  <strong>{t('robotDetails.model')}:</strong> {selectedRobot.modelo}
                  <br />
                  <strong>{t('robotDetails.manufacturer')}:</strong> {selectedRobot.empresaFabricante}
                  <br />
                  <strong>{t('robotDetails.year')}:</strong> {selectedRobot.añoFabricacion}
                  <br />
                  <strong>{t('robotDetails.processingCapacity')}:</strong> {selectedRobot.capacidadProcesamiento}
                  <br />
                  <strong>{t('robotDetails.mood')}:</strong> {selectedRobot.humor}
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
