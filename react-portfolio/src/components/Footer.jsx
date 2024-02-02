const footerStyle = {
    display: 'flex',
    justifyContent: 'center',

}

const IconStyle = {
    width: '20%'
}


function Footer() {
    return (
        <span className="navbar-text">
            <div className="" style={footerStyle}>
                <a href="mailto:terrencemccarthycode@gmail.com" ><img style={IconStyle} src={'/src/images/gmailIcon.png'} alt="Gmail-icon" /></a>
                <a href="https://github.com/Tmysterz" ><img style={IconStyle} src={'/src/images/gitIcon.png'} alt="Github-icon" /></a>
                <a href="https://www.fiverr.com/terrence_mcc?public_mode=true" ><img style={IconStyle} src={'/src/images/fivverIcon.png'} alt="Fivver-icon" /></a>
            </div>
        </span>
    )
}

export default Footer;