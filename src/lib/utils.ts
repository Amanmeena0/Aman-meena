import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isVideo(url: string): boolean {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.ogg'];
  const isDirectVideo = videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
  const isDriveVideo = url.includes('drive.google.com');
  const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');
  return isDirectVideo || isDriveVideo || isYoutube;
}

export function getEmbedUrl(url: string): string {
  if (url.includes('drive.google.com')) {
    if (url.includes('/view')) {
      return url.replace('/view', '/preview');
    }
    const idMatch = url.match(/\/d\/([^/]+)/) || url.match(/id=([^&]+)/);
    if (idMatch) {
      return `https://drive.google.com/file/d/${idMatch[1]}/preview`;
    }
  }
  if (url.includes('youtube.com/watch?v=')) {
    return url.replace('watch?v=', 'embed/');
  }
  if (url.includes('youtu.be/')) {
    return url.replace('youtu.be/', 'youtube.com/embed/');
  }
  return url;
}
