export default  MyHeader = (props) => {    
    return (
        <div className="Header">
            <header>asdasd </header> 
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/1">Blog</Link></li>
            </ul>
        </div>
    );
}

