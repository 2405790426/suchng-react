import { useEffect, useState, useRef } from 'react'
import Style from './index.module.scss'
export default function TextExpanded() {
    const [showButton, setShowButton] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const box = useRef<HTMLDivElement>(null)

    useEffect(() => {
        console.log(box.current?.offsetHeight);

        if (box.current?.offsetHeight as number >= 80) {
            setExpanded(false)
            setShowButton(true)
        } else {
            setExpanded(true)
            setShowButton(false)
        }
    }, [])

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <div
                className={expanded ? Style.expanded : Style.collapsed}

            >
                <div
                    ref={box}
                    className={expanded ? '' : Style.bbb}
                    style={{ width: '100px', lineHeight: '20px' }}
                >
                    这是一段文本，   这是一段文本，   这是一段文本，   这是一段文本，   这是一段文本，
                </div>
            </div>
            {showButton && (
                <button onClick={handleExpand}>
                    {expanded ? "收缩" : "展开"}
                </button>
            )}
        </div>
    );
};