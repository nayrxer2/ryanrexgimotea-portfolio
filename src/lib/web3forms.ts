interface Web3FormsResponse {
  success: boolean;
}

function isSuccessfulResponse(value: unknown): value is Web3FormsResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === true
  );
}

export async function submitContactForm(formData: FormData): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      "Contact form is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.",
    );
  }

  const payload = new FormData();
  formData.forEach((value, key) => payload.append(key, value));
  payload.set("access_key", accessKey);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: payload,
  });
  const result: unknown = await response.json();

  if (!response.ok || !isSuccessfulResponse(result)) {
    throw new Error("Web3Forms rejected the contact form submission.");
  }
}
