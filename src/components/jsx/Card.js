import '../styles/Card.css'

//new component to act as a customized div
function Card({children, className}) {
    const classes = 'card ' + className;
    return <div className={classes}>{children}</div>
}

export default Card