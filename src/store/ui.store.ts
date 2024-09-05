import { GenericObject } from 'types/globals'
import { create } from 'zustand'

export type ModalTypes = 'remove-student'

export type DrawerTypes = 'add-new-student'

type UIStoreProps = {
  activeModal?: ModalTypes
  activeDrawer?: DrawerTypes
  selectedStudent?: GenericObject
}

type UIStoreActions = {
  setActiveDrawer: (activeDrawer?: DrawerTypes) => void
  setActiveModal: (activeModal?: ModalTypes) => void
  setSelectedStudent: (selectedStudent?: GenericObject) => void
}

export const uiStore = create<UIStoreActions & UIStoreProps>((set) => ({
  activeDrawer: undefined,
  activeModal: undefined,
  selectedStudent: undefined,
  setActiveDrawer: (activeDrawer?: DrawerTypes) =>
    set((state) => ({ ...state, activeDrawer })),
  setActiveModal: (activeModal?: ModalTypes) =>
    set((state) => ({ ...state, activeModal })),
  setSelectedStudent: (selectedStudent?: GenericObject) =>
    set((state) => ({ ...state, selectedStudent })),
}))

export default uiStore
