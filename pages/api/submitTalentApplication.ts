import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";
import * as nodemailer from "nodemailer";
import sesTransport from "nodemailer-ses-transport";

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "us-east-1",
});

const ses = new aws.SES({ apiVersion: "2010-12-01", region: "us-east-1" });

const transporter = nodemailer.createTransport(
  sesTransport({
    SES: ses,
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ succeeded: false, msg: "Method Not Allowed" });
  }

  const { fullName, email, portfolio } = req.body;

  const htmlContent = `
  <html lang="en-US">
    <body>
      <h1>New talent application</h1>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Portfolio:</strong> <a href="${portfolio}">${portfolio}</a></p>
    </body>
  </html>
`;

  try {
    const response = await transporter.sendMail({
      from: "talent@tisain.id",
      to: "gungkrisna@outlook.com",
      subject: "New talent application",
      html: htmlContent,
    });

    return response?.messageId
      ? res.status(200).json({ succeeded: true })
      : res.status(500).json({ succeeded: false, msg: "Failed to send email" });
  } catch (error) {
    return res
      .status(500)
      .json({ succeeded: false, msg: "Failed to send email" });
  }
}
