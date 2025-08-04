// const userSchema=require('../model/user_model');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const userSchema = require('../model/user_model'); // Adjust the path to your user schema

const SECRET_KEY = "MADPEOPLE"; 

// const Useradd = async(req,res)=>{
//     try{
//         console.log(req.body);
//         const {name,email,phone,address,password}=req.body;

//         const udata=new userSchema({name,email,phone,address,password})
//         const udatasave=await udata.save();
//         res.send(udatasave);

//     }catch(error){
//         console.log(error.message);
//         res.status(500).send("error");
//     }
// }

const Useradd = async (req,res)=>{
    try {

        const { name, email,phone, address,password} = req.body;
        let checkemail = await userSchema.findOne({email:email});
       
        if(checkemail){

            console.log("Email already exists!");
            res.json({success: false, message: "Email already exists"});
        }else{

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            let newUser = await new userSchema({
                name,
                email,
                password: hashedPassword,
                phone,
                address,
            });

            let savedUser = await newUser.save();
            console.log("New user registered Successfully");
            res.json({
                success:true,
                message: " new user reqistered successfully ",
                user: savedUser,
                
            })

        }
    } catch (error) {
        
        console.log("Error occurred", error);
        res.json({error: error})

    }
}
const Getuser=async(req,res)=>{
    try{
        const user=await userSchema.find();
        res.send(user);
    }catch(err){
        console.log(err.message);
        res.status(500).send("Issue");
    }
}

const DeleteUser = async (req, res)=> {
    try{
        let user =await userSchema.findById(req.params.id);
        if (!user) {
            return res.status(404).send("Not found");
        }
        user = await userSchema.findByIdAndDelete(req.params.id)
        res.json({ "success":"User Deleted", user: user })
    }
    catch (error){
        console.log(error.message);
        res.status(500).send("Error");
    }
}

const Updateuser  = async(req,res)=>{
    const {uname,uemail,uphone,uaddress}=req.body;

    try{
        const NewUser = {};
        if (uname) {NewUser.name =uname};
        if (uemail) {NewUser.email =uemail};
        if (uphone) {NewUser.phone = uphone};
        if (uaddress) {NewUser.address = uaddress };

        let user  = await userSchema.findByIdAndUpdate(req.params.id,{
            $set: NewUser},{new :true})
            res.json({user});
        }catch(error){
            console.error(error.mesage);
            res.status(500).send("Errorrr");
        }
    }


    const Login = async (req, res) => {
        try {
            const { email, password } = req.body;
            let user = await userSchema.findOne({email:email});
            if(!user){
    
                // console.log("Already existed Email!");
                res.json({ success: false, message: "Invalid credential!" });
            }else{
    
                let checkpass = await bcrypt.compare(password, user.password);
                if(!checkpass){
    
                    console.log("Invalid Password!");
            res.json({ success: false, message: "Invalid credential!" });
                }else{
                    let userid = user.id;
                    let tocken = await jsonwebtoken.sign(userid, SECRET_KEY);
                    console.log(" Login successfully ");
                    res.json({
                        message:"Login Successfully",
                        success: true,
                        loggedInUser: user,
                        userTocken: tocken,
                    })
                }
    
            }
        } catch (error) {

            console.log("Error occurred", error);
            res.json({error: error})
            
        }
    
    }
    
    


    const Userreg = async (req,res)=>{
        try {
    
            const { name, email,phone, password,address} = req.body;
            let checkemail = await userSchema.findOne({email:email});
           
            if(checkemail){
    
                console.log("Email already exists!");
                res.json({success: false, message: "Email already exists"});
            }else{
    
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(password, salt);
                let newUser = await new userSchema({
                    name,
                    email,
                    password: hashedPassword,
                    phone,
                    address,
                });
    
                let savedUser = await newUser.save();
                console.log("New user registered Successfully");
                res.json({
                    success:true,
                    message: " new user reqistered successfully ",
                    user: savedUser,
                    
                })
    
            }
        } catch (error) {
            
            console.log("Error occurred", error);
            res.json({error: error})
    
        }
    }
    const logout = async (req, res) => {
        try {
            // Clear session data or token from client-side (optional)
            // Example: If using tokens, you might blacklist the token or remove it from client-side storage
            // Example: req.session.destroy() if using sessions
    
            // Clear the token or session here (replace with your actual implementation)
            // For example, if using JWT:
            // res.clearCookie('token'); // Clear token from cookies
            // or if using sessions:
            // req.session.destroy();
    
            // Respond with success message
            res.json({ message: 'Logged out successfully' });
    
            // Optionally, you can send an alert message to the user
            // For example, using cookies or headers to communicate back to the client
            // res.cookie('logoutMessage', 'Logged out successfully', { maxAge: 5000 }); // Example with cookies
            // res.setHeader('X-Logout-Message', 'Logged out successfully'); // Example with headers
    
        } catch (error) {
            console.error('Error logging out:', error);
            res.status(500).json({ message: 'Failed to log out' });
        }
    };
    
    

const UserModel= {Useradd,Getuser,DeleteUser,Updateuser,Login,Userreg,logout};
module.exports = UserModel;

