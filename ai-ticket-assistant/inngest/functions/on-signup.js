import {Inngest} from '../client';
import User from '../../models/user.js'
export const onUserSignup = Inngest.createFunction(
    {id : "on-user-signup" , retries : 2},
    { event : "user/signup"},
    async ({event , step})=>{
        try{
            const {email} = event.data
            const user =  await step.run('get-user-email' , async()=>{
                const userObject = await User.findOne({email})
                if(!userObject){
                    throw new NonRetriableError("User no longer exists")
                }
                return userObject; 
            })
            await step.run("send-welcome-email" , async()=>{
                const subject = `Welcome to the app`
                const message = `Hi, 
                \n\n
                Thanks for signing up. We are glad to have you onboard`
                await sendMail(user.email , subject , message)
            })
        }catch{

        }
    }
)