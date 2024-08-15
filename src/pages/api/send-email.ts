import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import type { NextApiRequest, NextApiResponse } from "next";

const sesClient = new SESClient({ region: "us-east-2" });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, subject, message } = req.body;

    const params = {
      Source: "emailer@dag.gy",
      Destination: {
        ToAddresses: ["contact@arnavjindal.xyz"],
        CcAddresses: [email],
      },
      Message: {
        Subject: {
          Data: subject,
        },
        Body: {
          Text: {
            Data: message,
          },
        },
      },
    };

    try {
      const command = new SendEmailCommand(params);
      await sesClient.send(command);
      res.status(200).json({ success: true });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
