class Platform {
    Android() {
        return navigator.userAgent.match(/Android/i);
    }

    BlackBerry() {
        return navigator.userAgent.match(/BlackBerry/i);
    }

    iOS() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }

    Windows(){
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    }
    
    isMobile() {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Windows());
    }
}

const platform = new Platform();
export default platform;