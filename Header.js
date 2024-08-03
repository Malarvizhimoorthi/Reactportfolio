import React from 'react'

function Header() {
    return (
        <div class="header">
            <a href="#" class="head">Malarvizhi</a>
            <navbar class="nav">
                <a href="/" class="active">Portfolio</a>
                <a href="/home" class="active">Home</a>
                <a href="/About" class="active" >About</a>
                <a href="/Skills" class="active" >Skills</a>
                <a href="/Contact" class="active" >Contact</a>
            </navbar>
        </div>
    );
}

export default Header;