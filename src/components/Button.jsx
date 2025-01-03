import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button(props){
    const type = props.type ?? "button";
    const {className} = props;
    

    return (
        <button {...props} type={type} className={"my-btn no-btn " + (className ?? '')}>
            <div className="btn-bg">
                <div className="btn max">
                    {props.children}
                </div>
            </div>
        </button>
    )
}


export function IconBtn(props){
    let {href, type, onClick, icon, size, disabled} = props;
    
    if (href !== undefined){
        return (
            <a href={href} target="_blank" rel="noreferrer" onClick={onClick} className="no-link my-a my-iconbtn">
                <div className="btn-bg max"></div>

                <FontAwesomeIcon icon={icon} size={size ?? "xl"} />
                <span className="sr-only">
                    { props.children }
                </span>
            </a>
        )
    }
 
    return (
        <button type={type ?? "button"} onClick={onClick} className="no-btn my-iconbtn" disabled={disabled}>
            <div className="abs btn-bg"></div>

            <FontAwesomeIcon icon={icon} size={size ?? "xl"} />
            <span className="sr-only">
                { props.children }
            </span>
        </button>
    )
}