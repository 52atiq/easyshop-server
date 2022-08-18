const router = require('express').Router();
// const router = express.Router();

// const signUp =()=>{
    
// }
// const signIn =()=>{

// }

router.route('/signup')
       .post(signUp);

router.route('/signin')
       .post(signIn);


       
module.exports = router;
