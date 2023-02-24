export function generateUniqueId(): string {
  const timestamp = Date.now().toString(36); // Convert current time to base-36 string
  const randomNum = Math.random()
    .toString(36)
    .substr(2, 5); // Generate random base-36 string
  return `${timestamp}-${randomNum}`; // Combine timestamp and random number
}
