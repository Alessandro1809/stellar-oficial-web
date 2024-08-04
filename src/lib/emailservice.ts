
const url = 'https://api.emailjs.com/api/v1.0/email/send';

const serviceId: string = import.meta.env.SECRET_EMAILJS_SERVICE_ID;
const templateId: string = import.meta.env.SECRET_EMAILJS_TEMPLATE_ID;
const userId: string = import.meta.env.SECRET_EMAILJS_USER_ID;

export const sendEmail = async (name: string, email: string, message: string) => {
    const templateParams = {
        to_name: name,
        reply_to: email, 
        message: message
    };
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            service_id: serviceId,
            template_id: templateId,
            user_id: userId,
            template_params: templateParams
        })
    })
    
}