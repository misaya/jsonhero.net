import { HomeFooter } from "~/components/Home/HomeFooter";
import { HomeHeader } from "~/components/Home/HomeHeader";
import { useTranslation } from "~/i18n";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <HomeHeader />
      <main className="mx-3 my-6 max-w-3xl space-y-6 text-base leading-7">
        <h1 className="text-3xl font-bold">{t("privacy.title")}</h1>
        <p className="font-bold">{t("privacy.lastUpdated")}</p>
        <p>
          {t("privacy.intro")}
        </p>
        <h2 className="text-xl font-bold">
          {t("privacy.collection.title")}
        </h2>
        <p>
          {t("privacy.collection.body")}
        </p>
        <h2 className="text-xl font-bold">
          {t("privacy.processing.title")}
        </h2>
        <p>
          {t("privacy.processing.body")}
        </p>
        <h2 className="text-xl font-bold">
          {t("privacy.sharing.title")}
        </h2>
        <p>
          {t("privacy.sharing.body")}
        </p>
        <h2 className="text-xl font-bold">{t("privacy.cookies.title")}</h2>
        <p>
          {t("privacy.cookies.body")}
        </p>
        <h2 className="text-xl font-bold">{t("privacy.rights.title")}</h2>
        <p>
          {t("privacy.rights.body")}
        </p>
      </main>
      <HomeFooter />
    </div>
  );
}
