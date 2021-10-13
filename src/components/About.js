
const About = ({ 
    src="https://via.placeholder.com/215 (Links to an external site.)", 
    text 
}) => {

    return <aside>
        <img src={ src } alt="blog logo"/>
        <p>{ text }</p>
    </aside>
}

export default About