const whatsappNumber = "918919508969";

export function whatsappLink(
  message = "Hello Siri Career Consultancy, I would like to talk to an expert about your services.",
) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
