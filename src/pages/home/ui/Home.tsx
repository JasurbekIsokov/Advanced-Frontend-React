import BugButton from "app/providers/ErrorBoundary/ui/BugButton";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <BugButton />
      <div>{t("home")}</div>
    </>
  );
};

export default Home;
