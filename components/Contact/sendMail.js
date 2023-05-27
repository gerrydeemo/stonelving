import emailjs from "emailjs-com";

const sendMail = ({ theFromEmail, theSubject, theDescription }) => {
  const serviceId = "service_ax4g8c3";
  const templateId = "template_5v7uhkj";
  const userId = "user_ynopXmkGBgwjko9yWGUsF";

  const templateParams = {
    from_email: theFromEmail,
    to_name: theFromEmail,
    message: theSubject + ": " + theDescription,
  };

  emailjs
    .send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
};

export default sendMail;
