export const sendContactEmail = async ({ name, email, phone, message }) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      subject: `New Inquiry from ${name}`,
      sender: {
        name: "Arun Seamless Pipe and Tubes",
        email: process.env.SENDER_EMAIL,
      },
      to: [
        {
          email: process.env.RECEIVER_EMAIL,
          name: "Admin",
        },
      ],
      htmlContent: `
<div style="font-family: Arial, sans-serif; background:#f4f6f8; padding:30px;">

  <div style="max-width:600px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,0.08);">

    <!-- Header -->
    <div style="background:#1B2B39; padding:20px 25px; text-align:center;">
      <h1 style="color:#ffffff; margin:0; font-size:20px; letter-spacing:1px;">
        Arun Seamless Pipe & Tubes
      </h1>
      <p style="color:#F16500; margin:5px 0 0; font-size:12px; letter-spacing:2px;">
        NEW INQUIRY RECEIVED
      </p>
    </div>

    <!-- Body -->
    <div style="padding:25px;">

      <h2 style="margin-top:0; color:#1B2B39; font-size:18px;">
        Contact Form Submission
      </h2>

      <p style="color:#555; font-size:14px; line-height:1.6;">
        You have received a new inquiry from your website contact form.
      </p>

      <div style="margin-top:20px; padding:15px; background:#f9fafb; border-radius:8px;">

        <p style="margin:8px 0; font-size:14px;">
          <strong>Name:</strong> ${name}
        </p>

        <p style="margin:8px 0; font-size:14px;">
          <strong>Email:</strong> ${email}
        </p>

        <p style="margin:8px 0; font-size:14px;">
          <strong>Phone:</strong> ${phone || "Not provided"}
        </p>

      </div>

      <div style="margin-top:20px;">
        <p style="margin-bottom:8px; font-size:14px; font-weight:bold; color:#1B2B39;">
          Message:
        </p>

        <div style="background:#ffffff; border:1px solid #e5e7eb; padding:15px; border-radius:8px; font-size:14px; color:#444; line-height:1.6;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
      </div>

    </div>

    <!-- Footer -->
    <div style="background:#f4f6f8; padding:15px; text-align:center; font-size:12px; color:#888;">
      This message was sent from your website contact form.
    </div>

  </div>

</div>
`,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to send email");
  }

  return await response.json();
};
