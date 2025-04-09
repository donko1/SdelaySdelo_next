
import isParallel from "@/utils/get_settings"


interface ApiResponse {
    detail?: string;
    token?: string;
}

function get_url(isParallel: boolean): string {
    const basePath = isParallel 
        ? "http://127.0.0.1:8000/api/fast_create_user"
        : "/api/fast_create_user";
    return basePath;
}

export async function create_user(username: string, password: string): Promise<string> {
    const response = await fetch(get_url(isParallel()), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        }),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData: ApiResponse = await response.json();
    
    if (responseData.detail === "Access token created" && responseData.token) {
        return responseData.token;
    }
    
    throw new Error(responseData.detail || "Access token is not created");
}
