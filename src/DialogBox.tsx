import React from "react";

interface DialogBoxProps {
    setIsOpen: Function;
    selectedRows: any[];
}

const DialogBox: React.FC<DialogBoxProps> = ({ setIsOpen, selectedRows }) => {
    // check available status on selected rows
    const downloadfiles: any = []
    selectedRows?.forEach((item) => {
        if (item.status === 'available') {
            downloadfiles.push(item)
        }
    })


    return (
        <div className="dialog_wrapper">
            <div className="dialog_body">
                <h1>Download files</h1>
                {downloadfiles?.map((item: any) => {
                    return (
                        <div className="dialog_content">
                            <div> Device : {item.device} </div>
                            <div> Path:  {item.path}</div>
                        </div>

                    )
                })}

                {(!downloadfiles || downloadfiles.length === 0) &&
                    <div>No files available </div>}

                <button className="table_button" onClick={() => setIsOpen(false)}>Close</button>

            </div>
        </div>
    );
};

export default DialogBox;
