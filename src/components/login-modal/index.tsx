import Modal from "@components/modal";
import { FC, RefObject } from "react";

interface LoginModalProps {
    Ref: RefObject<HTMLElement>;
}

const LoginModal: FC<LoginModalProps> = ({ Ref }) => {
    return (
        <Modal triggerRef={Ref}>
            <div className="w-screen h-20 bg-blue-200 z-20">hi</div>
        </Modal>
    );
};

export default LoginModal;
