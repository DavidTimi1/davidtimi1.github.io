
const MyServices = () => {
    return (
        
        <section id="services" className="my-services box fw">
            <Aesthetics />

			<div className="pad fw d-flex flex-column mid-align gap-5">
                <h3>My Services</h3>
                
                <div className="services-grid fw">
                    {
                        services.map( (data, key) => <Service {...data} key={key} /> )
                    }
                </div>
            </div>
        </section>
    );
};

export default MyServices;


const services = [
    {title: "Website development", brief: "Build stunning websites with incredible conversion rates", icon: "/icon1.png"},
    {title: "Webapp deployment", brief: "Deploy a scalable app to production in record time with ", icon: "/icon1.png"},
    {title: "AI integration and bot engineering", brief: "Automate various parts of your product / service workflow, improving efficiency and customer support", icon: "/icon1.png"}
]


const Service = ({title, icon, brief}) => (
    
    
    <div className="service-card">
        <div className="max">
            <h4>{title}</h4>
            <p>{brief}</p>
            <img src={icon} alt=""/>
        </div>
    </div> 
)

const Aesthetics = () => (
    <div className="abs-mid" style={{aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#9f2ba6", filter: "blur(200px)", width: "300px"}}>
    </div>
)