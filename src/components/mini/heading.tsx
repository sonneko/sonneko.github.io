import Error from "./Error";

const styles = {
    h1: {
        
    },
    h2: {
        
    },
    h3: {

    },
    h4: {
        margin: "0.2rem 0"
    }
}

function Heading({scale, children}: {scale: number, children: React.ReactNode}) {
    let out : React.ReactNode;
    switch(scale) {
        case 1:
            out =  <h1 style={styles.h1}>{children}</h1>;
            break;
        case 2:
            out =  <h2 style={styles.h2}>{children}</h2>;
            break;
        case 3:
            out = <h3 style={styles.h3}>{children}</h3>;
            break;
        case 4:
            out = <h4 style={styles.h4}>{children}</h4>;
            break;
        default:
            return <Error>Heading componentに不正値が混入しました</Error>
    }
    return <>{out}<br /></>
}


export default Heading;