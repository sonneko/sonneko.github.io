const styles = {
    h1: {

    },
    h2: {

    },
    h3: {

    }
}

function Heading({scale, children}: {scale: number, children: React.ReactNode}) {
    switch(scale) {
        case 1:
            return <h1 style={styles.h1}>{children}</h1>;
        case 2:
            return <h2 style={styles.h2}>{children}</h2>;
        case 3:
            return <h3 style={styles.h3}>{children}</h3>;
    }
}


export default Heading;