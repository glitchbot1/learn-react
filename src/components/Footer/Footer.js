import style from './Footer.module.css'

function Footer(){
    return(
        <div className='footer'>
            <nav className={style.footer_nav}>
                <a className={style.nav_item} href="my-app/src/components/Sidebar/Sidebar#">Profile</a>
                <a className={style.nav_item} href="my-app/src/components/Sidebar/Sidebar#">Messages</a>
                <a className={style.nav_item} href="my-app/src/components/Sidebar/Sidebar#">News</a>
                <a className={style.nav_item} href="my-app/src/components/Sidebar/Sidebar#">Music</a>
                <div className="nav-settings">
                    <a href="my-app/src/components/Sidebar/Sidebar#">Settings</a>
                </div>
            </nav>
        </div>
    );
}

export default Footer;