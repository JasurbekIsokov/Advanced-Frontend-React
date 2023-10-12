import { classNames } from "helpers/classNames/ClassNames";
import { Button, ThemeButton } from "../Button/ui/Button";
import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";

interface NavbarProps {
  className?: string;
  short?: boolean;
}

const LangSwitcher = ({ className, short }: NavbarProps) => {
  const { t, i18n } = useTranslation();

  const toogle = () => {
    i18n.changeLanguage(i18n.language === "uz" ? "en" : "uz");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.langSwitcher, {}, [className])}
      onClick={toogle}
    >
      {t(short ? "shortLang" : "language")}
    </Button>
  );
};

export default LangSwitcher;
