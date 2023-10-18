import { Modal } from "shared/ui/Modal/Modal";

import { LoginForm } from "../LoginForm/LoginForm";
import { classNames } from "shared/lib/classNames/ClassNames";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames("", {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <LoginForm />
  </Modal>
);
