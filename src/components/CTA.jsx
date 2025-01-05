
const CallToAction = () => {
    return (
        <>
        <section id="contact-me" className="pad box" style={{scrollMarginTop: "40px"}}>

            <Aesthetics />

            <div className="mx-auto call-to-action br-1" style={{width: "min(100%, 600px)"}}>
                <h3> Lets's build something amazing together! </h3>
                <button className="btn-primary" href=""  target="_blank" rel="noreferrer" >
                    <div className="max">
                        <span> Hit Me Up! </span>
                    </div>
                </button>
            </div>
        </section>

        <hr className="mx-auto" style={{width: "min(90%, 500px)"}}></hr>
        </>
    );
};

export default CallToAction;




const Aesthetics = () => (
    <>
        <div className="abs-mid" style={{aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#171a43", filter: "blur(150px)", transform: "translateY(-50%)", width: "300px"}}>
        </div>
        <div className="abs-mid" style={{aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#9f2ba6", filter: "blur(150px)", transform: "translateY(-50%)", left: 0, right: "50%", width: "300px"}}>
        </div>
    </>
)