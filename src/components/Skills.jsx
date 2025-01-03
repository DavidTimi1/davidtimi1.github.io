

const Skills = () => {
    return (
        <section className="Skills fw">
            <div className="box pad fw">
                <div className="d-flex flex-column center-text mid-align gap-3">

                    <h3> Skills <br></br>
                        <small>
                            Technologies I Use
                        </small>
                    </h3>

                    <div className="tech-logos d-flex gap-3 flex-wrap mid-align even-space">
                        {
                            Object.keys(skillList).map( (skill, key) => <SkillImg key={key} name={skill} icon={skillList[skill]} size="3x" /> )
                        }
                    </div>

                </div>


            </div>
        </section>
    );
};

export const SkillImg =({name, icon, noTxt, size = "2x"}) => (
    <div className="d-flex flex-column mid-align img-box">
        <div className="skill-item">
            <i role="img" className={`ci ${icon} ci-${size}`}></i>
        </div>

        { !noTxt && <small> {name} </small>  }
    </div>
)

export default Skills;


const skillList = {
    html: "ci-html",
    css: "ci-css",
    javascript: "ci-js",
    reactjs: "ci-react",
    tailwind: "ci-tailwind",
    node: "ci-nodejs",
    next: "ci-next",
    python: "ci-python",
    django: "ci-django",
    flask: "ci-flask",
    sql: "ci-sql",
    nosql: "ci-nosql",
    git: "ci-git",
    github: "ci-github",
    figma: "ci-figma",
    c: "c",
    mysql: "mysql"
}
// [
//     "html", "css", "javascript", "tailwind", "bootstrap", "nodejs","nextjs", "python", "django", "flask", "sql", "nosql", "git", "figma"
// ]