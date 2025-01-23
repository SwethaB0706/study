import i18n from "i18next";
import {initReactI18next} from "react-i18next";
// Ideally each resource will go in its own JSON file
const resources = {
    "en-US": {
        "translation": {
            "headlines": "Headlines today!",
            "sports": "Sports news",
            "politics": "Politics news",
            "comments": "Enter your comments",
            "submit": "Submit",
            "commentsPlaceholder": "Not more than 100 words"
        }
    },
    "fr-FR": {
        "translation": {
            "headlines": "Les titres d'aujourd'hui !!",
            "sports": "Actualités sportives",
            "politics": "Actualités politiques",
            "comments": "Entrez vos commentaires",
            "submit": "Soumettre",
            "commentsPlaceholder": "Pas plus de 100 mots"
        }
    },
    "hi-IN": {
        "translation": {
            "headlines": "आज की सुर्खियां !!",
            "sports": "खेल समाचार",
            "politics": "राजनीतिक समाचार",
            "comments": "अपनी टिप्पणी दर्ज करें",
            "submit": "जमा करें",
            "commentsPlaceholder": "100 शब्दों से अधिक नहीं"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "hi-IN", //navigator.language,//"fr-FR",
        interpolation: {
            escapeValue: false
        }
    });
export default i18n;