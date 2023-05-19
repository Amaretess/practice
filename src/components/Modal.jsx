const Modal = ( {isOpen, isClosed, children} ) => {
    return (
        <>
        { isOpen && (
            <>
                <button onClick={isClosed}>x</button>
                {children}
            </>
        )}
        
        </>
    );
}

export default Modal;