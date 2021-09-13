import React from 'react'
import  useTranslation  from 'next-translate/useTranslation';

const Main = () => {
    const { t } = useTranslation();
    return (
        <div id="main-picture">
            <div id="tagline">{t("common:tagline")}</div>
        </div>
    )
}

export default Main
