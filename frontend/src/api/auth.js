const BASE_URL = "http://localhost:4000/api/auth";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    return await response.json();
  } catch (error) {
    console.error("Register Error:", error);
  }
};


export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Throw an error to handle it gracefully in frontend
      throw new Error(data.message || "Login failed");
    }

    return data;
  } catch (error) {
    console.error("❌ Login API Error:", error.message);
    return { message: error.message };
  }
};

