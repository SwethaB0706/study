
import { useTranslation } from "react-i18next";

const News = () => {
    const {t, i18n} = useTranslation();

    return (<div>
        <h6>{t("headlines")}</h6>
        <p>{t("sports")}</p>
        <p>{t("politics")}</p>
        <hr/>
        <label>{t("comments")}</label> <br/>
        <textarea placeholder={t("commentsPlaceholder")}></textarea> <br/>
        <button>{t("submit")}</button>
    </div>);
};

export default News;