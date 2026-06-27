import { HomeFooter } from "~/components/Home/HomeFooter";
import { HomeHeader } from "~/components/Home/HomeHeader";
import { useTranslation } from "~/i18n";

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <HomeHeader />
      <main className="mx-3 my-6 max-w-3xl space-y-6 text-base leading-7">
        <h1 className="text-3xl font-bold">{t("Privacy Notice")}</h1>
        <p className="font-bold">{t("Last updated June 27, 2026")}</p>
        <p>
          {t(
            "This privacy notice for jsonhero.net describes how and why information may be collected, stored, used, and shared when you use this service or contact the maintainers."
          )}
        </p>
        <h2 className="text-xl font-bold">
          {t("What Information Do We Collect?")}
        </h2>
        <p>
          {t(
            "We collect personal information that you voluntarily provide when you contact us or use the service. We may also collect device and usage information such as browser type, referring URLs, and activity in the service for security, operation, analytics, and reporting."
          )}
        </p>
        <h2 className="text-xl font-bold">
          {t("How Do We Process Information?")}
        </h2>
        <p>
          {t(
            "We process information to provide, improve, and administer the service, communicate with you, prevent fraud, and comply with law. We process information when we have a valid legal basis to do so."
          )}
        </p>
        <h2 className="text-xl font-bold">
          {t("When Do We Share Information?")}
        </h2>
        <p>
          {t(
            "We may share information in specific business situations, such as a merger, financing, or acquisition, or where required to comply with legal obligations."
          )}
        </p>
        <h2 className="text-xl font-bold">{t("Cookies")}</h2>
        <p>
          {t(
            "We may use cookies and similar tracking technologies to access or store information. Most browsers allow you to remove or reject cookies, though doing so may affect service behavior."
          )}
        </p>
        <h2 className="text-xl font-bold">{t("Your Rights")}</h2>
        <p>
          {t(
            "Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing of personal information. Open an issue in the jsonhero.net repository for privacy questions or requests."
          )}
        </p>
      </main>
      <HomeFooter />
    </div>
  );
}
