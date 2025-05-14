
const MyServices = () => {
    return (
        
        <section id="services" className="my-services box fw">
            <Aesthetics />

			<div className="pad fw d-flex flex-column mid-align gap-5">
                <h1 className="fs-2 m-0">My Services</h1>
                
                <ol className="list-style-none services-grid fw">
                    {
                        services.map( (data, key) => <Service {...data} key={key} /> )
                    }
                </ol>
            </div>
        </section>
    );
};

export default MyServices;


const services = [
    {title: "UI and SEO Optimization", brief: <>
        I build visually engaging and stunning websites
        tailored to your brand with incredible conversion rates. <br></br>
        From clean, intuitive designs to fast development periods 
        expect out of the box responsiveness across all devices.
    </>, icon: "/icon1.png"},
    {title: "Web Application Development", brief: <>
        Deploy a scalable web application going from staging to production in record time. <br></br>
        I develop and deploy secure Progressive Web Apps with offline support 
        and CI/CD pipelines for smooth, reliable release cycles.
    </>, icon: "/icon1.png"},
    {title: "AI integration and bot engineering", brief: <>
        I help integrate AI tools that automate various parts of your product / service workflow, improving efficiency and user interactions. <br></br>
        Get quick up-to-date feedback from your customers helping you stay ahead with intelligent, data-driven solutions.
    </>, icon: "/icon1.png"}
]


const Service = ({title, icon, brief}) => (
    
    
    <li className="service-card">
        <div className="max">
            <h2 className="fs-4 m-0">{title}</h2>
            <p> <small>{brief}</small></p>
            <img src={icon} alt=""/>
        </div>
    </li> 
)

const Aesthetics = () => (
    <div className="abs-mid" style={{aspectRatio: "1/1", borderRadius: "50%", backgroundColor: "#9f2ba6", filter: "blur(200px)", width: "300px"}}>
    </div>
)