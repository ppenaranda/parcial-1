import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const RobotDetail = ({ robots }) => {
  const { t } = useTranslation(); 
  const { id } = useParams();
  const robot = robots.find((r) => r.id === parseInt(id));

  if (!robot) {
    return <p>{t('robotNotFound')}</p>; 
  }

  return (
    <div className="robot-detail">
      <h2>{robot.nombre}</h2> 
      <img src={robot.imagen} alt={robot.nombre} style={{ width: '300px', height: 'auto' }} /> 
      <p>{t('robotDetails.year')}: {robot.añoFabricacion}</p>
      <p>{t('robotDetails.processingCapacity')}: {robot.capacidadProcesamiento}</p> 
      <p>{t('robotDetails.mood')}: {robot.humor}</p> 
      <p>{t('robotDetails.additionalFeatures')}: {robot.additionalFeatures || t('noAvailable')}</p> 
    </div>
  );
};

export default RobotDetail;
