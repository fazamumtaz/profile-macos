export async function apiRequest(
  endpoint,
  {
    method = "GET",
    query = {},
    body = null,
    headers: customHeaders = {},
    isFormData = false,
  } = {}
) {
  const baseUrl = "https://profile-card-api.vercel.app/api";
  const queryString = Object.keys(query).length
    ? "?" + new URLSearchParams(query).toString()
    : "";
  const url = `${baseUrl}${endpoint}${queryString}`;

  const headers = isFormData
    ? customHeaders
    : { "Content-Type": "application/json", ...customHeaders };

  const options = { method, headers };
  if (body) options.body = isFormData ? body : JSON.stringify(body);

  try {
    const res = await fetch(url, options);

    // ✅ Handle 401 Unauthorized globally (token expired/invalid)
    if (res.status === 401) {
      console.error("401 Unauthorized - Token expired or invalid");
      localStorage.removeItem("token");

      // Only redirect if not already on login/signup page
      if (
        !window.location.pathname.includes("/login") &&
        !window.location.pathname.includes("/signup")
      ) {
        window.location.href = "/login";
      }

      throw new Error("Session expired. Please login again.");
    }

    const data = await res.json();

    // ✅ Handle other HTTP errors
    if (!res.ok) {
      throw new Error(
        data.message || `Request failed with status ${res.status}`
      );
    }

    return data;
  } catch (err) {
    // ✅ Better error categorization
    if (err.name === "TypeError" && err.message.includes("fetch")) {
      console.error("Network error - Cannot reach server");
      throw new Error("Network error. Please check your connection.");
    }

    // ✅ Don't log sensitive errors to console in production
    if (process.env.NODE_ENV === "development") {
      console.error("API Request Error:", err);
    }

    throw err;
  }
}

// ✅ Optional: Helper to check token validity without making API call
export function isTokenExpired() {
  const token = localStorage.getItem("token");
  if (!token) return true;

  try {
    // Decode JWT payload (format: header.payload.signature)
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();

    // Check if token expires in less than 1 minute
    return currentTime >= expirationTime - 60000;
  } catch (e) {
    // Invalid token format
    return true;
  }
}

// ✅ Optional: Get remaining token time
export function getTokenTimeRemaining() {
  const token = localStorage.getItem("token");
  if (!token) return 0;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const expirationTime = payload.exp * 1000;
    const currentTime = Date.now();
    const remaining = expirationTime - currentTime;

    return remaining > 0 ? remaining : 0;
  } catch (e) {
    return 0;
  }
}
