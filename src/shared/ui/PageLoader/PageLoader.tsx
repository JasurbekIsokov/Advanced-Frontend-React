import { classNames } from "helpers/classNames/ClassNames";
import cls from "./PageLoader.module.scss";
import Loader from "../Loader/Loader";

interface PageLoaderProps {
  className: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  );
};

export default PageLoader;