import nodemailer from "nodemailer";
import { j as json } from "../../../chunks/index.js";
async function POST({ request }) {
  const { name, email, message, company, phone } = await request.json();
  const transporter = nodemailer.createTransport({
    host: "verus.metanet.ch",
    port: 465,
    secure: true,
    auth: {
      user: "info@kaiserjakob.ch",
      pass: "22mmdSz,dKwl!"
    }
  });
  const mailOptions = {
    from: "info@kaiserjakob.ch",
    to: "info@kaiserjakob.ch",
    subject: `Website Anfrage: ${name}, ${email}`,
    html: `Nachricht von <b>${name}<br></b>Unternehmen: <b>${company}</b><br>E-Mail: <b>${email}</b><br>Telefonnumer: <b>${phone}</b><br><br><b>Nachricht:</b><p>${message}</p>`
  };
  try {
    await transporter.sendMail(mailOptions);
    return json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return json({ success: false, message: error.message }, { status: 500 });
  }
}
export {
  POST
};
