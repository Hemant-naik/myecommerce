const express =require('express')
const app=express()
const mysql=require('mysql');

const cors=require('cors');

const nodemailer=require('nodemailer');
//photo update maduke
 const multer=require("multer");    
// const { default: Customerorder } = require('../client/src/Components/Customerorder');
// const { default: Categoryview } = require('../client/src/Components/Categoryview');
//  const { default: Categoryy } = require('../client/src/Components/Categoryy');


// date for userrhome
let today=new Date();
dd=today.getDate();
mm=today.getMonth()+1;
yy=today.getFullYear();
let cdate=yy +"-" + mm +"-"+dd;
let ctime=today.toLocaleTimeString();


app.use(cors());
app.use(express.json());

app.listen(3001,()=>
{
    console.log("running on port 3001");
});

app.get("/",(req,res)=>
{
    res.send("hello bro.!")
});

const dbcon=mysql.createConnection({
    host:"localhost",
    "user":"root",
    "password":"",
    "database":"e-commerce",
})

dbcon.connect(function(err){
    if(err) throw err;
    console.log("connected!")
});





//registration form
app.post('/reg',(req,res)=>{
    feeddata=req.body.feeddata
    fname=feeddata.fname
    lname=feeddata.lname
    dob=feeddata.dob
   gender=feeddata.gender
  	address=feeddata.address
 	pincode=feeddata.pincode	
    email=feeddata.email
    password=feeddata.password
    mobile_no=feeddata.mobile_no	
   
    dbcon.query("insert into registration(fname,lname,dob,gender,address,pincode,email,mobile_no) values(?,?,?,?,?,?,?,?)",
    [fname,	lname,	dob,gender,	address	,pincode,email,mobile_no],
    (err,result)=>{
        if(err){
            console.log(err);}
        else{
             res.send(result)
           dbcon.query("insert into login (username,password,utype) values(?,?,?)"
              [email,password,'user'])
             res.send(result)
        }
    });
})



//give feedback
app.post('/Feedback',(req,res)=>{
    feeddata=req.body.feeddata
    user_id=feeddata.user_id
    pid=feeddata.pid
    about_product=feeddata.about_product
    about_service=feeddata.about_service
    suggetions=feeddata.suggetions

    dbcon.query("insert into Feedback(user_id,pid,about_product,about_service,suggetions) values(?,?,?,?,?)",
    [user_id,pid,about_product,about_service,suggetions],
    (err,result)=>{
        if(err){
            console.log(err);}
        else{
            res.send(result)
        }
    });
})



// category post madu data
//Give category
app.post('/category',(req,res)=>{
    feeddata=req.body.feeddata
    categoryname=feeddata.category_name


    dbcon.query("insert into category(category_name)values(?)",
    [categoryname],
    (err,result)=>{
        if(err){console.log(err);}
        else{
            res.send(result)
        }
    });
   
});

//image storage config
let imgconfig=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../client/public/Upload");
    },
    //image filter
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`)
    }
})

const isImage=(req,file,callback)=>{
    if (file.mimetype.startsWith("image")) {
        callback(null,true)}
        else{
            callback(null,Error("ony image is allowed"))}
}

let upload=multer({
    storage:imgconfig,
    fileFilter:isImage
})

//product post code

app.post('/Product',upload.single("file"),(req,res)=>{
    // feeddata=req.body.feeddata
    category=req.body.category
    product_name=req.body.product_name
    qty=req.body.qty
    uom=req.body.uom
    price=req.body.price
    stock=req.body.stock
   const {filename}=req.file
   console.log(req.file)
   description=req.body.description
    dbcon.query("insert into Product(category,product_name,	qty,uom,price,stock,image,description) values(?,?,?,?,?,?,?,?)",
    [category,product_name,qty,uom,price,stock,filename,description],
    (err,result)=>{
        if(err){
            console.log(err);}
        else{
            res.send(result)
        }
    });
})
//payment post code
app.post('/Payment',(req,res)=>{
    feeddata=req.body.feeddata
    order_id=feeddata.order_id
    total_amount=feeddata.total_amount
    user_id=feeddata.user_id
    paid_date=feeddata.paid_date

    

    dbcon.query("insert into Payment(order_id,user_id,total_amount,paid_date)values(?,?,?,?)",
    [order_id,user_id,total_amount,paid_date],
    (err,result)=>{
        if(err){
            console.log(err);}
        else{
            res.send(result)
        }
    });
})


//featch code or hakid codu show mDUKE
//registration code for view
app.get('/viewreg',(req,res)=>{
    // console.log("hi")
    const q="select * from registration ";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err)}
            else{
                res.send(result)
                //  console.log(result)
            }
    });
});



// view feedback code 

app.get('/viewfeedback',(req,res)=>{
    // console.log("hi")
    const q="select * from Feedback";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err)}
            else{
                res.send(result)
                //  console.log(result)
            }
    });
});

// category view code 
app.get('/categoryview',(req,res)=>{
    const q="select * from category";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

//product get code
app.get('/viewProduct',(req,res)=>{
    // console.log("hi")
    const q="select * from Product";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err)}
            else{
                res.send(result)
                //  console.log(result)
            }
    });
});

app.get('/viewpayment',(req,res)=>{
    // console.log("hi")
    const q="select * from Payment";
    dbcon.query(q,(err,result)=>{
        if(err){
            console.log(err)}
            else{
                res.send(result)
                //  console.log(result)
            }
    });
});




//delete code for feedback

app.delete('/delfeed/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from feedback where  id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})

//category delete data
app.delete('/delcategory/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from category where  id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})

//payment delete code
app.delete('/delpayment/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from payment where  id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})

//delte code for product

app.delete('/delproduct/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from product where  id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})

//reg  code for delete
app.delete('/delreg/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from registration where id=?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})


//login authentication code

app.post('/login',(req,res)=>{
    // console.log("login check")
    logdata=req.body.logindata
    username=logdata.username
    password=logdata.password
    // console.log(username)
    dbcon.query("select * from login where username=? AND password=?",
    [username,password],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

//forget code baruke 
// Forgot Password
app.post('/forgotpass',(req,res) => {
    const otp=Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
    username=req.body.email
    console.log(username)
    dbcon.query("SELECT * from login where username =?",[username],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,   //465
                auth: {
                  user: "naikhemant5687@gmail.com",
                  pass: "vmwcujqagclbcbmw",
                },
              });
            
              let info = transporter.sendMail({
                from: '"Hemant" <naikhemant5687@gmail.com>', // sender address
                to: username, // list of receivers
                subject: "ONE TIME PASSWORD", // Subject line
                text: "Your OTP:", // plain text body
                html: "<b>OTP: </b>"+otp, // html body
              }); 
              console.log("Message sent: %s", info.messageId);
            dbcon.query("insert into otp(otp,status)values(?,?)",
            [otp,'active'])
           res.send(result); }     
    }
    );
});

// Otp Verification
app.post('/otp',(req,res) => {
    otp=req.body.otp
    console.log(otp)
    dbcon.query("SELECT * from otp where otp =?",[otp],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
            
           res.send(result); }     
    }
    );
});

// Reset Password Code

app.post('/resetpassword',(req,res) => {
    newpass=req.body.newpass
    confirmpass=req.body.confirmpass
    uid=req.body.uid

        dbcon.query("update login set password=? where username =?",[newpass,uid],
    (err,result)=> {
        if(err){
            console.log(err);}
        else{
           res.send(result); }     
    }
    ); 
   
});

//send oerder
app.post('/addcart/:id/:uid',(req,res)=>{
    console.log("Order sent")
    const qty=1
    const id=req.params.id
    console.log("hey"+id)
    const uid=req.params.uid
    const q="select * from product where id=?";
    dbcon.query(q,[id],(err,result)=>{
        if(err){
            console.log(err); 
          }else{
            const price=result[0].price
            const total=price
            dbcon.query("insert into customer_order(user_id,pid,qty,price,total,order_date,order_time,order_status,payment_status)values(?,?,?,?,?,?,?,?,?)",
            [uid,id,qty,price,total,cdate,ctime,'pending','pending'])
            res.send(result)
            console.log(result)
          }

    })
})


// buy now
app.post('/buynow/:id/',(req,res)=>{
    console.log("Order sent")
    // const qty=1
    const id=req.params.id
    console.log("hey"+id)
    qty=req.body.qty
    uid=req.body.uid
    const q="select * from product where id=?";
    dbcon.query(q,[id],(err,result)=>{
        if(err){
            console.log(err); 
          }else{
            const price=result[0].price
            const total=price*qty
            dbcon.query("insert into customer_order(user_id,pid,qty,price,total,order_date,order_time,order_status,payment_status)values(?,?,?,?,?,?,?,?,?)",
            [uid,id,qty,price,total,cdate,ctime,'confirm','pending'])
            res.send(result)
            console.log(result)
          }

    })
})


// cart view
app.get('/mycart/:id/',(req,res)=>{
    const uid=req.params.id;
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on a.user_id = ? and a.pid=b.id and a.order_status=?";
    dbcon.query(q,[uid,'pending'],(err,result)=>{
        if(err){
            // alert("hai")
            console.log(err)
        }else{
            res.send(result)
        }
    })
})






// delete cart view
app.delete('/delmycart/:id',(req,res)=>{
    const id=req.params.id
    dbcon.query("delete from customer_order where  id= ?",id,(err,result)=>{
        if(err){console.log(err)}
        else{res.send(result)}
    })
})




// order view

// app.get('//:id/',(req,res)=>{
//     const uid=req.params.id;
//     const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on a.user_id = ? and a.pid=b.id and a.order_status=?";


//     dbcon.query(q,[uid,'confirm'],(err,result)=>{
//         if(err){
//             console.log(err)
//         }else{
//             res.send(result)
//         }
//     })
// })


//View myorder details
app.get('/myorder/:id/',(req,res) =>{
    const uid = req.params.id;
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on a.user_id = ? and a.pid=b.id and a.order_status=?";
    dbcon.query(q,[uid,'confirm'],(err,result)=>{
        if(err){
            console.log(err);}
            else{
                res.send(result);
            }
        
    });
});

//paybillnext
app.post('/paybill_next/:price',(req,res)=>{
    console.log("Payment Inserted")
    price=req.body.price,
    payment_id=req.body.payment_id
    uid=req.body.uid
    const status="Paid"
    const id=Math.floor(Math.random()*(9999 - 1000 +1)+ 1000)
    const q="update customer_order set payment_status =? ,order_status=? where user_id=?";
    dbcon.query(q,[status,"confirm",uid],(err,result)=>{
        if(err){
            console.log(err)}
            else{
                dbcon.query("insert into payment(order_id,order_amount,payment_date,user_id,transaction_no) values(?,?,?,?,?)",
                [id,price,cdate,uid,payment_id])
                res.send(result)
            }
    })
})


//my order view

// Do Payment through razorpay  
app.post('/paybill/:id',(req,res) => {
    console.log("Payment Inserted")
    const id=req.params.id
    price=req.body.price,
    payment_id=req.body.payment_id
    uid=req.body.uid
    const status='Paid'
    const q="update customer_order set payment_status=? where id=?";
    dbcon.query(q,[status,id],(err,result) => {
        if(err){
        console.log(err);}
        else{ 
            dbcon.query("insert into payment(order_id,order_amount,payment_date,user_id,transaction_no)values(?,?,?,?,?)",
            [id,price,cdate,uid,payment_id])
            //console.log(result[0].price)
            res.send(result);
        }
    });
});



// Customerorder view
app.get('/cust',(req,res)=>{
    const uid=req.params.id;
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on payment_status = ? and a.pid=b.id";
    dbcon.query(q,['paid'],(err,result)=>{
        if(err){
            // alert("hai")
            console.log(err)
        }else{
            res.send(result)
        }
    })
})

//todays
app.get('/today',(req,res)=>{
    const uid=req.params.id;
    const q="select a.id,a.pid,a.user_id,a.qty,a.price,a.total,a.order_date,a.order_time,a.order_status,a.payment_status,b.product_name from customer_order as a join product as b  on payment_status = ? and a.pid=b.id and order_date=?";
    dbcon.query(q,['paid',cdate],(err,result)=>{
        if(err){
            // alert("hai")
            console.log(err)
        }else{
            res.send(result)
        }
    })
})