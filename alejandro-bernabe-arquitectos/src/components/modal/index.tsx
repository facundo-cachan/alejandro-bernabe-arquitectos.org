import './styles.scss';
type ModalProps = {
    children: any
}
const Modal = ({ children }: ModalProps) => <div className="modal">{children}</div>
export default Modal;