import { useModal } from "../../../context/ModalContext";
import type { ToastPropType } from "../../../types/propTypes";
import Toast from "./Toast";
const useToast = () => {
    const { showModal } = useModal();
    const showToast = (config: ToastPropType) => {
        showModal(<Toast config={config} />);
    };
    return { showToast };
}
export default useToast;