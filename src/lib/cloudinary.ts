/**
 * Browser-side uploads use an unsigned upload preset (NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET).
 * Server-only signing can use CLOUDINARY_API_KEY / CLOUDINARY_API_SECRET via a Route Handler if needed later.
 */

export function getCloudinaryPublicConfig(): { cloudName: string; uploadPreset: string } {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
    if (!cloudName || !uploadPreset) {
        throw new Error(
            "Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET."
        );
    }
    return { cloudName, uploadPreset };
}

export type CloudinaryUploadResponse = {
    secure_url: string;
    public_id: string;
    width: number;
    height: number;
};

/**
 * Upload a single image with the project's unsigned preset. Returns the HTTPS URL for storage (e.g. Firestore).
 */
export async function uploadImageUnsigned(file: File, options?: { folder?: string }): Promise<string> {
    const { cloudName, uploadPreset } = getCloudinaryPublicConfig();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    if (options?.folder) {
        formData.append("folder", options.folder);
    }

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
    });

    const data = (await res.json()) as CloudinaryUploadResponse & { error?: { message?: string } };

    if (!res.ok) {
        throw new Error(data.error?.message || `Cloudinary upload failed (${res.status})`);
    }

    return data.secure_url;
}
