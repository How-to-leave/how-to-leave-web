import { PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Modal, Overlay } from './styles'
import { CreateUserWindow } from './windows/CreateUser'
import { CreateCountryWindow } from './windows/CreateCountry'
import { DeleteCountryWindow } from './windows/DeleteCountry'

interface AppModalProps {
  isOpen: Boolean
  handleClose: () => void
}

function AppModal({
  children,
  isOpen,
  handleClose,
}: PropsWithChildren<AppModalProps>) {
  const handleEsc = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return ReactDOM.createPortal(
    <Modal isOpen={isOpen}>
      <Overlay onClick={handleClose} />
      {children}
    </Modal>,
    document.getElementById('modal-root')
  )
}

export { AppModal, CreateUserWindow, CreateCountryWindow, DeleteCountryWindow }
