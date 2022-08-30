import Button from '../Button/Button';

const Modal = ({ children, setShowModal }) => {
    return (
        <div className="backdrop-blur-md bg-white/30 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <Button text={'X'} onClick={() => setShowModal(false)} />
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                        {children}
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b"></div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
