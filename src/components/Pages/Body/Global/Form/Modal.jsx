const Modal = ({ children, setShowModal }) => {
    return (
        <div className="backdrop-blur-md bg-white/30 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="w-auto my-6 mx-auto max-w-3xl border border-darkPurple rounded-lg">
                <div className="p-2 border-0 rounded-lg shadow-lg 
                relative flex flex-col w-full bg-white outline-none 
                focus:outline-none">
                    <button 
                        text={'X'} 
                        onClick={() => setShowModal(false)} 
                        className="flex justify-end text-xs hover:underline-offset-2  "
                    >
                        <u>Close</u>
                    </button>
                    <div className="p-5 rounded">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
