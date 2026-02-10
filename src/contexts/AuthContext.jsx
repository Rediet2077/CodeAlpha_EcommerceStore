import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const urls = [
            'http://localhost/react-ecommerce-store/backend/public/api/login',
            'http://localhost:8000/api/login'
        ];

        let lastError;

        for (const url of urls) {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ email, password })
                });

                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();

                    if (!response.ok) {
                        throw new Error(data.message || 'Login failed');
                    }

                    setUser({
                        email: data.user.email,
                        name: data.user.name,
                        token: data.token,
                        joined: new Date().toLocaleDateString() // You might want to get this from DB if available
                    });
                    return { success: true };
                } else {
                    if (response.status === 404) continue;
                    throw new Error("Server returned non-JSON response.");
                }
            } catch (error) {
                console.error(`Login attempt failed for ${url}:`, error);
                lastError = error;
            }
        }

        return { success: false, message: lastError ? lastError.message : "Login failed" };
    };

    const register = async (username, email, password) => {
        const urls = [
            'http://localhost/react-ecommerce-store/backend/public/api/register',
            'http://localhost:8000/api/register'
        ];

        let lastError;

        for (const url of urls) {
            try {
                console.log(`Attempting registration to: ${url}`);
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: username,
                        email: email,
                        password: password,
                        password_confirmation: password
                    })
                });

                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.message || 'Registration failed');
                    }

                    // Success
                    setUser({
                        email: data.user.email,
                        name: data.user.name,
                        token: data.token,
                        joined: new Date().toLocaleDateString()
                    });
                    return { success: true };
                } else {
                    const text = await response.text();
                    console.error(`Non-JSON response from ${url}:`, text);
                    lastError = new Error("Server returned non-JSON response. Check console for details.");
                    // Don't continue to next URL if we got a response from the server (even if it's an error page)
                    // unless it's a 404 which might mean wrong path
                    if (response.status === 404) continue;
                    break;
                }
            } catch (error) {
                console.warn(`Failed to connect to ${url}:`, error);
                lastError = error;
                // Continue to next URL on network error
            }
        }

        console.error("All registration attempts failed.");
        return { success: false, message: lastError ? lastError.message : "Could not connect to server." };
    };

    const logout = () => {
        setUser(null);
    };

    const value = {
        user,
        login,
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
