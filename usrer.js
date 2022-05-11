import express from "express";

const router=express.Router();
// const users=[
//     {firstName:"purnima",
//     lastName:"Kumari",
//     age:23
//    }
// ]
// all routers in here are starting with/users
router.get('/',(req,res)=>{
    // console.log(users)
    res.send('Hello')
});

export default router;