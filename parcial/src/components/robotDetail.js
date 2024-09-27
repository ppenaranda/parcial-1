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
      <h2>{robot.nombre}</h2> {/* Cambiamos name a nombre */}
      <img src={robot.imagen} alt={robot.nombre} style={{ width: '300px', height: 'auto' }} /> {/* Cambiamos imageUrl a imagen */}
      <p>Año de Fabricación: {robot.añoFabricacion}</p> {/* Cambiamos year a añoFabricacion */}
      <p>Capacidad de Procesamiento: {robot.capacidadProcesamiento}</p> {/* Cambiamos processingCapacity a capacidadProcesamiento */}
      <p>Humor: {robot.humor}</p> {/* Añadimos la propiedad de humor */}
      <p>Características Adicionales: {robot.additionalFeatures || "No disponibles"}</p> {/* Esto dependerá de la estructura del backend */}
    </div>
  );
};

export default RobotDetail;
