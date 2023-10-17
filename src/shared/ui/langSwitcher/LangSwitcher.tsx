import { classNames } from "shared/lib/classNames/ClassNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "uz" ? "en" : "uz");
  };

  return (
    <Button
      className={classNames("", {}, [className])}
      theme={ButtonTheme.BACKGROUND_INVERTED}
      onClick={toggle}
    >
      {t(short ? "shortLang" : "language")}
    </Button>
  );
};
