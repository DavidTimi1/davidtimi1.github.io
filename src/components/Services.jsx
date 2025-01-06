
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
    {title: "Website Design and Development", brief: <>
        I build visually engaging and stunning websites
        tailored to your brand with incredible conversion rates. <br></br>
        From clean, intuitive designs to fast development periods 
        expect out of the box responsiveness accross all devices.
    </>, icon: "/icon1.png"},
    {title: "Web Application Development", brief: <>
        Deploy a scalable web application going from staging to production in record time. <br></br>
        I develop and deploy secure Progressive Web app with offline support 
        and CI/CD pipelines for smooth, reliable release cycles.
    </>, icon: "/icon1.png"},
    {title: "AI integration and bot engineering", brief: <>
        I help integrate AI tools that automate various parts of your product / service workflow, improving efficiency and user interactions. <br></br>
        Get quick up-to-date feedback from your customers helping you stay ahead with intelligent, data-driven solutions.
    </>, icon: "/icon1.png"}
]


const Service = ({title, icon, brief}) => (
    
    
    <div className="service-card">
        <div className="max">
            <h4>{title}</h4>
            <p> <small>{brief}</small></p>
            <img src={icon} alt=""/>
        </div>
    </div> 
)

const Aesthetics = () => (
    <div className="abs-mid" style={{aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#9f2ba6", filter: "blur(200px)", width: "300px"}}>
    </div>
)