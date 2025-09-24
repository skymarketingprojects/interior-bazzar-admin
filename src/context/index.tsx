import { ModalProvider } from "./ModalContext";
import { DialogProvider } from "./DialogContext";
import { AlertContextProvider } from "./AlertContext";

const ParentContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AlertContextProvider>
      <DialogProvider>
        <ModalProvider>{children}</ModalProvider>
      </DialogProvider>
    </AlertContextProvider>
  );
};
export default ParentContextProvider;
