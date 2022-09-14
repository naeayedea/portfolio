import React, {useState} from 'react';

const DialogImage = (props) => {
    const initialState = () => false;
    const [display, setDisplay] = useState(initialState);
    return (
        <>
            <img src={props.src} alt={props.alt} className={props.className} onClick={() => setDisplay(!display)}/>
            {display && (
                <dialog onClick={() => setDisplay(!display)} className={"imageDialog"} open>
                    <div className={"imageDialogContainer"}>
                        <img src={props.src} alt={props.alt} />
                    </div>
                </dialog>
            )}
        </>
    )
}

export default DialogImage;
