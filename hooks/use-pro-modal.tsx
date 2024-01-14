import { create } from "zustand";

interface useProModalState {
    isOpen: boolean;
    onOPen: () => void;
    onClose: () => void;
}

export const useProModal = create<useProModalState>((set) => ({
    isOpen: false,
    onOPen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));