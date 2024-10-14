const styles = {
    h1: {

    },
    h2: {

    },
    h3: {

    }
}

function Heading({scale, text}: {scale: number, text: String}) {
    switch(scale) {
        case 1:
            return <h1 style={styles.h1}>{text}</h1>;
        case 2:
            return <h2 style={styles.h2}>{text}</h2>;
        case 3:
            return <h3 style={styles.h3}>{text}</h3>;
    }
}


export default Heading;