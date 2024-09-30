import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "robotBanner": "Adopt a Robot with Robot Lovers",
      "robotTable": {
        "id": "ID",
        "name": "Name",
        "model": "Model",
        "manufacturer": "Manufacturer"
      },
      "robotDetails": {
        "model": "Model",
        "manufacturer": "Manufacturer",
        "year": "Year of Manufacture",
        "processingCapacity": "Processing Capacity",
        "mood": "Mood",
        "additionalFeatures": "Additional Features"
      },
      "errorFetchingRobots": "Error fetching robots",
      "robotNotFound": "Robot not found",
      "noAvailable": "Not available",
      "languageSelector": "Select Language"
    }
  },
  es: {
    translation: {
      "robotBanner": "Adopta un Robot con Robot Lovers",
      "robotTable": {
        "id": "ID",
        "name": "Nombre",
        "model": "Modelo",
        "manufacturer": "Empresa Fabricante"
      },
      "robotDetails": {
        "model": "Modelo",
        "manufacturer": "Empresa Fabricante",
        "year": "Año de fabricación",
        "processingCapacity": "Capacidad de procesamiento",
        "mood": "Humor",
        "additionalFeatures": "Características adicionales"
      },
      "errorFetchingRobots": "Error al obtener los robots",
      "robotNotFound": "Robot no encontrado",
      "noAvailable": "No disponibles",
      "languageSelector": "Seleccionar idioma"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
