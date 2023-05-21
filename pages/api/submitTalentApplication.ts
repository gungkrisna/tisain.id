import { NextApiRequest, NextApiResponse } from "next";
import aws from "aws-sdk";
import * as nodemailer from "nodemailer";
import sesTransport from "nodemailer-ses-transport";

aws.config.update({
  apiVersion: "2010-12-01",
  signatureVersion: 'v4',
  region: "ap-southeast-2",
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const ses = new aws.SES();

const transporter = nodemailer.createTransport(
  sesTransport({
    SES: ses,
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { fullName, email, portfolio } = req.body;

  try {
    const response = await transporter.sendMail({
      from: "marketing@tisain.id",
      to: "gungkrisna@outlook.com",
      subject: "New talent application",
      text: `Name: ${fullName}\nEmail: ${email}\nPortfolio: ${portfolio}`,
    });

    return response?.messageId
      ? res.status(200).json({ ok: true })
      : res.status(500).json({ ok: false, msg: "Failed to send email" });
  } catch (error: any) {
    console.log("ERROR", error.message);
    return res.status(500).json({ ok: false, msg: "Failed to send email" });
  }
}
