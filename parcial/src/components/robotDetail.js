import React from 'react';
import { useParams } from 'react-router-dom';

const RobotDetail = ({ robots }) => {
  const { id } = useParams();
  const robot = robots.find((r) => r.id === parseInt(id));

  if (!robot) {
    return <p>Robot no encontrado</p>;
  }

  return (
    <div className="robot-detail">
      <h2>{robot.nombre}</h2> 
      <img src={robot.imagen} alt={robot.nombre} style={{ width: '300px', height: 'auto' }} /> 
      <p>Año de Fabricación: {robot.añoFabricacion}</p> 
      <p>Capacidad de Procesamiento: {robot.capacidadProcesamiento}</p> 
      <p>Humor: {robot.humor}</p> 
      <p>Características Adicionales: {robot.additionalFeatures || "No disponibles"}</p> 
    </div>
  );
};

export default RobotDetail;
