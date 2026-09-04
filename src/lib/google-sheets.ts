export interface FormSubmissionData {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  [key: string]: string | undefined;
}

export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLHYkCc-KcCXt3AF4Hw1HQAfu9X3488bxabUTawCxqJSgbutd-bn8rMxppeB8qgVBGMg/exec";

/**
 * Sends form data to Google Apps Script endpoint to log into the linked Google Sheet / Excel.
 * Posts data via both URLSearchParams (for e.parameter in GAS) and JSON payload (for e.postData)
 * with mode 'no-cors' to handle Google Apps Script redirect behavior seamlessly.
 */
export async function submitToGoogleSheet(data: FormSubmissionData): Promise<boolean> {
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

  const payload: Record<string, string> = {
    timestamp,
    date: new Date().toISOString().split("T")[0],
    time: new Date().toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  Object.entries(data).forEach(([k, v]) => {
    if (v !== undefined && v !== null) {
      payload[k] = v;
    }
  });

  try {
    // 1. Send as URLSearchParams (standard e.parameter format for Google Apps Script)
    const params = new URLSearchParams();
    Object.entries(payload).forEach(([key, val]) => {
      params.append(key, val);
    });

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    // 2. Secondary dispatch as raw JSON text to cover scripts reading e.postData.contents
    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    }).catch(() => {});

    return true;
  } catch (error) {
    console.error("Failed to submit to Google Sheet:", error);
    return false;
  }
}
