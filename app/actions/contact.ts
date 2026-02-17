"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ActionResult {
  success: boolean;
  error?: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function submitContactForm(
  _prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name?.trim()) {
    return { success: false, error: "Name is required" };
  }

  if (!email?.trim()) {
    return { success: false, error: "Email is required" };
  }

  if (!validateEmail(email)) {
    return { success: false, error: "Please enter a valid email address" };
  }

  if (!message?.trim()) {
    return { success: false, error: "Message is required" };
  }

  if (message.length < 10) {
    return { success: false, error: "Message must be at least 10 characters" };
  }

  return { success: true };
}
