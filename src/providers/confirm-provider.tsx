import { createContext, useContext, useState, ReactNode } from 'react'

interface ConfirmDialog {
  title: string
  message: string
  onConfirm: () => void
  onCancel?: () => void
}

interface ConfirmContextType {
  confirm: (dialog: ConfirmDialog) => void
}

const ConfirmContext = createContext<ConfirmContextType | undefined>(undefined)

interface ConfirmProviderProps {
  children: ReactNode
}

export function ConfirmProvider({ children }: ConfirmProviderProps) {
  const [dialog, setDialog] = useState<ConfirmDialog | null>(null)

  const confirm = (dialogData: ConfirmDialog) => {
    setDialog(dialogData)
  }

  const handleConfirm = () => {
    if (dialog) {
      dialog.onConfirm()
      setDialog(null)
    }
  }

  const handleCancel = () => {
    if (dialog?.onCancel) {
      dialog.onCancel()
    }
    setDialog(null)
  }

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}
      {dialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              {dialog.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {dialog.message}
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  )
}

export function useConfirm() {
  const context = useContext(ConfirmContext)
  if (context === undefined) {
    throw new Error('useConfirm must be used within a ConfirmProvider')
  }
  return context
}
