import React from 'react';
import './Error.css';

type ErrorProps = {
    message: string,
    onClose: () => void
}

function ErrorModal({message, onClose}: ErrorProps) {
    return (
        <div className={"modal"}>
            <div className={"modal-content"}>
                <span className={"close"} onClick = {onClose}>
                    &times;
                </span>
                <p>{message}</p>

                <button onClick={onClose}>
                    Retry
                </button>
            </div>
        </div>
    )
}

export default ErrorModal;