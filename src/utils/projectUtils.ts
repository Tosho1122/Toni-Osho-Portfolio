import { projects, type Project } from '../data/projects';

/**
 * Generates a URL-friendly slug from a project title
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim()
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Finds a project by its slug
 */
export const findProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

/**
 * Gets the index of a project by its slug
 */
export const getProjectIndexBySlug = (slug: string): number => {
  return projects.findIndex(project => project.slug === slug);
};

/**
 * Generates a shareable URL for a project
 */
export const generateProjectShareUrl = (slug: string): string => {
  const baseUrl = window.location.origin;
  const basePath = window.location.pathname.includes('/Toni-Osho-Portfolio') 
    ? '/Toni-Osho-Portfolio' 
    : '';
  return `${baseUrl}${basePath}/#/projects/${slug}`;
};

/**
 * Copies text to clipboard with fallback support
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    }
  } catch (error) {
    console.error('Failed to copy text to clipboard:', error);
    return false;
  }
};