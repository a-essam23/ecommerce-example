import { ReactNode, FC, useState, RefObject, useEffect } from "react";

interface ModalProps {
    defaultValue?: boolean;
    children: ReactNode | ReactNode[];
    triggerRef: RefObject<HTMLElement>;
}

const Modal: FC<ModalProps> = ({
    children,
    defaultValue = false,
    triggerRef,
}) => {
    const [isVisible, setIsVisible] = useState(defaultValue);
    useEffect(() => {
        if (triggerRef.current)
            triggerRef.current.addEventListener("click", () =>
                setIsVisible(true)
            );
        return () => {
            if (triggerRef.current)
                triggerRef.current.removeEventListener("click", () =>
                    setIsVisible(true)
                );
        };
    }, []);

    return isVisible ? (
        <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            {children}
        </div>
    ) : (
        <></>
    );
};

export default Modal;
