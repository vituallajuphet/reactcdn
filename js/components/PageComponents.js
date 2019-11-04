
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            title : "Music Hire.com"
        }
    }
    render(){
        const {title} = this.state
        return(
            <div className="home_page">
                <h1 className="h1_title">{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, repellat dolorum voluptates ad soluta dolores corporis voluptas quod eveniet obcaecati nesciunt! Veniam ipsam similique itaque numquam reiciendis quae sit quia.</p>
            </div>
            
        );
    }
}

const AboutUs = () => {
    console.log()
    return (
        <div className="About">
            
            <h2>About us</h2>  
        </div>
    );
}
const Services = () => {
    return (
        <div className="services">
            <h2>SErvices</h2>  
        </div>
    );
}
const Blog = () => {
    return (
        <div className="services">
            <h2>Blog</h2>  
        </div>
    );
}

const Contact = () => {
    return (
        <div className="services">
            <h2>Contact</h2>  
        </div>
    );
}
const Careers = () => {
    return (
        <div className="careers">
            <h2>Careers</h2>  
        </div>
    );
}

class ServicesInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {servInfo} = this.props;

        return (
            <div>
                {servInfo.txt}
            </div>
        );
    }
}