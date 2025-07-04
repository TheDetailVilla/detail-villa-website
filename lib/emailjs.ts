import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_jczhtv4',
  TEMPLATE_ID: 'template_0mmks5w',
  PUBLIC_KEY: 'eZSDYelcTSXBOpToC',
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendEmail = async (formData: any) => {
  try {
    // Format service details for better email presentation
    const serviceDetails = formData.service ? `
Service Details:
- Service Interested In: ${formData.service}
- Vehicle Information: ${formData.vehicle || 'Not specified'}
- Service Location: ${formData.location || 'Not specified'}
` : '';

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        message: formData.message,
        vehicle_info: formData.vehicle || 'Not specified',
        service_interested: formData.service || 'Not specified',
        location: formData.location || 'Not specified',
        service_details: serviceDetails,
        customer_info: `
Customer Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}
        `,
        full_message: `
Customer Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Service Interested In: ${formData.service || 'Not specified'}
- Vehicle Information: ${formData.vehicle || 'Not specified'}
- Service Location: ${formData.location || 'Not specified'}

Message:
${formData.message}
        `
      },
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, message: 'Failed to send message. Please try again.' };
  }
};

export default emailjs; 