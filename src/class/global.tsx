
class GlobalContextClass {
    display: 'dark' | 'light'
    userDevice: 'tablet' | 'pc' | 'phone'

    constructor() {
        this.display = 'light';
        this.userDevice = 'pc';

        // 初期化
        this.check();
    }

    // デバイスの変更を監視
    check() {
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
    }
}

export default GlobalContextClass; 