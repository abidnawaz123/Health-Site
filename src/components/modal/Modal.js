import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { Button, Modal } from 'antd';
import { CheckCircleFilled, StopFilled } from "@ant-design/icons";

const CustomModal = ({ open, setOpen }) => {
    const [disabled, setDisabled] = useState(true);
    const [loading, setLoading] = useState(false)
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);
    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        console.log(e);
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setOpen(false);
        }, 3000)
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };
    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };
    return (
        <>

            <Modal
                title={
                    <div
                        style={{
                            width: '100%',
                            cursor: 'move',
                        }}
                        onMouseOver={() => {
                            if (disabled) {
                                setDisabled(false);
                            }
                        }}
                        onMouseOut={() => {
                            setDisabled(true);
                        }}
                        onFocus={() => { }}
                        onBlur={() => { }}
                    >
                        <h3>Choosed Premium Plan</h3>
                    </div>
                }
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                modalRender={(modal) => (
                    <Draggable
                        disabled={disabled}
                        bounds={bounds}
                        nodeRef={draggleRef}
                        onStart={(event, uiData) => onStart(event, uiData)}
                    >
                        <div ref={draggleRef}>{modal}</div>
                    </Draggable>
                )}
            >
                {loading ? <div>Loading ....</div> :
                    <div>
                        <p><CheckCircleFilled style={{ color: 'green' }} /> Health Diet Guide</p>
                        <p><CheckCircleFilled style={{ color: 'green' }} /> Personalized Nutrition Plans</p>
                        <p><CheckCircleFilled style={{ color: 'green' }} />  Customized plans and ongoing support</p>
                        <p><CheckCircleFilled style={{ color: 'green' }} /> More Health Tips</p>
                        <p><StopFilled style={{ color: 'red' }} /> Regular Exercise Guide</p>
                        <p><StopFilled style={{ color: 'red' }} /> Health Diet Guide</p>
                        <p><StopFilled style={{ color: 'red' }} /> Health Diet Guide</p>
                    </div>
                }
            </Modal>

        </>
    );
};
export default CustomModal;