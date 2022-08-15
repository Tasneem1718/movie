function Err() {
    let styles={
        div:{
            background: '#fff',
            width: '100%',
            height: '100%',
            zIndex: '100',
            position: 'fixed',
            alignItems:'center'
            
        },
        span:{
            color:" #f7cf54",
            fontSize: '20px',
            display: 'block',
            margin: '20px 0',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        p:{
            textAlign: 'center',
            color: "#4fb4aa",
            fontWeight:' bold'
        }
    }
    return(
    <div className="row" style={styles.div}>
        <div className="col-md-6">
            <img src="pageNotFound.jpg" alt="" className="img-fluid"/>
        </div>
        <div className="col-md-6">
            <p style={styles.p}>
               <span style={styles.span}> OOops!</span>
                WE CAN'T SEEM TO FIND THE PAGE YOU'RE LOOKING FOR
            </p>
            
        </div>
    </div>
        
    )
}

export default Err;