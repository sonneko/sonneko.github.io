
class GlobalContextClass {
    display: 'dark' | 'light'
    userDevice: 'tablet' | 'pc' | 'phone'

    constructor() {
        // ライトモードか、ダークモードかを判定
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.display = 'dark';
        } else {
            this.display = 'light';
        }

        // デバイスの判定
        const userAgentString = navigator.userAgent;
        if (userAgentString.match(/tablet/i)) {
            this.userDevice = 'tablet';
        } else if (userAgentString.match(/mobile/i)) {
            this.userDevice = 'phone';
        } else {
            this.userDevice = 'pc';
        }

        // デバイスの変更を監視
        window.addEventListener('resize', () => {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.display = 'dark';
            } else {
                this.display = 'light';
            }
            if (window.matchMedia && window.matchMedia('(max-width: 768px)').matches) {
                this.userDevice = 'phone';
            } else if (window.matchMedia && window.matchMedia('(max-width: 1024px)').matches) {
                this.userDevice = 'tablet';
            } else {
                this.userDevice = 'pc';
            }
        });
    }
}

export default GlobalContextClass; 