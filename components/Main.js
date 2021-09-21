import React from 'react'
import useTranslation from 'next-translate/useTranslation';

const Main = () => {
    const { t } = useTranslation();
    return (
        <div id="main-picture">
            <div id="tagline">
                <span id="main_title">
                    {t("common:tagline")}
                </span>
            </div>
        </div>
    )
}

export default Main
