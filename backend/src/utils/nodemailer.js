import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: 'abhyudayacodingclub@svvv.edu', 
        pass: 'use-your-own', 
    },
});


export {
  transporter
};
