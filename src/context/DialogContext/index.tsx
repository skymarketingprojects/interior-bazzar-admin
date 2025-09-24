// DialogContext.tsx
import type { ReactNode } from "react";
import Dialog from "../../components/overlays/Dialog"; // See Dialog.tsx below
import { createContext, useContext, useState, useCallback } from "react";

interface DialogOptions {
  message: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
}

interface DialogContextType {
  showDialog: (options: DialogOptions) => Promise<boolean>;
}

const DialogContext = createContext<DialogContextType | null>(null);

export const useDialog = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) throw new Error("useDialog must be used within a DialogProvider");
  return ctx;
};

export const useConfirm = () => {
  const { showDialog } = useDialog();
  return async (message: string, title = "Confirm") => {
    return await showDialog({
      message,
      title,
      confirmText: "Yes",
      cancelText: "No",
    });
  };
};

export const DialogProvider = ({ children }: { children: ReactNode }) => {
  const [dialogOptions, setDialogOptions] = useState<DialogOptions | null>(
    null
  );
  const [resolver, setResolver] = useState<((value: boolean) => void) | null>(
    null
  );

  const showDialog = useCallback((options: DialogOptions) => {
    setDialogOptions(options);
    return new Promise<boolean>((resolve) => setResolver(() => resolve));
  }, []);

  const handleClose = (result: boolean) => {
    setDialogOptions(null);
    resolver?.(result);
  };

  return (
    <DialogContext.Provider value={{ showDialog }}>
      {children}
      {dialogOptions && (
        <Dialog
          {...dialogOptions}
          onConfirm={() => handleClose(true)}
          onCancel={() => handleClose(false)}
        />
      )}
    </DialogContext.Provider>
  );
};
