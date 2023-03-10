function personal(req, res){
    if (req.session.loggedin == true) {
      res.render('pages/personal');
    }else{
      res.redirect('/')
    }
  }

function tabla(req, res){
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM users',(err,per) =>{
            if(err){
                console.log(err); 
            }else{
                if (req.session.loggedin == true) {
                res.render('pages/personal', {per,name: req.session.name})
            }else{
                res.redirect('/')
            }}
        })
    })
}

module.exports = {
    personal,
    tabla
}