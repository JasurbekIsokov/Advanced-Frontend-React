import { classNames } from "shared/lib/classNames/ClassNames";
import cls from "./ErrorPage.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";

interface ErrorPageProps {
  className?: string;
}

const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };

  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <p>{t("errorPage")}</p>
      <Button onClick={reloadPage}>{t("reloadPage")}</Button>
    </div>
  );
};

export default ErrorPage;
