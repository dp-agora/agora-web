import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    linkedInUrl: z.string().optional(),
    jobTitle: z.string().min(1, "Job title is required"),
});

export async function POST(req: NextRequest) {
    try {
        if (!resend) {
            console.error("RESEND_API_KEY is not configured");
            return NextResponse.json({ error: "Email service is not configured on the server. Please check environment variables." }, { status: 500 });
        }

        const formData = await req.formData();

        const firstName = formData.get("firstName") as string;
        const lastName = formData.get("lastName") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const linkedInUrl = formData.get("linkedInUrl") as string;
        const jobTitle = formData.get("jobTitle") as string;
        const cvFile = formData.get("cvFile") as File;

        // Validate text fields
        const result = schema.safeParse({
            firstName,
            lastName,
            email,
            phone: phone || undefined,
            linkedInUrl: linkedInUrl || undefined,
            jobTitle
        });

        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            return NextResponse.json({ error: "Invalid form data", details: errors }, { status: 400 });
        }

        // Validate file
        if (!cvFile || cvFile.type !== "application/pdf") {
            return NextResponse.json({ error: "Please upload a PDF file" }, { status: 400 });
        }

        if (cvFile.size > 10 * 1024 * 1024) {
            return NextResponse.json({ error: "File size must be less than 10MB" }, { status: 400 });
        }

        const buffer = Buffer.from(await cvFile.arrayBuffer());

        const { data, error } = await resend.emails.send({
            from: "Agora Abogados <dposada@agoralatam.com>",
            to: "dposada@agoralatam.com",
            subject: `New Job Application — ${jobTitle}`,
            replyTo: email,
            text: `
        New job application received for: ${jobTitle}
        
        APPLICANT INFORMATION:
        ----------------------
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        LinkedIn: ${linkedInUrl || "Not provided"}
        
        (CV is attached as a PDF)
      `,
            attachments: [
                {
                    filename: `${firstName}_${lastName}_CV.pdf`,
                    content: buffer,
                },
            ],
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json({ error: "The email service returned an error: " + error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true, data });
    } catch (err) {
        console.error("Submission error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
