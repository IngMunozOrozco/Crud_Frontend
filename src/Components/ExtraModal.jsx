import error from '/Error.svg'

const ExtraModal = ({ isOpen, setIsOpen, deleted, deleteUser, firstName, lastName, isSuccesful, setIsSuccesful, isCreated, setIsCreated, isDelete, setIsDelete, isError, setIsError }) => {

    return (
        <>
        <div className={`extra-modal ${isOpen? "is-Open" : ""}`}>
            <div className="modal-content">
              <div>
                <h2>Remove this item from DB?</h2>
                </div>
                <div className="paragraph">
                <p>User <strong>{`${firstName} ${lastName}`}</strong> will be permanently removed</p>
              </div>
              <div className="modal-button">
                <button onClick={() => {deleteUser(deleted); setIsOpen(false); setIsDelete(true)}}>Accept</button>
                <button className="modif" onClick={() => setIsOpen(false)}>Cancel</button>
              </div>
            </div>
        </div>
        <div className={`delete-modal ${isDelete? "is-Delete" : ""}`}>
            <div className="delete-content">
            <p>User <strong>{`${firstName} ${lastName}`}</strong> has been removed from DB</p>
            <button onClick={() => setIsDelete(false)}>Return</button>
            </div>
       </div>
        <div className={`update-modal ${isSuccesful? "is-Succesful" : ""}`}>
            <div className="update-content">
            <p>User <strong>{`${firstName} ${lastName}`}</strong> has been succesfully updated</p>
            <button onClick={() => setIsSuccesful(false)}>Return</button>
            </div>
       </div>
       <div className={`create-modal ${isCreated? "is-Created" : ""}`}>
            <div className="create-content">
            <p>New User <strong>{`${firstName} ${lastName}`}</strong> has been succesfully created </p>
            <button onClick={() => setIsCreated(false)}>Close</button>
            </div>
       </div>
       <div className={`error-modal ${isError? "is-Error" : ""}`}>
            <div className="error-content">
                <div>
                <img src={error} alt=''/>
                 <span>Fatal Error!</span>
                 </div>
            <p>Fatal error </p>
            <button onClick={() => setIsError(false)}>Close</button>
            </div>
       </div>
        </>
    )
}

export default ExtraModal